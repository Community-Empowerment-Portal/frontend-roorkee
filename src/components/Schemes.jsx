import { useEffect, useState, useContext } from "react";
import Categories from "./Categories";
import PageContext from "@/Context/PageContext";
import FilterContext from "@/Context/FilterContext";
import { useTabContext } from "@/Context/TabContext";
import SchemeCount from "./ComponentsUtils/SchemeCount";

export default function Schemes() {
  const { searchQuery } = useTabContext();
  const { states, departments, beneficiaries, sponsoredBy } = useContext(FilterContext);
  const { currentPage } = useContext(PageContext);

  const [dataOfApi, setDataOfApi] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  
  useEffect(() => {
    const fetchState = async () => {
      try {
     
        setDataOfApi(null);

        const url = `http://65.0.122.213:8000/api/schemes/multi-state-departments/?limit=10&page=${currentPage}`;

        const requestBody = JSON.stringify({
          state_ids: states.length > 0 ? states : [],
          department_ids: Object.keys(departments).reduce((acc, key) => {
            return [...acc, ...departments[key]];
          }, []),
          sponsor_ids: sponsoredBy.length > 0 && sponsoredBy[0][0] === 2 ? sponsoredBy[0] : [],
          beneficiary_keywords: beneficiaries,
          search_query: searchQuery, 
        });

        const headers = {
          "Content-Type": "application/json",
        };

        const requestOptions = {
          method: "POST",
          headers,
          body: requestBody,
          redirect: "follow",
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDataOfApi(data);
        setTotalPages(Math.ceil(data.count / 10));
       
        const cacheKey = `${url}?state_ids=${states.join(',')}&dept_ids=${JSON.stringify(departments)}&sponsoredBy=${JSON.stringify(sponsoredBy)}&beneficiaries=${beneficiaries.join(',')}&search_query=${searchQuery}`;
        localStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setDataOfApi({ count: 0, results: [] }); 
      }
    };

    fetchState();
  }, [
    searchQuery,
    currentPage,
    sponsoredBy,
    states,
    departments,
    beneficiaries,
  ]);

  
  if (dataOfApi === null) {
    return <div>Loading...</div>;
  }

  
  if (dataOfApi.count === 0 && (states.length > 0 || departments.length > 0)) {
    return (
      <div className="flex justify-center items-center mt-8">
        No schemes found based on your preferences.
      </div>
    );
  }

  return (
    <div className="bg-white font-sans">
  
      <SchemeCount dataFromApi={dataOfApi} />


      <Categories
        ffff={"schemes"}
        dataFromApi={dataOfApi}
        totalPages={totalPages}
      />
    </div>
  );
}

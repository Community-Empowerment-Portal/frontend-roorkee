import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useTabContext } from "@/Context/TabContext";
import SearchInput from "./SearchInput";

export default function Tabs({ setComponent }) {
  const router = useRouter();
  const { tab } = router.query;
  const { activeTab, setActiveTab, searchQuery, setSearchQuery } = useTabContext();

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
      setComponent(tab);
    } else {
      setActiveTab("Schemes");
      setComponent("Schemes");
    }
  }, [tab, setActiveTab, setComponent]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setComponent(tab);
  };

  const handleSearch = (query) => {
    setSearchQuery(query); // Update searchQuery state via context
  };

  const getButtonClass = (tabName) => {
    return `flex-grow text-center font-sm p-[12px] rounded-t-[8px] text-semibold text-[14px] cursor-pointer font-sans ${
      activeTab === tabName
        ? "bg-[#EEEEFF] border-b-[3px] border-[#3431BB]"
        : "hover:bg-[#EEEEFF] hover:border-b-[3px] hover:border-[#3431BB]"
    }`;
  };

  return (
    <div className="mb-4">
      <SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />

      <div className="flex justify-center items-center gap-[15px]">
        <button
          className={getButtonClass("Schemes")}
          onClick={() => handleTabClick("Schemes")}
        >
          Schemes
        </button>
        <button
          className={getButtonClass("Job Openings")}
          onClick={() => handleTabClick("Job Openings")}
        >
          Job Openings
        </button>
        <button
          className={getButtonClass("Scholarships")}
          onClick={() => handleTabClick("Scholarships")}
        >
          Scholarships
        </button>
        <button
          className={getButtonClass("Saved")}
          onClick={() => handleTabClick("Saved")}
        >
          Saved
        </button>
      </div>
      <hr />
    </div>
  );
}

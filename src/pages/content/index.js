import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const ApplyModal = ({ isOpen, onRequestClose, scheme, setSidePannelSelected }) => {
  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [criteria, setCriteria] = useState([]);
  console.log(scheme,"hallaaaa machao")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [criteriaRes] = await Promise.all([
          fetch(`http://65.0.103.91:80/api/criteria/`),
        ]);
        if (!criteriaRes.ok)
          throw new Error(`Error fetching criteria: ${criteriaRes.statusText}`);

        const [criteriaData] = await Promise.all([
          criteriaRes.json(),
          ]);
        setCriteria(criteriaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (!isOpen) return null;

  const matchedCriteria = scheme
    ? criteria.find((c) => c.id === scheme.id)
    : null;


  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none pr-8 pl-8">
      <div className="absolute right-0 w-[40%]">
        <div className="bg-white w-full max-w-[2xl] p-8 mt-8 rounded-lg relative border border-gray-200 shadow-lg shadow-black-400 pointer-events-auto">
          {/* Close button */}
          <button
            className="absolute top-6 right-2 p-2 text-lg transition duration-300 ease-in-out hover:text-red-500"
            onClick={onRequestClose}
          >
            <IoMdClose className="w-[24px] h-[24px]" />
          </button>

          <div className="flex flex-col items-center min-h-screen bg-white overflow-y-auto max-h-[calc(100vh-8rem)]">
            {/* Scheme name */}
            <div className="pt-2 w-full sm:max-w-3xl flex justify-between items-center">
              <h1 className="mr-8 text-[20px] font-bold leading-normal font-inter text-[#0A0A0A]">
                {scheme.title}
              </h1>
            </div>

            {loading ? (
              <div className="flex items-center justify-center h-screen ">
                <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                {/* Last update date */}
                <div className="w-full sm:max-w-3xl">
                  {scheme &&
                    scheme.created_at &&
                    scheme.created_at.split(" ")[0] !== "N/A" && (
                      <div>
                        <p className="py-0.5 px-2 text-black text-sm inline-block bg-[#EEF] rounded-[12px] mt-2">
                          {`Last updated on ${scheme.created_at.split(" ")[0]}`}
                        </p>
                      </div>
                    )}
                </div>

                {/* Main data section */}
                <div className="mt-8 space-y-4 w-full sm:max-w-3xl p-4">
                  {scheme.department && scheme.department.department_name && (
                    <div className="flex items-start pb-2">
                      <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                        Department
                      </h1>
                      <p className="ml-2 flex-1">
                        {scheme.department.department_name}
                      </p>
                    </div>
                  )}
                
                  {scheme.department && scheme.department.department_name && <hr />}
                
                  {scheme.department && scheme.department.state && (
                    <div className="flex items-start pb-2 pt-2">
                      <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                        State
                      </h1>
                      <p className="ml-2 flex-1">{scheme.department.state}</p>
                    </div>
                  )}
                  {scheme.department && scheme.department.state && <hr />}

                  {scheme.title && (
                    <div className="flex items-start pb-2 pt-2">
                      <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                        Title
                      </h1>
                      <p className="ml-2 flex-1">{scheme.title}</p>
                    </div>
                  )}
                  {scheme.title && <hr />}

                  {scheme.description &&(
                    <div className="flex items-start pb-2 pt-2">
                      <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                        Description
                      </h1>
                      <p className="ml-2 flex-1">{scheme.description}</p>
                    </div>
                  )}
                  {scheme.description &&<hr />}

                  {matchedCriteria.description && (
                    <div className="flex items-start pb-2 pt-2">
                      <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                        Criteria
                      </h1>
                      <p className="ml-2 flex-1">{matchedCriteria.description}</p>
                    </div>
                  )}
                  {matchedCriteria.description && <hr />}

                  {
                    scheme.beneficiaries && scheme.beneficiaries.length != 0 &&
                    scheme.beneficiaries[0].beneficiary_type &&  scheme.beneficiaries[0].beneficiary_type !== "N/A" && (
                      <div className="flex items-start pb-2 pt-2">
                        <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                          Beneficiary Type
                        </h1>
                        <p className="ml-2 flex-1">
                          {scheme.beneficiaries[0].beneficiary_type}
                        </p>
                      </div>
                    )}
                  {scheme.beneficiaries && scheme.beneficiaries.length != 0 &&
                    scheme.beneficiaries[0].beneficiary_type &&  scheme.beneficiaries[0].beneficiary_type !== "N/A" && <hr />}

                  {scheme.sponsors && scheme.sponsors.length != 0 && scheme.sponsors[0].sponsor_type && (
                      <div className="flex items-start pb-2 pt-2">
                        <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                          Sponsored By
                        </h1>
                        <p className="ml-2 flex-1">
                          {scheme.sponsors[0].sponsor_type}
                        </p>
                      </div>
                    )}
                  {scheme.sponsors && scheme.sponsors.length != 0 && scheme.sponsors[0].sponsor_type && <hr />}

                  {scheme.documents[0] && (
                    <div className="flex items-start pb-2 pt-2">
                      <h1 className="w-36 text-[14px] font-semibold leading-normal font-inter text-black">
                        Uploaded file
                      </h1>
                      <p className="ml-2 flex-1">{scheme.documents}</p>
                    </div>
                  )}
                </div>

                {/* Apply button */}
                <div>
                  <div className=" z-50 bottom-8 right-8 w-100 mb-[70px]">
                    {scheme.scheme_link ? (
                      <a
                        href={scheme.scheme_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative py-3 px-12 bg-blue-600 text-white font-semibold rounded-[10px] transition hover:bg-onclick-btnblue ml-[300px]"
                      >
                        Apply
                      </a>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;

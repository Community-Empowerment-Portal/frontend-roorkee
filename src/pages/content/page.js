import { useRouter } from 'next/router';
import { FaArrowLeft, FaShare } from "react-icons/fa";
import dummyData from '../../dummyData.json';

const Apply = () => {
  const router = useRouter();
  const { department, title, beneficiary_category, eligibility_criteria  } = router.query;

  // Find the specific item in dummyData based on department
  const selectedItem = dummyData.find(item => item.category === department);

  // Construct the URL for Apply button
  const applyUrl = selectedItem ? selectedItem.url : '';

  return (
    <div className="min-h-screen bg-white relative">
      {/* Back Button */}
      <div className="text-black ">
        <button 
          className="relative top-4 left-4 text-black py-2 px-4 rounded flex items-center transition duration-300 ease-in-out hover:font-bold"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="h-5 w-5 mr-2 " />
          Back
        </button>
      </div>

      <div className="pt-20 text-black mr-[110px] mr-[10px] ml-[110px]">
        {/* Div one with share scheme */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="mr-4 font-bold">{department || "Data is not available"}</h1>
            <p className="py-0.1 px-2 bg-gray-200 text-black rounded">
              Last updates on 14.06.2024
            </p>
          </div>
          <button className="flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:font-bold">
            <FaShare className="h-5 w-5 mr-2" />
            Share scheme
          </button>
        </div>

        {/* Div two */}
        <div className="mt-8">
          <div className="space-y-4">
            <hr />

            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Department:</h1>
              <p className="ml-2">{department || "Data is not available"}</p>
            </div>
            <hr />

            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Title:</h1>
              <p className="ml-2">{title || "Data is not available"}</p>
            </div>
            <hr />
            
            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Who can apply:</h1>
              <p className="ml-2">{beneficiary_category || "Data is not available"}</p>
            </div>
            <hr />

            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Eligiblity criteriya:</h1>
              <p className="ml-2">{eligibility_criteria || "Data is not available"}</p>
            </div>
            <hr />

          </div>
        </div>

        {/* Apply button with dynamic URL */}
        <div className="mt-4 flex justify-center">
          {applyUrl && (
            <a 
              href={applyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-1 px-6 bg-black text-white rounded-[5px] transition duration-300 ease-in-out hover:bg-red-500 hover:text-black-500"
            >
              Apply
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;

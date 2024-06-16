import { useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { FaMapMarkerAlt, FaBuilding, FaUserTie, FaVenusMars } from 'react-icons/fa';
import { MdCurrencyRupee } from "react-icons/md";
import Categories from "./Categories";
import Model from '@/pages/filter/page';

export default function Schemes() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleStateClick = () => {
    setSelectedCategory('states');
  };
  const handleDepartmentClick = () => {
    setSelectedCategory('departments');
  };
  const handleOccupationClick = () => {
    setSelectedCategory('occupations');
  };
  const handleGenderClick = () => {
    setSelectedCategory('gender');
  };
  const handleIncomeClick = () => {
    setSelectedCategory('income');
  };

  const handleCloseModal = () => {
    setSelectedCategory(null); // Reset selected category when closing modal
  };

  return (
    <>
      <div className="bg-white font-sans">
        <button className="flex items-center justify-between p-0 border-none mb-5 text-base bg-white">
          <IoArrowBackOutline className="mr-1 text-xl" /> Back
        </button>
        <div className="flex justify-between flex-wrap">
          <h1 className="mt-0 mb-4 text-[30px] font-semibold">Scholership</h1>
          <div>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white mr-2">Regional Language</button>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white px-7">English</button>
          </div>
        </div>
        <div className="max-w-lg w-full flex flex-wrap justify-between mb-14">
          <button className="mb-2 p-2 rounded-[18px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleStateClick}>
            <span className="flex items-center">
              <FaMapMarkerAlt className="text-gray-600 mr-1" /> State
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleDepartmentClick}>
            <span className="flex items-center">
              <FaBuilding className="text-gray-600 mr-1" /> Department
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleOccupationClick}>
            <span className="flex items-center">
              <FaUserTie className="text-gray-600 mr-1" /> Occupation
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] mr-[1px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleGenderClick}>
            <span className="flex items-center">
              <FaVenusMars className="text-gray-600 mr-1" /> Gender
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] border border-gray-300 bg-white hover:bg-gray-100" onClick={handleIncomeClick}>
            <span className="flex items-center">
              <MdCurrencyRupee className="text-gray-600 text-lg mr-1" /> Income
            </span>
          </button>
        </div>
        <Categories />
      </div>
      <Model isVisible={selectedCategory !== null} category={selectedCategory} onClose={handleCloseModal}/>
    </>
  );
}

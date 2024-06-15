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
          <h1 className="mt-0 mb-4 font-semibold">Schemes</h1>
          <div>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white mr-2">Regional Language</button>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white px-7">English</button>
          </div>
        </div>
        <div className="max-w-lg w-full flex flex-wrap justify-between mb-14">
          <button className="mb-2 font-semibold p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleStateClick}>
            <FaMapMarkerAlt className="text-gray-600 relative top-1 text-lg mr-1" /> State
          </button>
          <button className="mb-2 font-semibold p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleDepartmentClick}>
            <FaBuilding className="text-gray-600 relative top-1 text-lg mr-1" /> Department
          </button>
          <button className="mb-2 font-semibold p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleOccupationClick}>
            <FaUserTie className="text-gray-600 relative top-1 text-lg mr-1" /> Occupation
          </button>
          <button className="mb-2 font-semibold p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleGenderClick}>
            <FaVenusMars className="text-gray-600 relative top-1 text-lg mr-1" /> Gender
          </button>
          <button className="mb-2 font-semibold p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleIncomeClick}>
            <MdCurrencyRupee className="text-gray-600 relative top-1 text-lg mr-1" /> Income
          </button>
        </div>
        <Categories />
      </div>
      <Model isVisible={selectedCategory !== null} category={selectedCategory} onClose={handleCloseModal}/>
    </>
  );
}

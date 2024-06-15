import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaMapMarkerAlt, FaBuilding, FaUserTie, FaVenusMars } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';

const Model = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "closeAnyWhere") onClose();
  };

  const router = useRouter();

  const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha (Orissa)", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi (National Capital Territory of Delhi)", "Puducherry", "Jammu and Kashmir", "Ladakh"];
  const departments = ['Health', 'Education', 'Finance', 'Agriculture'];
  const occupations = ['Farmer', 'Government-Jobs', 'Leader'];
  const gender = ['Male', 'Female', 'Others'];
  const income = ['₹ 0-10000', '₹ 10000-50000', '₹ 50000-100000', 'above ₹ 100000'];

  const [category, setCategory] = useState('states');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeButton, setActiveButton] = useState('states'); // Track active button

  const handleCheckboxChange = (item) => {
    setSelectedFilters((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((filter) => filter !== item)
        : [...prevSelected, item]
    );
  };

  const renderItems = () => {
    let items;
    switch (category) {
      case 'states':
        items = states;
        break;
      case 'departments':
        items = departments;
        break;
      case 'gender':
        items = gender;
        break;
      case 'occupations':
        items = occupations;
        break;
      case 'income':
        items = income;
        break;
      default:
        items = [];
    }

    return items.map((item) => (
      <div key={item} className='flex gap-3 mb-[20px] '>
        <input
          type="checkbox"
          id={item}
          name={item}
          checked={selectedFilters.includes(item)}
          onChange={() => handleCheckboxChange(item)}
        />
        <p className='text-red'>{item}</p>
      </div>
    ));
  };

  const handleGoBack = () => {
    onClose(); // This will go back to the previous page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center " id="closeAnyWhere" onClick={handleClose}>
      <div className="w-[700px] h-[500px] bg-white text-black flex relative rounded-lg">

        {/* Close button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={handleGoBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column */}
        <div className="w-[200px] p-[30px] bg-gray-200">
          <div className="mb-4">
            <div className="flex flex-col">
              <div className="mb-8 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <button
                  className={`button transition-colors rounded-md ${activeButton === 'states' ? 'bg-gray-300 border border-gray-600 border-opacity-50' : 'hover:bg-gray-300 hover:border hover:border-gray-600 hover:border-opacity-50'}`}
                  onClick={() => { setCategory('states'); setActiveButton('states'); }}
                >
                  State
                </button>
              </div>
              <div className="mb-8 flex items-center">
                <FaBuilding className="mr-2" />
                <button
                  className={`button transition-colors rounded-md ${activeButton === 'departments' ? 'bg-gray-300 border border-gray-600 border-opacity-50' : 'hover:bg-gray-300 hover:border hover:border-gray-600 hover:border-opacity-50'}`}
                  onClick={() => { setCategory('departments'); setActiveButton('departments'); }}
                >
                  Department
                </button>
              </div>
              <div className="mb-8 flex items-center">
                <FaUserTie className="mr-2" />
                <button
                  className={`button transition-colors rounded-md ${activeButton === 'occupations' ? 'bg-gray-300 border border-gray-600 border-opacity-50' : 'hover:bg-gray-300 hover:border hover:border-gray-600 hover:border-opacity-50'}`}
                  onClick={() => { setCategory('occupations'); setActiveButton('occupations'); }}
                >
                  Occupation
                </button>
              </div>
              <div className="mb-8 flex items-center">
                <FaVenusMars className="mr-2" />
                <button
                  className={`button transition-colors rounded-md ${activeButton === 'gender' ? 'bg-gray-300 border border-gray-600 border-opacity-50' : 'hover:bg-gray-300 hover:border hover:border-gray-600 hover:border-opacity-50'}`}
                  onClick={() => { setCategory('gender'); setActiveButton('gender'); }}
                >
                  Gender
                </button>
              </div>
              <div className="flex items-center">
                <MdCurrencyRupee className="mr-2" />
                <button
                  className={`button transition-colors rounded-md ${activeButton === 'income' ? 'bg-gray-300 border border-gray-600 border-opacity-50' : 'hover:bg-gray-300 hover:border hover:border-gray-600 hover:border-opacity-50'}`}
                  onClick={() => { setCategory('income'); setActiveButton('income'); }}
                >
                  Income
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 p-4 flex-col overflow-y-auto ml-0 bg-red">
          <div className="mb-4">
            {renderItems()}
          </div>
        </div>

        {/* Filter button */}
        <div className="absolute bottom-4 right-4 flex justify-center items-center">
          <div className="h-[40px] w-[110px] bg-black text-white flex justify-center items-center rounded-lg">
            <button className="button font-bold hover:bg-gray-800 transition-colors">
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;

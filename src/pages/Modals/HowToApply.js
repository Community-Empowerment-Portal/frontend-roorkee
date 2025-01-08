import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

const HowToApply = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const steps = [
    {
      title: "Step 1",
      content: "Go to the schemes page and select the preferred scheme.",
      image: isMobile 
        ? "/_next/static/media/step1mobile.09d6da3d.jpeg"
        : "/_next/static/media/step1.15fdae8e.jpeg", 
    },
    {
      title: "Step 2",
      content: "After clicking on the preferred scheme, click on the 'Apply' button on the scheme description page to apply for the scheme.",
      image: "/_next/static/media/step2.64e5a384.jpeg",
    },
    {
      title: "Step 3",
      content: "If you are not currently applying but wish to apply for the scheme in the future, you can use the 'Save for Later' button.",
      image: "/_next/static/media/step2.64e5a384.jpeg",
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg sm:h-[80%] h-[90%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[600px] xl:w-[700px] p-6 max-w-full flex flex-col relative">
        <h2 className="sm:text-2xl text-[20px] font-semibold text-center mb-6 text-[#3431BB]">
          How to Apply for Schemes
        </h2>

        {/* Content Section */}
        <div className="flex-grow space-y-6 overflow-y-auto">
          <div className="flex flex-col items-center justify-center space-y-4">

          <div className="border border-[#3431BB] rounded-[6px] p-6 w-full">
              <h3 className="text-[16px] font-semibold text-center">
                {steps[currentStep - 1].title}
              </h3>
              <p className="text-[14px] text-center mt-2">
                {steps[currentStep - 1].content}
              </p>
            </div>
            {/* Image Section */}
            {steps[currentStep - 1].image && (
              <div className="mt-4">
                <img
                  src={steps[currentStep - 1].image}
                  alt={`Step ${currentStep}`}
                  className="w-full h-[80%] object-contain rounded-md shadow-md border-[#3431BB] rounded "
                />
              </div>
            )}

            {/* Text Content */}
          
          </div>
        </div>

        {/* Fixed Footer for Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t flex justify-between">
          <button
            onClick={prevStep}
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-transparent bg-[#3431Bb] text-white hover:bg-blue-700 text-[12px] sm:text-sm"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={closeModal}
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-transparent bg-[#3431Bb] text-white hover:bg-blue-700 text-[12px] sm:text-sm"
          >
            Close
          </button>
          <button
            onClick={nextStep}
            className="flex-shrink-0 px-4 py-2 rounded-lg border border-transparent bg-[#3431Bb] text-white hover:bg-blue-700 text-[12px] sm:text-sm"
            disabled={currentStep === steps.length}
          >
            Next
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
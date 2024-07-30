function SelectedFilters(props) {
  return (
    <div className="mt-0 mb-6 flex gap-4 flex-wrap">
      {props.selectedState.length == 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedState[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedState[1]}</button>
        </div>
      :
        <></>
      }
      {props.selectedState.length > 0 && props.selectedState.length <= 1 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedState[0]}</button>
        </div>
      :
        <></>
      }
      {props.selectedState.length > 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedState[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedState[1]} + {props.selectedState.length - 2} more</button>
        </div>
      :
        <></>
      }

      {props.selectedDepartments.length == 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedDepartments[0].length > 30 ? `${props.selectedDepartments[0].substring(0, 35)}...` : props.selectedDepartments[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedDepartments[1].length > 30 ? `${props.selectedDepartments[1].substring(0, 35)}...` : props.selectedDepartments[1]}</button>
        </div>
      :
        <></>
      }
      {props.selectedDepartments.length > 0 && props.selectedDepartments.length <= 1 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedDepartments[0].length > 30 ? `${props.selectedDepartments[0].substring(0, 35)}...` : props.selectedDepartments[0]}</button>
        </div>
      :
        <></>
      }
      {props.selectedDepartments.length > 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedDepartments[0].length > 30 ? `${props.selectedDepartments[0].substring(0, 35)}...` : props.selectedDepartments[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedDepartments[1].length > 30 ? `${props.selectedDepartments[1].substring(0, 35)}...` : props.selectedDepartments[1]} + {props.selectedDepartments.length - 2} more
          </button>
        </div>
      :
        <></>
      }

      {props.selectedFunders.length == 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedFunders[0].length > 30 ? `${props.selectedFunders[0].substring(0, 35)}...` : props.selectedFunders[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedFunders[1].length > 30 ? `${props.selectedFunders[1].substring(0, 35)}...` : props.selectedFunders[1]}</button>
        </div>
      :
        <></>
      }
      {props.selectedFunders.length > 0 && props.selectedFunders.length <= 1 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedFunders[0].length > 30 ? `${props.selectedFunders[0].substring(0, 35)}...` : props.selectedFunders[0]}</button>
        </div>
      :
        <></>
      }
      {props.selectedFunders.length > 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedFunders[0].length > 30 ? `${props.selectedFunders[0].substring(0, 35)}...` : props.selectedFunders[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedFunders[1].length > 30 ? `${props.selectedFunders[1].substring(0, 35)}...` : props.selectedFunders[1]} + {props.selectedFunders.length - 2} more
          </button>
        </div>
      :
        <></>
      }

      {props.selectedBeneficiaries.length == 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedBeneficiaries[0].length > 30 ? `${props.selectedBeneficiaries[0].substring(0, 35)}...` : props.selectedBeneficiaries[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedBeneficiaries[1].length > 30 ? `${props.selectedBeneficiaries[1].substring(0, 35)}...` : props.selectedBeneficiaries[1]}</button>
        </div>
      :
        <></>
      }
      {props.selectedBeneficiaries.length > 0 && props.selectedBeneficiaries.length <= 1 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedBeneficiaries[0].length > 30 ? `${props.selectedBeneficiaries[0].substring(0, 35)}...` : props.selectedBeneficiaries[0]}</button>
        </div>
      :
        <></>
      }
      {props.selectedBeneficiaries.length > 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedBeneficiaries[0].length > 30 ? `${props.selectedBeneficiaries[0].substring(0, 35)}...` : props.selectedBeneficiaries[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedBeneficiaries[1].length > 30 ? `${props.selectedBeneficiaries[1].substring(0, 35)}...` : props.selectedBeneficiaries[1]} + {props.selectedBeneficiaries.length - 2} more
          </button>
        </div>
      :
        <></>
      }

      {props.selectedSponsors.length == 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedSponsors[0].length > 30 ? `${props.selectedSponsors[0].substring(0, 35)}...` : props.selectedSponsors[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedSponsors[1].length > 30 ? `${props.selectedSponsors[1].substring(0, 35)}...` : props.selectedSponsors[1]}</button>
        </div>
      :
        <></>
      }
      {props.selectedSponsors.length > 0 && props.selectedSponsors.length <= 1 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedSponsors[0].length > 30 ? `${props.selectedSponsors[0].substring(0, 35)}...` : props.selectedSponsors[0]}</button>
        </div>
      :
        <></>
      }
      {props.selectedSponsors.length > 2 ? 
        <div className=" flex gap-4">
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedSponsors[0].length > 30 ? `${props.selectedSponsors[0].substring(0, 35)}...` : props.selectedSponsors[0]}</button>
          <button className="flex items-center justify-center pr-2 pl-2 py-[4px] border border-onclick-btnblue rounded bg-white text-onclick-btnblue font-inter text-sm font-medium">{props.selectedSponsors[1].length > 30 ? `${props.selectedSponsors[1].substring(0, 35)}...` : props.selectedSponsors[1]} + {props.selectedSponsors.length - 2} more
          </button>
        </div>
      :
        <></>
      }
    </div>
  )
}

export default SelectedFilters;
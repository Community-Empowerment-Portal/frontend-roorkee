

export default function Tabs(props) {
  return (
    <div className="mt-5 flex justify-center items-center mb-5 p-2">
      <button className="text-center font-medium py-2 px-4 rounded-lg border border-gray-300 bg-white mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => props.setComponent("Schemes")}>
        Schemes
      </button>
      <button className="text-center font-medium py-2 px-4 rounded-lg border border-gray-300 bg-white mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => props.setComponent("Job Openings")}>
        Job Openings
      </button>
      <button className="text-center font-medium py-2 px-4 rounded-lg border border-gray-300 bg-white mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => props.setComponent("Scholarships")}>
        Scholarships
      </button>
    </div>
  );
}

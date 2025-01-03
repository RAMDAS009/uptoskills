import React from "react";
import { CopyX, ListChecks, Radio, SlidersHorizontal } from "lucide-react";

const Registation = () => {
  return (
    <div class="mx-auto p-4">
      {/* <!--Top Filter Tabs --> */}
      <div class="flex items-center sm:gap-5 gap-2 mb-4  px-2">
        <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          All
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          Assessment
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          Compititions
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          Internship
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          Jobs
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          Scholarship
        </button>
        <button class="text-nowrap px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          Creative events
        </button>
        <button class="text-nowrap px-4 py-2 bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md">
          College fest
        </button>
      </div>

      {/* <!-- Search Bar --> */}
      <div class="sm:flex grid items-center bg-white p-2 shadow-md rounded-md mb-4 gap-5 max-w-full">
        <div class="relative flex items-center sm:w-[50%] rounded-full w-screen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="absolute w-full h-5 top-2.5 left-2.5 text-slate-600"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="w-full bg-gray-200  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-gray-400 shadow-sm focus:shadow"
            placeholder="Search your registration..."
          />
        </div>

        <div class="sm:w-aut flex items-center justify-center bg-gray-200 rounded-full gap-4 ">
          <div className="flex items-center pl-2 hover:text-blue-500">
            <ListChecks />
            <button class="px-4 py-2 rounded-md ">All</button>
          </div>
          <div className="flex items-center pl-2 hover:text-blue-500">
            <Radio />
            <button class="px-4 py-2 rounded-md">Live</button>
          </div>
          <div className="flex items-center pl-2 hover:text-blue-500">
            <CopyX />
            <button class="px-4 py-2 rounded-md">Closed</button>
          </div>
        </div>

        <div className="flex items-center justify-center pl-2 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white">
          <button class="px-4 py-2 rounded-md">View</button>
          <SlidersHorizontal className="mr-3" />
        </div>
      </div>

      {/* <!-- Placeholder Content --> */}
      <div class="flex flex-col items-center justify-center text-center bg-white p-8 shadow rounded-md">
        <img
          src="./images/registation-page.png"
          alt="Illustration"
          class="w-auto h-auto mb-6 object-cover"
        />
        <h2 class="text-lg font-semibold mb-2">
          You have not registered to any opportunity.
        </h2>
        <p class="text-gray-500 mb-4">Keep Registering!</p>
        <button class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          Explore Opportunities
        </button>
      </div>
    </div>
  );
};

export default Registation;

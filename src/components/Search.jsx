import React, { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

function Search({ filterUpdate }) {
  // TODO: Update the input variable to use the useRef() hook
  const input = useRef(null);

  function handleChange() {
    // TODO: Update the value of the filter with the input from the textbox
    // Hint: You will need to use the "current" property of the input variable
    // get the current value of the input field and update the filter in the parent component
    filterUpdate(input.current.value);
  }
  return (
    <div className="mb-3">
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none dark:border-neutral-600 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-primary"
          placeholder="Search"
          ref={input}
          onChange={handleChange}
        />

        <button
          className="relative flex items-center rounded-r bg-blue-500 px-6 py-4 text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg"
          type="button"
        >
          <FiSearch className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Search;

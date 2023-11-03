import React, { useState } from "react";
import axios from "axios";

function SelectBoard() {
  const [countFeature, setCountFeature] = useState(0);
  const [teamSize, setTeamSize] = useState(0);
  const [avgExp, setAvgExp] = useState(0);
  const [features, setFeatures] = useState([
    "Authentication",
    "API intigration",
    "Payment intigration",
    "Mail services",
    "Real time chat",
  ]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedOptions, countFeature, teamSize, avgExp });

    const apiUrl = "http://127.0.0.1:5000/get_data";

    axios
      .get(apiUrl, {
        params: {
          selectedOptions,
          countFeature,
          teamSize,
          avgExp,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const [options, setOptions] = useState([
    "frontend",
    "backend",
    "cloud",
    "Database",
    "Android",
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center ">
        <div className="m-10 w-2/3 h-auto p-5  rounded-xl flex flex-col gap-10 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div>
            <h1 className="text-2xl font-semibold">Prophecy Board</h1>
          </div>
          <form action="" onSubmit={(e) => handelSubmit(e)}>
            <div className="flex flex-col">
              <div className="flex gap-3  flex-wrap">
                <div>
                  <h3 class="mb-4 font-semibold text-gray-900">Technology</h3>
                  <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {options.map((option, index) => (
                      <li
                        key={index}
                        class="w-full border-b p-3 text-sm font-medium border-gray-200 rounded-t-lg dark:border-gray-600"
                      >
                        <input
                          class="w-4 h-4 pl-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          type="checkbox"
                          value={option}
                          onChange={() => handleCheckboxChange(option)}
                          checked={selectedOptions.includes(option)}
                        />
                        <label
                          for="vue-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 class="mb-4 font-semibold text-gray-900">Features</h3>
                  <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        class="w-full border-b p-3 text-sm font-medium border-gray-200 rounded-t-lg dark:border-gray-600"
                      >
                        <input
                          class="w-4 h-4 pl-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          type="checkbox"
                          value={feature}
                          onChange={(e) => {
                            e.target.checked
                              ? setCountFeature(countFeature + 1)
                              : setCountFeature(countFeature - 1);
                          }}
                        />
                        <label
                          for="vue-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {feature}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-10 mt-3 flex-wrap">
                <div className="">
                  <label
                    for="TeamSize"
                    class="block mb-2 text-sm font-medium w-full text-gray-900"
                  >
                    Team size
                  </label>

                  <input
                    onChange={(e) => setTeamSize(e.target.value)}
                    type="number"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Average experience
                  </label>
                  <input
                    onChange={(e) => setAvgExp(e.target.value)}
                    type="number"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <button type="submit">submitdd</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SelectBoard;

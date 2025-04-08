import React from "react";
import Header from "../Dashboard/Header/Header";
import SideBar from "../Dashboard/SideBar/SideBar";

export default function BundleQuestions() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col">
        <div className="h-full my-20  flex justify-center ml-14 md:ml-64">
          <div className="w-10/12">
            <div className="py-5 flex flex-col gap-4">
              <details className="group ">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <div className="w-full rounded-none p-4 bg-green-100 shadow-indigo-300 shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                      <div className=" flex-1 ">
                        <h2 className="text-gray-900 text-lg font-bold">
                          Bundle
                        </h2>
                        <h2 className=" text-gray-900 text-xs font-semibold">
                          5 question set
                        </h2>
                      </div>
                      <div className="flex justify-center items-center gap-4">
                        <div>
                          <h3 className="mt-2 md:text-xl font-bold text-gray-900 text-left">
                            BDT 150000
                          </h3>
                          <h1 className="text-xs">Save 250 tk </h1>
                        </div>

                        <button
                          onClick={() => alert("djnj")}
                          className="text-sm p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-400 "
                        >
                          Purchesed
                        </button>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height={24}
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="flex flex-col justify-center items-center gap-4 mt-4">
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                </div>
              </details>
              <details className="group ">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <div className="w-full rounded-none p-4 bg-green-100 shadow-indigo-300 shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                      <div className=" flex-1 ">
                        <h2 className="text-gray-900 text-lg font-bold">
                          Bundle
                        </h2>
                        <h2 className=" text-gray-900 text-xs font-semibold">
                          5 question set
                        </h2>
                      </div>
                      <div className="flex justify-center items-center gap-4">
                        <div>
                          <h3 className="mt-2 md:text-xl font-bold text-gray-900 text-left">
                            BDT 150000
                          </h3>
                          <h1 className="text-xs">Save 250 tk </h1>
                        </div>

                        <button
                          onClick={() => alert("djnj")}
                          className="text-sm p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-400 "
                        >
                          Purchesed
                        </button>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height={24}
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="flex flex-col justify-center items-center gap-4 mt-4">
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                </div>
              </details>
              <details className="group ">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <div className="w-full rounded-none p-4 bg-green-100 shadow-indigo-300 shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                      <div className=" flex-1 ">
                        <h2 className="text-gray-900 text-lg font-bold">
                          Bundle
                        </h2>
                        <h2 className=" text-gray-900 text-xs font-semibold">
                          5 question set
                        </h2>
                      </div>
                      <div className="flex justify-center items-center gap-4">
                        <div>
                          <h3 className="mt-2 md:text-xl font-bold text-gray-900 text-left">
                            BDT 150000
                          </h3>
                          <h1 className="text-xs">Save 250 tk </h1>
                        </div>

                        <button
                          onClick={() => alert("djnj")}
                          className="text-sm p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-400 "
                        >
                          Purchesed
                        </button>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height={24}
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width={24}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="flex flex-col justify-center items-center gap-4 mt-4">
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                  <div className="w-10/12 p-2 rounded-lg bg-gray-100 shadow-indigo-200 shadow-md">
                    <div className="flex-1">
                      <h2 className="text-gray-900 text-md font-semibold">
                        Question set 4
                      </h2>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

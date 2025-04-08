import React from "react";
import { Link } from "react-router-dom";
import ".//Exam.css";

export default function Exam() {
  return (
    <div className="flex flex-col">
      <div className="">
        <nav className=" flex justify-between w-full">
          <div className="p-4">
            <div>
              .
              <Link to={`/`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 ">
                  Back
                </button>
              </Link>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 p-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
              <p className="text-lg">Time: </p>
              <p>00:00:00</p>
            </div>
          </div>
        </nav>
        <p className="text-3xl text-center font-serif font-semibold">
          Q-02: What is the name of the capital of Bangladesh?
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-8">
          <div className="flex w-2/5 items-center justify-center ">
            <div className=" text-2xl text-center ">
              Context - picture/audio
              <img src="/Resource/content.jpg" alt="" />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center items-center">
            <div className="p-4 w-full flex flex-col gap-4 ">
              <div className=" flex flex-col leftSlider gap-4">
                <div
                  className="flex items-center border border-green-400 shadow-lg shadow-green-200 rounded-md cursor-pointer bg-green-200 transform transition-transform
                   hover:scale-105
                  "
                >
                  <div className="w-[50px] rounded-l-md p-3 bg-blue-300 text-center ">
                    1
                  </div>
                  <div className="p-3">Dhaka</div>
                </div>
                <div
                  className="flex items-center  border active:border-green-400 active:shadow-lg active:shadow-green-200 rounded-md cursor-pointer active:bg-green-200 transform transition-transform
                   hover:scale-105
                  "
                >
                  <div className="w-[50px] rounded-l-md p-3 bg-blue-300 text-center ">
                    2
                  </div>
                  <div className="p-3">Rajshahi</div>
                </div>
              </div>
              <div className="flex flex-col leftSlider gap-4">
                <div
                  className="flex items-center border active:border-green-400 active:shadow-lg active:shadow-green-200 rounded-md cursor-pointer active:bg-green-200 transform transition-transform
                   hover:scale-105
                  "
                >
                  <div className="w-[50px] rounded-l-md p-3 bg-blue-300 text-center ">
                    3
                  </div>
                  <div className="p-3">Barisal</div>
                </div>
                <div
                  className="flex items-center border active:border-green-400 active:shadow-lg active:shadow-green-200 rounded-md cursor-pointer active:bg-green-200 transform transition-transform
                   hover:scale-105
                  "
                >
                  <div className="w-[50px] rounded-l-md p-3 bg-blue-300 text-center ">
                    4
                  </div>
                  <div className="p-3">Sylhet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between lg:fixed left-0 right-0 bottom-0 p-4 w-full ">
          <div className="flex items-center sm:mb-2 border rounded border-blue-800">
            <p className="text-blue-700 p-2">10/20 questions</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 ">
              Previous
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-8 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

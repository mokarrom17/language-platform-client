import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import { TbSum } from "react-icons/tb";
import { FaPercentage } from "react-icons/fa";
import { TbSquareRoot } from "react-icons/tb";
import { TbMathAvg } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.successMessage) {
      toast.success(location.state.successMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [location.state]);

  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <div className="flex flex-col">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white text-black text-3xl rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <TbSum />
              </div>
              <div className="text-right">
                <p className="text-2xl font-extrabold">25</p>
                <p>Total Exam</p>
              </div>
            </div>

            <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white text-black text-3xl rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <TbSquareRoot />
              </div>
              <div className="text-right">
                <p className="text-2xl">19</p>
                <p>Success Passed</p>
              </div>
            </div>

            <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white text-black text-3xl rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <TbMathAvg />
              </div>
              <div className="text-right">
                <p className="text-2xl">06</p>
                <p>Total Failed</p>
              </div>
            </div>

            <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white text-black text-3xl rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <FaPercentage />
              </div>
              <div className="text-right">
                <p className="text-2xl">71%</p>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Profile from "../components/Profile/Profile";
import Exam from "../components/Exam/Exam";
import ExamHistory from "../components/Exam History/ExamHistory";
import BundleQuestions from "../components/Bundle Question/BundleQuestions";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../components/Profile/EditProfile";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import Tutorials from "../components/Tutorials/Tutorials";
import LandingPage from "../components/LandingPage/LandingPage";
import FAQ from "../components/FAQ/FAQ";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile/:email",
        element: <Profile />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/exam",
        element: <Exam />,
      },
      {
        path: "/exam-history",
        element: <ExamHistory />,
      },
      {
        path: "/bundle-questions",
        element: <BundleQuestions />,
      },
      {
        path: "/admin-panel",
        element: <AdminPanel />,
      },
      {
        path: "/tutorials",
        element: <Tutorials />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);
export default router;

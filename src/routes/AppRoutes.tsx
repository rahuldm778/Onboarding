import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Onboarding from "../components/Onboarding";

const AppRoutes = () => {
    const state = useSelector((s: any) => s.onboarding);
  
    if (state.completed) {
      return <Routes><Route path="/home" element={<Home />} /></Routes>;
    }
  
    if (!state.loggedIn) {
      return <Routes><Route path="*" element={<Login />} /></Routes>;
    }
  
    return (
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Onboarding />} />
      </Routes>
    );
  };
  export default AppRoutes
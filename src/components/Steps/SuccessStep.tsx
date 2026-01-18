import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingSlice } from "../../redux/store";

const SuccessStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleGoToHome = () => {
    dispatch(onboardingSlice.actions.completeOnboarding());
    navigate("/");
  };
  return (
    <div>
      <h2>Success 🎉</h2>
      <p>You have completed onboarding.</p>
      <button
        onClick={handleGoToHome}
        className="bg-green-300 py-1 px-2 rounded-md mt-2"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccessStep;

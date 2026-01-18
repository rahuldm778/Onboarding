import { useSelector } from "react-redux";
import ProfileStep from "./Steps/ProfileStep";
import SongsStep from "./Steps/SongsStep";
import PaymentStep from "./Steps/PaymentStep";
import SuccessStep from "./Steps/SuccessStep";

const Onboarding = () => {
  const step = useSelector((s: any) => s.onboarding.step);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProfileStep />;
      case 2:
        return <SongsStep />;
      case 3:
        return <PaymentStep />;
      case 4:
        return <SuccessStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      {renderStep()}
    </div>
  );
};

export default Onboarding;

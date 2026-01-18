import { useSelector } from "react-redux";

const Home = () => {
  const profile = useSelector((s: any) => s.onboarding.profile);

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome {profile.name || "User"}</h2>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;

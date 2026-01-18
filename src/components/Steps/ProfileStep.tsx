import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingSlice } from "../../redux/store";

const ProfileStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((s: any) => s.onboarding.profile);

  return (
    <Formik
      initialValues={profile}
      onSubmit={(values) => {
        if (
          !values.name ||
          !values.age ||
          !values.email ||
          !values.profilePic
        ) {
          alert("Please fill all the fields");
          return;
        }
        dispatch(onboardingSlice.actions.updateProfile(values));
        dispatch(onboardingSlice.actions.nextStep());
        navigate("/onboarding");
        console.log(values);
      }}
    >
      <Form className="bg-white p-6 rounded shadow w-80">
        <h3>Personal Profile</h3>
        <Field
          name="name"
          placeholder="Name"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <Field
          name="age"
          placeholder="Age"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <Field
          name="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <Field
          name="profilePic"
          placeholder="Profile Picture URL"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <button type="submit" className="bg-blue-300 py-1 px-2 rounded-md mt-2">
          Next
        </button>
      </Form>
    </Formik>
  );
};

export default ProfileStep;

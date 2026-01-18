import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingSlice } from "../redux/store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          if (
            values.username === "user123" &&
            values.password === "password123"
          ) {
            dispatch(onboardingSlice.actions.loginSuccess());
            navigate("/onboarding");
          } else {
            alert("Invalid credentials");
          }
        }}
      >
        <Form className="bg-white p-6 rounded shadow w-80">
          <div>
            <Field
              name="username"
              placeholder="Username"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div style={{ marginTop: 8 }}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            style={{ marginTop: 12 }}
            className="bg-blue-300 py-1 px-2 rounded-md"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

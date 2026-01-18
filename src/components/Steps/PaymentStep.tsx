import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingSlice } from "../../redux/store";

const PaymentStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const payment = useSelector((s: any) => s.onboarding.payment);

  return (
    <Formik
      initialValues={payment}
      onSubmit={(values) => {
        if (!values.cardNumber || !values.expiry || !values.cvv) {
          alert("Please fill all the fields");
          return;
        }
        dispatch(onboardingSlice.actions.updatePayment(values));
        dispatch(onboardingSlice.actions.nextStep());
        navigate("/onboarding");
      }}
    >
      <Form className="bg-white p-6 rounded shadow w-80">
        <h3>Payment Info</h3>
        <Field
          name="cardNumber"
          placeholder="Card Number"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <Field
          name="expiry"
          placeholder="MM/YY"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <Field
          name="cvv"
          placeholder="CVV"
          className="w-full border px-3 py-2 rounded mt-2"
        />
        <br />
        <button
          type="button"
          onClick={() => dispatch(onboardingSlice.actions.prevStep())}
          className="bg-gray-300 py-1 px-2 rounded-md mt-1"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-300 py-1 px-2 rounded-md ml-2 mt-1"
        >
          Next
        </button>
      </Form>
    </Formik>
  );
};

export default PaymentStep;

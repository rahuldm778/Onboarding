import { Field, FieldArray, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardingSlice } from "../../redux/store";

const SongsStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const songs = useSelector((s: any) => s.onboarding.songs);

  return (
    <Formik
      initialValues={{ songs }}
      onSubmit={(values) => {
        if (values.songs.length === 0) {
          alert("Please add at least one song");
          return;
        }
        dispatch(onboardingSlice.actions.updateSongs(values.songs));
        dispatch(onboardingSlice.actions.nextStep());
        navigate("/onboarding");
      }}
    >
      {({ values }) => (
        <Form className="bg-white p-6 rounded shadow w-80">
          <h3>Favorite Songs</h3>
          <FieldArray name="songs">
            {({ push }) => (
              <div>
                {values.songs.map((_, index) => (
                  <div key={index}>
                    <Field
                      name={`songs.${index}`}
                      placeholder="Song name"
                      className="w-full border px-3 py-2 rounded mt-2"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push("")}
                  className=" px-1 border border-blue-400 rounded-md mt-2"
                >
                  Add Song
                </button>
              </div>
            )}
          </FieldArray>
          <br />
          <button
            type="button"
            onClick={() => dispatch(onboardingSlice.actions.prevStep())}
            className="bg-gray-300 py-1 px-2 rounded-md"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-300 py-1 px-2 rounded-md ml-2"
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SongsStep;

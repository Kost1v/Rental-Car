import { ErrorMessage, Field, Formik, Form } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
const INITIAL_VALUES = {
  name: "",
  email: "",
  date: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Email is required"),
  date: Yup.string(),
});
const BookingForm = () => {
  const onSubmit = (data, actions) => {    
    toast.success("Form submitted successfully");
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <p className={css.firstText}>Book your car now</p>
        <p className={css.secondText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
          <Field
            className={css.input}
            type="text"
            name="date"
            placeholder="Booking date"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="date"
            component="span"
          />
          <textarea
            className={css.textArea}
            type="text"
            name="comment"
            placeholder="Comment"
          ></textarea>
        </div>
        <button type="submit" className={css.button}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookingForm;

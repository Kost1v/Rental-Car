import { ErrorMessage, Field, Formik, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./BookingForm.module.css";
import { useState } from "react";
import { validationSchema } from "../../utils/validationSchema";

const INITIAL_VALUES = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookingForm = () => {
  const [inputType, setInputType] = useState("text");
  const onSubmit = (data, actions) => {
    setInputType("text");
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
        <Toaster />
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
            type={inputType}
            onFocus={() => setInputType("date")}
            onBlur={(e) => !e.target.value && setInputType("text")}
            name="date"
            placeholder="Booking date"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="date"
            component="span"
          />
          <Field
            className={css.textArea}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
        </div>
        <button type="submit" className={css.button}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookingForm;

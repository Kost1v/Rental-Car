import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Email is required"),
  date: Yup.string(),
  comment: Yup.string(),
});

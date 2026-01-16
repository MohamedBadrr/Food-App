import * as Yup from "yup";

export const ContactUsValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  name: Yup.string()
    .required("Name is required.")
    .min(3, "at least 3 characters."),
  subject: Yup.string()
    .required("Subject is required.")
    .min(3, "at least 3 characters."),
  message: Yup.string()
    .required("Message is required.")
    .min(3, "at least 3 characters."),
});


export const UpdateProfileSchema = Yup.object({
  id:Yup.string(),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]*$/, "Phone number must contain only numbers")
    .nullable(),
  street_address: Yup.string().nullable(),
  country: Yup.string().nullable(),
  city: Yup.string().nullable(),
  image: Yup.string().nullable(),
});
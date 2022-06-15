import React from "react";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";
import { useFormik } from "formik";

export const useContactForm = () => {
  const toast = useToast();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    phone: Yup.number()
      .min(1111111, "Invalid Number")
      .max(11111111111, "Invalid Number")
      .required("Please enter your phone"),
    full_name: Yup.string().required("Please enter your full_name"),
    subject: Yup.string().required("Please enter subject"),
    message: Yup.string().required(
      "Please enter the message you want to deliver."
    ),
  });

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      // dispatch(getContact(values));
      resetForm();
    },
  });
  return {
    formik,
    toast,
  };
};

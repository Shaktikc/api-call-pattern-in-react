import React from "react";
import { ContactInfo } from "./components/ContactInfo";
import { Box } from "@chakra-ui/react";
import { ContactForm } from "./components/ContactForm";

export const ContactUs = () => {
  return (
    <Box>
      <ContactInfo />
      <ContactForm />
    </Box>
  );
};

import React from "react";
import { ContactInfo } from "./components/ContactInfo";
import { Box, Flex } from "@chakra-ui/react";
import { ContactForm } from "./components/ContactForm";

export const ContactUs = () => {
  return (
    <Flex gap={"5rem"} mt="4rem">
      <ContactInfo />
      <ContactForm />
    </Flex>
  );
};

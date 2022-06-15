import { Box, GridItem, Input, Text } from "@chakra-ui/react";
import { Textarea, Grid, Button, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { getContact } from "../../../redux/FooterSlice";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";
import { useContactForm } from "./useContactFrom";

export const ContactForm = () => {
  // const footers = useSelector((state) => state.footers);
  const { formik } = useContactForm();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (footers?.success === true) {
  //     toast({
  //       title: "Success",
  //       status: "success",
  //       position: "top",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   } else if (footers?.success === false) {
  //     toast({
  //       title: "Not Success",
  //       status: "error",
  //       duration: 3000,
  //       position: "top",
  //       isClosable: true,
  //     });
  //   }
  // }, [footers?.success]);

  return (
    <Box p="2rem">
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Text fontWeight={"400"} fontSize="lg" mb="0.5rem">
            Full Name*
          </Text>
          <Input
            id="full_name"
            type="text"
            bg="gray.200"
            onChange={formik.handleChange}
            value={formik.values.full_name}
          />
          <Box>
            {formik.errors.full_name ? (
              <Box style={{ color: "red" }}>{formik.errors.full_name}</Box>
            ) : null}
          </Box>
        </Box>
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", base: "1fr" }}
          mt="1rem"
          columnGap={"2rem"}
        >
          <GridItem>
            <Text fontWeight={"400"} fontSize="lg" mb="0.5rem">
              Phone*
            </Text>
            <Input
              id="phone"
              type="text"
              bg="gray.200"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <Box>
              {formik.errors.phone ? (
                <Box style={{ color: "red" }}>{formik.errors.phone}</Box>
              ) : null}
            </Box>
          </GridItem>

          <GridItem>
            <Text fontWeight={"400"} fontSize="lg" mb="0.5rem">
              Email*
            </Text>
            <Input
              id="email"
              type="text"
              bg="gray.200"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Box>
              {formik.errors.email ? (
                <Box style={{ color: "red" }}>{formik.errors.email}</Box>
              ) : null}
            </Box>
          </GridItem>
        </Grid>
        <Box mt="1rem">
          <Text fontWeight={"400"} fontSize="lg" mb="0.5rem">
            Subject*
          </Text>
          <Input
            id="subject"
            type="text"
            bg="gray.200"
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
          <Box>
            {formik.errors.subject ? (
              <Box style={{ color: "red" }}>{formik.errors.subject}</Box>
            ) : null}
          </Box>
        </Box>

        <Box mt="1rem">
          <Text fontWeight={"400"} fontSize="lg" mb="0.5rem">
            Message*
          </Text>
          <Textarea
            id="message"
            type="text"
            bg="gray.200"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Box>
            {formik.errors.message ? (
              <Box style={{ color: "red" }}>{formik.errors.message}</Box>
            ) : null}
          </Box>
        </Box>
        <Button
          color={"#F7FAFC"}
          colorScheme="blue"
          mt="2.5%"
          size="md"
          border={"none"}
          fontSize="1.2rem"
          cursor={"pointer"}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

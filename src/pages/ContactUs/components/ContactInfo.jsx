import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { useContactApi } from "../useContactApi";

export const ContactInfo = () => {
  const { getContactData } = useContactApi();
  return (
    <Flex direction={"column"} textAlign="end">
      <Text lineHeight="2rem">{getContactData?.footerInfo?.site_name}</Text>
      <Text lineHeight="2rem">
        {getContactData?.footerInfo?.location1}

        {getContactData?.footerInfo?.location2 !== "null" &&
          getContactData?.footerInfo?.location2}
      </Text>
      <Text lineHeight="2rem">
        {getContactData?.footerInfo?.contact1}
        {getContactData?.footerInfo?.contact2 !== "null" &&
          getContactData?.footerInfo?.contact2}
      </Text>
      <Text lineHeight="2rem">
        {getContactData?.footerInfo?.email1}
        <Box>
          {getContactData?.footerInfo?.email2 !== "null" &&
            getContactData?.footerInfo?.email2}
        </Box>
      </Text>
      <Text lineHeight="2rem">
        <Link to={getContactData?.footerInfo?.facebook_link}>
          {getContactData?.footerInfo?.facebook_link}
        </Link>
      </Text>
      <Text lineHeight="2rem">{getContactData?.footerInfo?.youtube_link}</Text>
      <Text lineHeight="2rem">
        {getContactData?.footerInfo?.instagram_link}
      </Text>
    </Flex>
  );
};

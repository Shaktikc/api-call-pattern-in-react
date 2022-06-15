import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const baseUrl = "https://api.nepalayanhandicraft.com";
export const useContactApi = () => {
  async function getContact() {
    const res = await axios.get(`${baseUrl}/api/about/`);
    return res.data.data;
  }
  const {
    data: getContactData,
    error,
    isError: isErrorGetContact,
    isLoading: isLoadingGetContact,
  } = useQuery("getContact", getContact);

  // async function postContact() {
  //   const res = await axios.post(`${baseUrl}/api/contact-us/`, values);
  //   return res;
  // }

  return {
    isErrorGetContact,
    isLoadingGetContact,
    getContactData,
  };
};

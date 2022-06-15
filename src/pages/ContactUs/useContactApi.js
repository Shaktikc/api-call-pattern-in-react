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
  return {
    isErrorGetContact,
    isLoadingGetContact,
    getContactData,
  };
};

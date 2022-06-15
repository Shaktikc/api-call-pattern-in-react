import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const useContactApi = () => {
  async function getContact() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
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

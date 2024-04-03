import React from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";

const axiosSecure = useAxiosSecure();
const useCart = () => {
  const { data: cart = [] } = useQuery({
    queryKey: "cart",
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCart;

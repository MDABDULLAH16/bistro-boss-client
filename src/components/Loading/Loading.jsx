import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Loading = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
};

export default Loading;

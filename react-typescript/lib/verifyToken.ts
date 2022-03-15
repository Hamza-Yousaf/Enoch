import Cookies from "js-cookie";
import router from "next/router";

export const verifyToken = () => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return true;
  } else {
    return false;
  }
};

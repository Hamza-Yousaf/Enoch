import Cookies from "js-cookie";

export const removeUserToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userProfile");
  // Cookies.remove("accessToken");
  // Cookies.remove("loggedInUser");
};

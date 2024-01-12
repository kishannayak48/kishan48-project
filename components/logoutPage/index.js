import React from "react";
import NavbarPage from "../layout/navbarPage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication data from cookies or localStorage
    Cookies.remove("gamesToken");
    console.log("=======gamesToken========", gamesToken);
    toast.success("Logout Successful!");
    router.replace("/login");
  };
  return (
    <>
      <NavbarPage onClick={handleLogout} />
      <center style={{ marginTop: "20px" }}>handleLogout</center>
    </>
  );
}

export default LogoutPage;

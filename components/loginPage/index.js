import React from "react";
import { Container } from "react-bootstrap";
import HeadPage from "../layout/HeadPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";

function LoginPage() {
  return (
    <>
      <HeadPage title={HEAD_TITLES.login}></HeadPage>
      <div>hello world</div>
    </>
  );
}

export default LoginPage;

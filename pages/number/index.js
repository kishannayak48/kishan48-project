import LayoutPage from "@/components/layout";
import NumberPage from "@/components/numberPage";
import React from "react";
import { number } from "yup";

function Number() {
  return <NumberPage />;
}
number.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
export default Number;

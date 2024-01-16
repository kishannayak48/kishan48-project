import LayoutPage from "@/components/layout";
import SumCountPage from "@/components/sumCountPage";
import React from "react";

function Number() {
  return <SumCountPage page="Number" />;
}
Number.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
export default Number;

import LayoutPage from "@/components/layout";
import SumCountPage from "@/components/sumCountPage";
import React from "react";

function sumCount() {
  return (
    <>
      <SumCountPage />
    </>
  );
}
sumCount.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
export default sumCount;

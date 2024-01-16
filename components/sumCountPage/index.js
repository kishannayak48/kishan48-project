import { decrement, increment } from "@/reducers/sumSlice";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SumCountPage = ({ page }) => {
  const allData = useSelector((state) => state.sumCountRedu);
  const dispatch = useDispatch();

  console.log("===allData=====", allData);

  const handleClick = (num) => {
    dispatch(increment());
  };
  const handleClick1 = (num) => {
    dispatch(decrement());
  };

  return (
    <center style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Button onClick={() => handleClick1(-1)}> - </Button>
      <h2>
        {page} :: {allData.sumData}
      </h2>
      <Button onClick={() => handleClick(1)}> + </Button>
    </center>
  );
};

export default SumCountPage;

import Head from "next/head";
import React from "react";

import HEAD_TITLES from "@/utils/constants/titleConstants";
import HeadPage from "../layout/HeadPage";
import TopSection from "./topSection";
import CountSection from "./countSection";
function LandingPage() {
  return (
    <HeadPage title={HEAD_TITLES.home}>
      <main>
        <TopSection />
        <CountSection />
        {/* <CounterSections /> */}
        {/* <BecomeAnInstructor /> */}
        {/* <ReviewRating /> */}
      </main>
    </HeadPage>
  );
}

export default LandingPage;

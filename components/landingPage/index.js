import Head from "next/head";
import React from "react";

import HEAD_TITLES from "@/utils/constants/titleConstants";
import HeadPage from "../layout/HeadPage";
import TopSection from "./topSection";
import CountSection from "./counterSections";
import CounterSections from "./counterSections";
import BecomeAnInstructor from "./becomeAnInstructor";
function LandingPage() {
  return (
    <HeadPage title={HEAD_TITLES.home}>
      <main>
        <TopSection />
        <CounterSections />
        <BecomeAnInstructor />
      </main>
    </HeadPage>
  );
}

export default LandingPage;

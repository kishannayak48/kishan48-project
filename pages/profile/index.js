import BecomeAnInstructor from "@/components/landingPage/becomeAnInstructor";
import ReviewRating from "@/components/landingPage/reviewRating";
import LayoutPage from "@/components/layout";
import ProfilePage from "@/components/profilePage";
import React from "react";

function Profile() {
  return (
    <>
      <ProfilePage />
      <BecomeAnInstructor />
      <ReviewRating />
    </>
  );
}
Profile.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
export default Profile;

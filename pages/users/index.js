import React from "react";
import LayoutPage from "@/components/layout";
import UsersPage from "@/components/usersPage";
import { useRouter } from "next/router";
import useAuth from "@/utils/hooks/useAuth";
import TaskList from "@/insertLoaderHere/myLoader";

function Users() {
  const router = useRouter();
  const { validated } = useAuth();

  // useEffect(() => {
  //   if (!validated) {
  //     router.replace("/login");
  //   }
  // }, [validated]);

  if (validated) {
    return (
      <>
        <UsersPage />;
      </>
    );
  }
}

Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Users;

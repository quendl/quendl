import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

// Forms
import Helmet from "react-helmet";

const Dashboard: NextPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState();

  // check if the user has a session within the localstorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") ?? "null");

    // if yes, direct him to the dashboard, else redirect him back to the login page
    if (data?.jwt) {
      setUserData(data);
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
    <Helmet title="Quendl • Dashboard" defer={false} />
      <div>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;

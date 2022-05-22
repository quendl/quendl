import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Dashboard: NextPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") ?? "null");
    if (data?.jwt) {
      setUserData(data);
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;

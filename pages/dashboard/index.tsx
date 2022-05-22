import React, {useEffect, useState} from 'react';
import { NextPage } from "next";
import {useRouter} from "next/router";

const Dashboard: NextPage = () => {

    const router = useRouter();

    const [ userData, setUserData ] = useState();

    useEffect(()=>{
        // @ts-ignore
        //idk about typescript so this line gave me error so I suppressed it, u may fix it if u have idea about typescript
        const data = JSON.parse(localStorage.getItem('userData'));
        if(data?.jwt){
            setUserData(data);
        }else{
            router.push("/");
        }
    }, [])

    return (
        <>
            <div>
                <h1>Dashboard</h1>
            </div>
        </>
    );
}

export default Dashboard;
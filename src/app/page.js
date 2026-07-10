import dns from "node:dns";
dns.setServers(["8.8.8.8","8.8.4.4"]);

import Header from "@/components/Header";
import Navbar from "@/components/Navabr";
import Image from "next/image";
import { Suspense } from "react";
import loadingPage from "./loading";
import LoadingPage from "./loading";
import TopCourse from "@/components/TopCourse";
import NewCourse from "@/components/NewCourse";
import BeforeBottom from "@/components/BeforeBottom";

export default function Home() {
  return (
    <div>
      <main>
        
           <Header></Header>
        <Navbar></Navbar>
        <TopCourse></TopCourse> 
        <NewCourse></NewCourse>  
        <BeforeBottom></BeforeBottom>
        
        
       
      </main>
    </div>
  );
}

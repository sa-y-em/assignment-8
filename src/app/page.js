import Header from "@/components/Header";
import Navbar from "@/components/Navabr";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Header></Header>
        <Navbar></Navbar>
        <p>Home page</p>
      </main>
    </div>
  );
}

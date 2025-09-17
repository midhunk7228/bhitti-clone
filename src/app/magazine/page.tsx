"use client";
import Footer from "@/components/Footer";
// import Magazine from "@/components/Magazine";
// import HeaderLogo from "@/components/HeaderLogo";
// import SubNav from "@/components/SubNav";
import Header from "@/components/Header";
import dynamic from "next/dynamic";

const Magazine = dynamic(() => import("@/components/Magazine"), {
  ssr: false,
});

export default function MagazinePage() {
  return (
    <div>
      <Header />
      <Magazine />
      <Footer />
    </div>
  );
}

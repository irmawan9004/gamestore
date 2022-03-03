import React from "react";
import Footer from "../../components/organism/Footer";
import SideBar from "../../components/organism/Sidebar";
import TransactionContent from "../../components/organism/TransactionContent";

export default function index() {
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
      </section>
      <Footer />
    </>
  );
}

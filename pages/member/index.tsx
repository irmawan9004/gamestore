import React from "react";
import OverviewContent from "../components/organism/Overview";
import SideBar from "../components/organism/Sidebar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewContent />
    </section>
  );
}

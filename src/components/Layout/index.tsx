import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";

const Layout = (props: { children: React.ReactNode }) => {
  const HeaderTopHeight = 50;
  const SideBarLeftWidth = 200;

  return (
    <div style={{ paddingTop: HeaderTopHeight }}>
      <Header/>
      <div style={{ display: 'flex', flex: 1, marginLeft: SideBarLeftWidth, padding: 10, backgroundColor: "yellow" }}>
        <SideBar
          sideBarWidth={SideBarLeftWidth}
          headerTopHeight={HeaderTopHeight} />
        <main style={{ display: 'flex', flex: 1, padding: 10, backgroundColor: 'pink' }}>
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

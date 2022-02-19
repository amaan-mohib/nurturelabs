import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Tabs.module.css";
import Table from "./Table";

const Tabs: NextPage = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    { title: "First Tab", component: <Table /> },
    { title: "Second Tab", component: <div>Second</div> },
  ];
  return (
    <div className={styles.tableSec}>
      <div className={styles.tabs}>
        {tabs.map((t, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              index === tab ? styles.selectedTab + " underline" : ""
            }`}
            onClick={() => setTab(index)}>
            {t.title}
          </div>
        ))}
      </div>
      {tabs[tab].component}
    </div>
  );
};

export default Tabs;

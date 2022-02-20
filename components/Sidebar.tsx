import {
  IconBrightness2,
  IconChartBar,
  IconChartCandle,
  IconChartPie,
  IconCoin,
  IconDatabase,
  IconFileAnalytics,
  IconHome,
  IconMenu2,
  IconMoonStars,
  IconNotes,
  IconShare,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons";
import type { NextPage } from "next";
import { useState } from "react";
import Switch from "react-switch";
import styles from "../styles/Layout.module.css";

const Sidebar: NextPage = () => {
  const [selected, setSelected] = useState(0);
  const MenuItems = [
    {
      icon: <IconHome />,
      text: "Home",
    },
    {
      icon: <IconFileAnalytics />,
      text: "Section 1",
    },
    {
      icon: <IconChartCandle />,
      text: "Section 2",
    },
    {
      icon: <IconTrendingUp />,
      text: "Section 3",
    },
    {
      icon: <IconCoin />,
      text: "Section 4",
    },
    {
      icon: <IconDatabase />,
      text: "Section 5",
    },
    {
      icon: <IconChartPie />,
      text: "Section 6",
    },
    {
      icon: <IconChartBar />,
      text: "Section 7",
    },
    {
      icon: <IconShare />,
      text: "Section 8",
    },
    {
      icon: <IconNotes />,
      text: "Documentation",
    },
  ];
  const [checked, setChecked] = useState(true);
  const [menu, setMenu] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  return (
    <>
      <div className={styles.drawer} onClick={() => setMenu(!menu)}>
        <IconMenu2 />
      </div>
      <div className={`${styles.sidebar} ${menu ? styles.sidebarActive : ""}`}>
        <div className={styles.topmenu}>
          <div className={styles.avatar} style={{ marginRight: "10px" }}>
            N
          </div>
          <h2>Name</h2>
          <IconMenu2
            style={{ marginLeft: "auto" }}
            onClick={() => setMenu(false)}
          />
        </div>
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.menuitem} ${
              index === selected ? styles.selectedmenuitem : ""
            }`}
            onClick={() => setSelected(index)}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
        <div className={styles.bottommenu}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}>
            <div className={styles.balance}>
              <div
                className={styles.avatar}
                style={{
                  marginRight: "8px",
                  width: "18px",
                  height: "18px",
                  padding: "10px",
                }}>
                N
              </div>
              $0.90
            </div>
            <button className={styles.buy}>Buy $XYZ</button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              padding: "0 10px",
            }}>
            <IconWorld color="#808191" style={{ marginRight: "20px" }} />
            <Switch
              onChange={handleChange}
              checked={checked}
              offColor="#fff"
              onColor="#353945"
              onHandleColor="#3772FF"
              offHandleColor="#3772FF"
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#808191",
                    paddingRight: 2,
                  }}>
                  <IconMoonStars />
                </div>
              }
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "black",
                    paddingLeft: 2,
                  }}>
                  <IconBrightness2 />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

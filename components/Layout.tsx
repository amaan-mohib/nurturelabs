import type { NextPage } from "next";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.css";

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <div className={styles.banner}>
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className={styles.main}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

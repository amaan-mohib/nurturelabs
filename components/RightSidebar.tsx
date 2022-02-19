import {
  IconArrowNarrowLeft,
  IconArrowUpRightCircle,
  IconCircleX,
  IconWallet,
} from "@tabler/icons";
import type { NextPage } from "next";
import Select from "react-select";
import styles from "../styles/RightSidebar.module.css";

const RightSidebar: NextPage = () => {
  const options = [
    {
      value: "Avalanche",
      label: (
        <>
          <img src="/assets/avalanche.png" />
          <span style={{ paddingLeft: "5px" }}>Avalanche</span>
        </>
      ),
    },
    {
      value: "Avalanche2",
      label: (
        <>
          <img src="/assets/avalanche.png" />
          <span style={{ paddingLeft: "5px" }}>Avalanche</span>
        </>
      ),
    },
  ];
  const options2 = [
    {
      value: "Avalanche",
      label: (
        <>
          <IconWallet style={{ color: "#3772ff" }} />
          <span style={{ paddingLeft: "5px" }}>0xf6...1353</span>
        </>
      ),
    },
    {
      value: "Avalanche2",
      label: (
        <>
          <IconWallet style={{ color: "#3772ff" }} />
          <span style={{ paddingLeft: "5px" }}>0xf6...1353</span>
        </>
      ),
    },
  ];
  const style1 = {
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "white",
      display: "flex",
      alignItems: "center",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      backgroundColor: state.isSelected ? "blue" : "black",
    }),
    control: (provided: any) => ({
      ...provided,
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#353945",
      color: "white",
      fontFamily: "Poppins",
      fontSize: "14px",
      marginRight: "20px",
    }),
  };
  const style2 = {
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "white",
      display: "flex",
      alignItems: "center",
      textTransform: "uppercase",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      textTransform: "uppercase",
      backgroundColor: state.isSelected ? "gray" : "black",
    }),
    control: (provided: any) => ({
      ...provided,
      border: "2px solid #3772ff",
      borderRadius: "10px",
      backgroundColor: "black",
      color: "white",
      fontFamily: "Poppins",
      fontSize: "14px",
    }),
  };
  return (
    <div className={styles.sidebar}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Select
          defaultValue={options[0]}
          isClearable={false}
          isSearchable={false}
          styles={style1}
          options={options}
        />
        <Select
          defaultValue={options2[0]}
          isClearable={false}
          isSearchable={false}
          styles={style2}
          options={options2}
        />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconArrowNarrowLeft style={{ marginRight: "10px" }} />
          <p>Custom link</p>
        </div>
        <p style={{ fontSize: "smaller" }}>
          https://testnet.xyz.xyz/trade?ref=
        </p>
        <input type="text" placeholder="ENTER" className={styles.input} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
          }}>
          <button className="primary-btn">
            <IconArrowUpRightCircle />
            <span>Custom Link</span>
          </button>
          <button className="primary-btn secondary-btn">
            <IconCircleX />
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

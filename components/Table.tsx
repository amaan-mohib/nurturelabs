import { IconExternalLink } from "@tabler/icons";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";

const Table: NextPage = () => {
  interface Data {
    amount: number;
    asset: string;
    chain: { img: string; name: string };
    img: string;
    referral_earnings: number;
    state: string;
    type: string;
    user: string;
  }
  const [data, setData] = useState<Array<Data>>([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => res.json())
      .then((info) => {
        console.log(info.data);
        setData(info.data);
      });
  }, []);
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <th>Asset</th>
          <th>Amount</th>
          <th>User Account</th>
          <th>Referral Earning</th>
        </thead>
        <tbody className={styles.tbody}>
          {data.length > 0 ? (
            data.map((d, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.first}>
                    <img src={d.img} />
                    <div className={styles.asset}>
                      <span>{d.asset}</span>
                      <span className={styles.type}>
                        {d.type}
                        <div className={styles.typeBadge}>
                          <img
                            src={d.chain.img}
                            style={{ marginRight: "1ch" }}
                          />
                          {d.chain.name}
                        </div>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.second}>
                    <span>{d.amount} BNB</span>
                    <p>{d.state}</p>
                  </div>
                </td>
                <td
                  className={styles.third}
                  title={d.user}>{`${d.user.substring(
                  0,
                  5
                )}...${d.user.substring(
                  d.user.length - 7,
                  d.user.length
                )}`}</td>
                <td>
                  <div className={styles.second}>
                    <span>{d.referral_earnings} BNB</span>
                    <a href="#">
                      <span>View on BSC Scan</span>
                      <IconExternalLink
                        size={18}
                        style={{ marginLeft: "1ch" }}
                      />
                    </a>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>No data found</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

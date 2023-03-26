import styles from "../styles/LandingPage.module.css";
import Router, { useRouter } from "next/router";
import { useState } from "react";
export default function LandingPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>
          MedChain<span>-EthDubai</span>
        </h1>
      </header>

      <div>
        <p>Made with 💙 For EthDubai </p>
      </div>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import LandingPage from "../components/LandingPage";
import PatientDashboard from "../components/PatientDashboard";
import { useState } from "react";
export default function Home() {
  const [connected, SetConnected] = useState(false);
  return (
    <div>
      <main className={styles.main}>
        {connected ? <LandingPage /> : <PatientDashboard />}
      </main>
    </div>
  );
}

import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.wrap} href="/">
        <img className={styles.alchemy_logo} src="/logo.png" />
        <p className={styles.brand}>MedChain</p>
      </Link>
      <ConnectButton></ConnectButton>
    </nav>
  );
}

import styles from "./discoverbuttonsection.module.css";
import Image from "next/image";
import Link from "next/link";

const DiscoverButton = ({ label, href }) => {
  return (
    <Link className={styles.discoverButtonSection} href={href}>
      <span className={styles.label}>{label}</span>
      <div className={styles.discoverButtonArrow}>
        <Image
          src="./assets/img/arrowrighttop.svg"
          alt="Vercel Logo"
          width={16}
          height={16}
          priority
        />
      </div>
    </Link>
  );
};

export default DiscoverButton;

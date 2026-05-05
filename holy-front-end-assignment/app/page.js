import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";

// landing
import DiscoverButtonSection from "@/components/landing/discoverButtonsSection";
import SectionOne from "@/components/landing/sectionOne";

import ArrowPointingAtCursor from "@/components/utils/arrowPointingAtCursor";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SectionOne />
        <div className="breakingSections"></div>
        <DiscoverButtonSection />
      </main>
    </>
  );
}

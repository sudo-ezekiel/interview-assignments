import Image from "next/image";
import styles from "../../app/page.module.css";
import HeroImage from "./heroImage";

const SectionOne = () => {
  return (
    <>
      <div className={styles.sectionOne}>
        <h1 className={styles.header}>
          Greece <br />
          the <br />
          birthplace <br />
          of ideas
        </h1>
        <HeroImage src={"./assets/img/hero-img-01.png"} href="/" />
        <HeroImage src={"./assets/img/hero-img-02.png"} href="/" />

        <HeroImage src={"./assets/img/hero-img-03.png"} href="/" />

        <div className={styles.sectionMiddle}>
          <p className={styles.paragraph}>
            Right in the cradle of Western civilization and at the heart of
            contemporary innovation, we invite innovative minds,
            ecosystem-driving entrepreneurs and leading investors to explore,
            grow, and invest in a country that blends rich history, captivating
            culture and a promising entrepreneurial ecosystem.
          </p>

          <button className={styles.sectionMiddleButton}>
            <span>Become a citizen</span>
            <Image
              src="./assets/img/arrowrighttop.png"
              alt="Vercel Logo"
              width={16}
              height={16}
              priority
            />
          </button>
        </div>

        <HeroImage src={"./assets/img/hero-img-04.png"} href="/" />
      </div>
    </>
  );
};

export default SectionOne;

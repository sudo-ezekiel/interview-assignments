import Image from "next/image";
import { useRouter } from "next/navigation";

import { ArrowRight } from "react-bootstrap-icons";

import { prefix } from "@/lib/prefix";

const HeroImageSection = () => {
  const router = useRouter();
  return (
    <div
      className="jumbotron p-3 p-md-5 text-white bg-dark position-relative"
      style={{
        height: "100vh",
      }}
    >
      <Image
        src={`${prefix}/assets/fullSizeHero.png`}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Picture of the author"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.7917542016806722) 0%, rgba(255,255,255,0.500437675070028) 17%, rgba(0,212,255,0) 50%)",
        }}
      ></div>
      <div className="position-absolute right-4 bg-white bg-opacity-75 p-4 text-black homePageContainer">
        <div className="col-md-12 px-0">
          <div className="col">SEASON 2022</div>
          <h1 className="col py-4 fw-medium">Επικοινώνησε μαζί μας!</h1>
          <button
            type="submit"
            className="btn bg-black text-white p-3 px-5"
            style={{
              borderTopRightRadius: "20px",
              borderBottomLeftRadius: "20px",
              zIndex: 10,
            }}
            onClick={() => router.push("/form")}
          >
            Συμπλήρωσε τη φόρμα <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;

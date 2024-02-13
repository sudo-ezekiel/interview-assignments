"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ArrowRight } from "react-bootstrap-icons";

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <div
        className="jumbotron p-3 p-md-5 text-white bg-dark position-relative"
        style={{
          height: "100vh",
        }}
      >
        <Image
          src="/assets/fullSizeHero.png"
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
              " linear-gradient(90deg, rgba(255,255,255,0.7917542016806722) 0%, rgba(255,255,255,0.500437675070028) 17%, rgba(0,212,255,0) 50%)",
          }}
        ></div>
        <div
          className="position-absolute right-4 bg-white bg-opacity-75 p-4 text-black"
          style={{ bottom: "4rem", right: "4rem", width: "45%" }}
        >
          <div className="col-md-12 px-0">
            <div className="col">SEASON 2022</div>
            <h1 className="col py-4 fw-medium">Επικοινώνησε μαζί μας!</h1>
            <button
              type="submit"
              className="btn bg-black text-white p-3 px-5 position-relative"
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
      <div className="jumbotron text-black bg-white" style={{ height: "80vh" }}>
        <div className="container h-100" style={{ maxWidth: "100vw" }}>
          <div className="row h-100">
            <div className="col text-center m-auto">
              <h4 className="text-decoration-underline">PHOTO GALLERY</h4>
              <div className="row pt-5">
                <div className="col">
                  <Image width={400} height={500} src="/assets/gallery1.png" />
                </div>
                <div className="col">
                  <Image width={400} height={500} src="/assets/gallery2.png" />
                </div>
              </div>
            </div>
            <div className="col px-0">
              <div
                className="h-100 position-relative"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignSelf: "flex-end",
                  alignContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <div className="position-relative">
                  <Image width={800} height={800} src="/assets/middle.png" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4rem",
                      left: 0,
                      right: 0,
                      margin: "auto",
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      justifySelf: "center",
                    }}
                  >
                    <button
                      type="submit"
                      className="btn bg-white text-black p-3 px-5"
                      style={{
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                      onClick={() => router.push("/form")}
                    >
                      Συμπλήρωσε τη φόρμα <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron text-white bg-black" style={{ height: "80vh" }}>
        <Image
          src="/assets/leftHalfSize.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-50 h-100 position-static"
          alt="Picture of the author"
        />
        <Image
          src="/assets/rightHalfSize.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-50 h-100 position-static"
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default HomePage;

import Image from "next/image";
import { useRouter } from "next/navigation";

import { ArrowRight } from "react-bootstrap-icons";
import { prefix } from "../prefix";

const PhotoGallerySection = () => {
  const router = useRouter();

  return (
    <div className="jumbotron text-black bg-white py-5">
      <div className="container h-100" style={{ maxWidth: "100vw" }}>
        <div className="row h-100">
          <div className="col text-center m-auto">
            <h4 className="text-decoration-underline">PHOTO GALLERY</h4>
            <div className="row pt-5 gap-5">
              <div className="col">
                <Image
                  width={400}
                  height={500}
                  src={`${prefix}/assets/gallery1.png`}
                />
              </div>
              <div className="col">
                <Image
                  width={400}
                  height={500}
                  src={`${prefix}/assets/gallery2.png`}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 px-0 photoGalleryFormClick">
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
                <Image
                  width={800}
                  height={800}
                  src={`${prefix}/assets/middle.png`}
                />

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
  );
};

export default PhotoGallerySection;

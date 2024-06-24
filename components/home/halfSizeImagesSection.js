import { prefix } from "@/lib/prefix";

const HalfSizeImages = () => {
  return (
    <div className="jumbotron text-white bg-black">
      <img
        src={`${prefix}/assets/leftHalfSize.png`}
        className="homePageHalfSizeImages"
      />
      <img
        src={`${prefix}/assets/rightHalfSize.png`}
        className="homePageHalfSizeImages"
      />
    </div>
  );
};

export default HalfSizeImages;

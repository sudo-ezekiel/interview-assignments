import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/form";
import DisplayFormValues from "@/components/displayFormValues";

const Form = () => {
  const [formValues, setFormValues] = useState({});

  const onSubmit = (newValues) => {
    setFormValues(newValues);
    localStorage.setItem("formValues", JSON.stringify(newValues));
  };

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        paddingBottom: "16rem",
        paddingTop: "4.5rem",
      }}
    >
      <div className="p-3">ΑΡΧΙΚΗ / ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</div>
      <div
        className="jumbotron p-3 p-md-5 text-white bg-dark position-relative"
        style={{
          height: "20vh",
          zIndex: 1,
        }}
      >
        <Image
          src="/assets/fullSizeHero.png"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: 1 }}
          alt="hero image"
          quality={100}
        />
      </div>
      <ContactForm onSubmit={onSubmit} />
      <DisplayFormValues values={formValues} />
    </div>
  );
};

export default Form;

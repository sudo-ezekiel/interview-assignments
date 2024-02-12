import { useState } from "react";

import FormInput from "./input";

const ContactForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [message, setMessage] = useState("");

  const [accept, setAccept] = useState(false);

  const [options, setOptions] = useState([
    "Επικοινωνία με το τμήμα προσωπικού",
    "Επικοινωνία με το τμήμα engineering",
  ]);

  const [selectedOption, setSelectedOption] = useState(
    "Επικοινωνία με το τμήμα προσωπικού"
  );

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (accept) {
      onSubmit({
        firstName: firstName,
        lastName: lastName,
        email: email,
        orderCode: orderCode,
        message: message,
      });
    }
  };

  return (
    <div
      className="container bg-white p-3 position-relative shadow-lg"
      style={{ marginTop: "-5rem", zIndex: 2 }}
    >
      <form
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
          paddingBottom: "8rem",
        }}
        onSubmit={(event) => onSubmitForm(event)}
      >
        <h3
          className="text-center fw-medium "
          style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
        >
          Φόρμα Επικοινωνίας
        </h3>

        <div className="py-2">
          <select
            className="form-control p-3 border-2 border-black text-black fw-medium"
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="row py-2">
          <FormInput
            className="col-6"
            label="Όνομα"
            value={firstName}
            setValue={setFirstName}
          />
          <FormInput
            className="col-6"
            label="Επώνυμο"
            value={lastName}
            setValue={setLastName}
          />
        </div>

        <div className="row py-2">
          <FormInput
            className="col-6"
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <FormInput
            className="col-6"
            label="Κωδικός παραγγελίας"
            value={orderCode}
            setValue={setOrderCode}
          />
        </div>

        <div className="py-4">
          <label className="fw-bold pb-4">Μήνυμα</label>
          <textarea
            className="form-control border-0 p-3 fw-medium"
            rows="5"
            placeholder="Γράψε μας..."
            style={{ backgroundColor: "#F4F4F4", color: "#7B7B7B" }}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>

        <div className="py-4 row">
          <span className="col fw-medium" style={{ color: "#7B7B7B" }}>
            * Όλα τα πεδία είναι υποχρεωτικά
          </span>
          <div className="col d-flex justify-content-end gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              value={accept}
              onChange={() => setAccept(!accept)}
            />
            <label
              className="form-check-label fw-medium"
              style={{ color: "#7B7B7B" }}
            >
              Αποδέχομαι τους{" "}
              <a className="text-black link-underline-dark">Όρους Χρήσης</a>
            </label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn bg-black text-white p-3 px-5 float-right"
            >
              Υποβολη {`->`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

const DisplayFormValues = ({ values }) => {
  return (
    <div className="container bg-white p-3 position-relative shadow-lg mt-5">
      <form
        style={{
          paddingLeft: "8rem",
          paddingRight: "8rem",
          minHeight: "50vh",
          color: "#7B7B7B",
        }}
      >
        <h3
          className="text-center fw-medium text-black"
          style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
        >
          Υποβλήθεντα Στοιχεία:
        </h3>

        <div
          className="row p-4 rounded-2 text-center fw-medium"
          style={{ backgroundColor: "#F4F4F4" }}
        >
          <div className="col">{values?.firstName || "Όνομα"}</div>
          <div className="col">{values?.lastName || "Επώνυμο"}</div>
          <div className="col">{values?.email || "Email"}</div>
          <div className="col">
            {values?.orderCode || "Κωδικός παραγγελίας"}
          </div>
        </div>

        <div
          className="row p-4 rounded-2 mt-5"
          style={{ backgroundColor: "#F4F4F4" }}
        >
          <div className="col-12 fw-medium text-black py-4">Μύνημα:</div>
          <div className="col-12 py-4" style={{ color: "#7B7B7B" }}>
            {values?.message || "Μύνημα"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DisplayFormValues;

import { useState, useEffect } from "react";

import DisplayFormValues from "@/components/displayFormValues";

export default function LocalPage() {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("formValues"));
    if (items) {
      setFormValues(items);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        paddingBottom: "8rem",
        paddingTop: "8rem",
        marginTop: "4.5rem",
        minHeight: "90vh",
      }}
    >
      <DisplayFormValues values={formValues} />
    </div>
  );
}

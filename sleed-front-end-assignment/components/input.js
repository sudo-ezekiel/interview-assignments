const FormInput = ({ className, label, value, setValue, type = "text" }) => {
  return (
    <div className={className}>
      <input
        type={type}
        className="form-control p-3 border-0 fw-medium"
        style={{ backgroundColor: "#F4F4F4", color: "#7B7B7B" }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={label}
      />
    </div>
  );
};

export default FormInput;

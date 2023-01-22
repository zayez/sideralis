const Spinner = ({ size = "medium" }) => {
  const spinnerSize = size === "small" ? "sm" : size === "medium" ? "md" : "lg"
  return (
    <div className="spinner-wrapper">
      <div className={`spinner spinner-${spinnerSize}`}></div>
    </div>
  )
}

export default Spinner

import { SPINNER_TYPE } from "../types/LoaderType"
import Loader from "./Loader"
const LoaderSpinner = ({ size = "medium" }) => {
  return (
    <div className="loader-container">
      <Loader type={SPINNER_TYPE} size={size} />
    </div>
  )
}

export default LoaderSpinner

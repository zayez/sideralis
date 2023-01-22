import { SPINNER_TYPE } from "../../types/LoaderType"
import Spinner from "./Spinner"

const Loader = ({ type = SPINNER_TYPE, size = "medium" }) => {
  switch (type) {
    case SPINNER_TYPE:
      return <Spinner size={size} />

    default:
      return (
        <div className="loader-missing">
          <p>Loader not found.</p>
        </div>
      )
  }
}

export default Loader

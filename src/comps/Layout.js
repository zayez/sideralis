import { ToastContainer } from "react-toastify"

const Toast = ({}) => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

const BaseLayout = ({ children }) => {
  return (
    <>
      <Toast />
      {children}
    </>
  )
}

const DefaultLayout = ({ children }) => {
  return (
    <>
      <BaseLayout />
      <div className="">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        <ToastContainer />
      </div>
    </>
  )
}

const defaultLayout = (page) => {
  return (
    <>
      <DefaultLayout>{page}</DefaultLayout>
    </>
  )
}

export { defaultLayout }

import Head from "next/head"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {}, [])
  return (
    <>
      <Head>
        <title>Sideralis | Home </title>
      </Head>
      <div>
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Index

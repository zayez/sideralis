/*
Taken from: https://www.sergiojunior.com.br/scroll-infinito-com-react-hooks
*/
import { useEffect, useState } from "react"

export default (el) => {
  const [isVisible, setIsVisible] = useState(false)
  const callback = ([entry]) => {
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const watch = new IntersectionObserver(callback)
    if (el) {
      watch.observe(el)
      return () => watch.unobserve(el)
    }
  }, [el])

  return isVisible && !!el
}

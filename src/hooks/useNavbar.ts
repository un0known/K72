import { useContext } from "react"
import { NavbarContext } from "../context/NavContext"

export const useNavbar = () => {
  const context = useContext(NavbarContext)

  if (!context) {
    throw new Error("useNavbar must be used inside NavContext Provider")
  }

  return context
}
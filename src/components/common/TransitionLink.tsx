import React from 'react'
import { useNavigate } from "react-router-dom"
import gsap from "gsap"

function TransitionLink({ to, children }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()

    const tl = gsap.timeline()

    tl.to(".stair", {
      y: "0%",
      stagger: 0.1,
      duration: 0.5
    })

    tl.call(() => {
      navigate(to)
    })

    tl.to(".stair", {
      y: "100%",
      stagger: 0.1,
      duration: 0.5
    })
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default TransitionLink
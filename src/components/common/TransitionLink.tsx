import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import type React from "react";

interface TransitionLinkProps {
  to: string;
  children: React.ReactNode;
}

function TransitionLink({ to, children }:TransitionLinkProps) {
  const navigate = useNavigate()

  const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
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
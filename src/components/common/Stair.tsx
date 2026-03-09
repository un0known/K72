import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useLocation } from 'react-router-dom'

function Stair( {children }: { children: React.ReactNode }) {

    const currentPath = useLocation().pathname
    console.log(currentPath)
    const stairParentRef = useRef(null)
    const pageref = useRef(null)

    useGSAP(function () {


        const timeLine = gsap.timeline()

        timeLine.set(stairParentRef.current, {
            display: "block"
        })
        timeLine.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })

        timeLine.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        timeLine.set(stairParentRef.current, {
            display: 'none'

        })
        timeLine.to('.stair',{
            y: '0%'
        })

        gsap.from(pageref.current, {
            opacity:0,
            delay:1,
            scale:1.2
        })

    },{
  dependencies: [currentPath]
})
    return (
        <>
            {/* animation */}
            <div ref={stairParentRef} className="w-screen h-screen fixed z-20 top-0">
                <div className="w-full h-full flex">
                    <div className="h-full w-1/5 bg-black stair"></div>
                    <div className="h-full w-1/5 bg-black stair"></div>
                    <div className="h-full w-1/5 bg-black stair"></div>
                    <div className="h-full w-1/5 bg-black stair"></div>
                    <div className="h-full w-1/5 bg-black stair"></div>
                </div>
            </div>
            <div ref={pageref}>
                {children}
            </div>
        </>
    )
}

export default Stair
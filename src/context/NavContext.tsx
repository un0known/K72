import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



type NavbarContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

export const NavbarContext = createContext<NavbarContextType | null>(null)
export const NavbarColorContext = createContext<NavbarContextType | null >(null)

function NavContext({ children }: { children: React.ReactNode }) {

  const [navColor, setNavColor] = useState('white')
  const [navOpen, setNavOpen] = useState(false)
  const locate = useLocation().pathname
  useEffect(()=>{
    if(locate == '/projects' || locate == '/agence'){
      setNavColor('black')
    }else{
      setNavColor('white')
    }
  }, [locate])


  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
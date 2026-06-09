import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



type NavbarContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

type NavbarColorContextType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
]


export const NavbarContext = createContext<NavbarContextType | null>(null)
export const NavbarColorContext = createContext<NavbarColorContextType | null >(null)

function NavContext({ children }: { children: React.ReactNode }) {

  const [navColor, setNavColor] = useState('white')
  const [navOpen, setNavOpen] = useState<boolean>(false)
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
import React, { createContext, useState } from 'react'

type NavbarContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

export const NavbarContext = createContext<NavbarContextType | null>(null)

function NavContext({children}: { children: React.ReactNode}) {

    const [navOpen, setNavOpen] = useState(false)


  return (
    <div>
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
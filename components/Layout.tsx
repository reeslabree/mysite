import React from "react"
import Navbar from "./Navbar"
import ContactBar from "./ContactBar"

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <ContactBar />
      </>
    )
  }
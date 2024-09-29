import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div><h1>Navbar</h1>
        <p>
        A navigation bar, or navbar, is a crucial element of a website's user interface.<br />
        It provides users with easy access to various sections and pages of the site, enhancing the overall user experience.<br />
        Typically located at the top or side of a webpage, a navbar can include links to home, about, services, contact, and more.<br />
        A well-designed navbar not only helps in navigation but also plays a significant role in the website's layout and aesthetics.<br />
        Modern navbars may also include dropdown menus, search bars, and responsive design features to adapt to different screen sizes.
      </p>
      
      <br /><Link href="http://localhost:3000">go back to home page</Link><br/>
    </div>
  )
}

export default Navbar
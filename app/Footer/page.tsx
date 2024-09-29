import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div> <h1>Footer</h1>
        <p>
        A footer is an essential section of a webpage, typically located at the bottom.<br />
        It often contains important information such as copyright notices, links to privacy policies, and terms of service.<br />
        Many websites also include additional navigation links, contact information, and social media icons in their footer.<br />
        The footer helps users quickly access vital information without scrolling back to the top.<br />
        In modern web design, footers may also feature subscription forms, call-to-action buttons, and links to other relevant resources.
      </p>
      <br /><Link href="/Navbar">go to Navbar page</Link><br/>
    </div>
  )
}

export default Footer
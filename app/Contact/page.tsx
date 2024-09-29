import Link from 'next/link'
 import React from 'react'

const Contact = () => {
   return (
     <div> <h1>Contact</h1>
      <p>
        Contact information is essential for fostering effective communication and collaboration in both personal and professional contexts.<br />
        It typically includes key details such as phone numbers, email addresses, and physical locations, enabling individuals and organizations to connect seamlessly.<br />
        Providing accurate and accessible contact information not only ensures that messages are delivered promptly but also helps maintain strong relationships.<br />
        In todays digital world, it's common to see links to social media profiles or professional networking sites, such as LinkedIn, which further enhance accessibility.<br />
        Keeping this information updated is vital to avoid missed opportunities and misunderstandings.
      </p>
      <br /><Link href="/Footer">go to Footer page</Link><br/>
     </div>
   )
 }

 export default Contact
"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex'
const Home = () => {
  const router = useRouter();

  const navigate = (name: string) => {
    router.push(name);
  };
   return (
    <div> <h1>Home</h1>
    <br /><Link href="/About">go to about page</Link><br/>
    <br /><Link href="/Contact">go to Contact page</Link><br/>
    <br /><Link href="/Footer">go to Footer page</Link><br/>
    <br /><Link href="/Navbar">go to Navbar page</Link><br/>


   <br /><button onClick={() =>navigate('/About')} style={{ padding: '5px 5px', fontSize: '10px' }}> About  (useRouter)</button><br />
   <br /><button onClick={() => navigate('/Contact')} style={{ padding: '5px 5px', fontSize: '10px' }}>Contact (useRouter)</button> <br />
   <br /><button onClick={() => navigate('/Footer')} style={{ padding: '5px 5px', fontSize: '10px' }}>Footer(useRouter)</button> <br />
   <br /><button onClick={() => navigate('/Navbar')} style={{ padding: '5px 5px', fontSize: '10px' }}>Navbar(useRouter)</button> <br />
   </div>
  )
}

export default Home
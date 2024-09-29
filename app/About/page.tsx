import Link from 'next/link'
import React from 'react'
const About = () => {
  return (
    <div> <h1>About</h1>
    <p>
        A home is more than just a physical space; it is a sanctuary that reflects our identity and values.<br />
        It is where we create memories, share laughter, and find comfort after a long day.<br />
        Homes can take many forms—ranging from a cozy apartment in the city to a sprawling house in the countryside—each unique to the individuals who inhabit them.<br />
        The essence of a home lies in the warmth it provides and the sense of belonging it fosters.<br />
        It is a place where we feel safe, loved, and free to express ourselves.<br />
        Ultimately, our homes are a reflection of who we are and the life we choose to live.
      </p>
      <br /><Link href="/Contact">go to Contact page</Link><br/>
      </div>
  )
}

export default About
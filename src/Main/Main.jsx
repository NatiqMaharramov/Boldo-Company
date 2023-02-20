import React from 'react'
import Section1_main from './section1/Section1_main'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import Section6 from './section6/Section6'
import Section7 from './section7/Section7'

function Main() {
  return (
    <div className='Main'>
        <Section1_main/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
    </div>
  )
}

export default Main
 import React from 'react'
import Hero from '../three/Hero'
import Footersection from './Footersection'
import Nav from './Nav'
 
 export default function Layout({children}) {
   return (
     <div>
       <style jsx global>
         {`
        
         body{
           background: white;
           
         `}
       </style>
         <Nav/>
         {/* <Hero/> */}
         <main>{children}</main>
         <Footersection/>
     </div>
   )
 }
 
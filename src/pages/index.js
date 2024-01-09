import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Header from '@/components/Header'
import Top from '@/components/Top'
import Character from '@/components/Character'
import Media from '@/components/Media'
import Info from '@/components/Info'
import About from '@/components/About'
import Loadmap from '@/components/Loadmap.js'

export default function Home() {
  return (
    <>
    <Header/>
    <Top/>
    <About/>
    <Loadmap/>
    <Media/>
    <Character/>
    <Info/>








    
    </>
  )
}

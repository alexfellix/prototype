'use client'

import Image from 'next/image'
import style from './page.module.css'
import { poppinsRegular } from '@/utils/global.fonts'
import { Children } from 'react'

export default function Home() {
  return (    
    <div className={style.page}>
      <header className={style.header}>
        <p>Conheça o curso</p>
        <p>Blog</p>
        <p>Empresas parceiras</p>
        <p>ONG´s Comunidade</p>
      </header>
      <main className={style.main}>
        <h1 className={style.h1}>
          GrowKids
        </h1>
        <div className={style.astro}>
        <p className={style.p}>
          Where your little star illuminates a
          <br/>
          world of possibles.
        </p>
          <Image
            src="/astro.jpeg"
            width={250}
            height={250}
            alt="Astronauta"
          />
        </div>
      </main>
      <footer className={style.grow}>
      <Image
        src="/grow.jpeg"
        width={100}
        height={50}
        alt="Astronauta"
      />
      </footer>
    </div>
  )
}
'use client'

import Image from 'next/image'
import style from './page.module.css'

export default function Home() {
  return (    
    <div>
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
        <p className={style.p}>
          Where your little star illuminates a world of possibles.
        </p>
        <div className={style.image}>
          <Image
            src="/astro.jpeg"
            width={250}
            height={250}
            alt="Astronauta"
          />
        </div>
      </main>
      <footer className={style.footer}>
        <div>
          <Image
            src="/grow.jpeg"
            width={100}
            height={50}
            alt="Astronauta"
          />
        </div>
      </footer>
    </div>
  )
}
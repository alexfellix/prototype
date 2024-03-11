'use client'

import {useState} from 'react'
import axios from 'axios'
import styles from './page.module.css'

export default function Form() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  async function checkUser(e: any) {
    e.preventDefault()
    const user = await axios.get('http://localhost:4001')

    if(name === user.data.user && password === user.data.password) {
      alert('CREDENCIAIS CORRETAS')
    } else {
      alert('CREDENCIAIS ERRADAS')
    }
  }

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>
        Meu cadastro
      </h1>
      <form onSubmit={checkUser}>
        <div className={styles.divUser}>
          <label className={styles.labelUser} htmlFor='name'>Nome</label>
          <input 
            type='name'
            id='name'
            name='name'
            placeholder='Digite o seu nome'
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className={styles.divPassword}>
          <label className={styles.labelPassword} htmlFor='password'>Senha</label>
          <input 
            type='password'
            id='password'
            name='password'
            placeholder='Digite a sua senha'
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
          <button 
            type='submit'  
            className={styles.button}
          >              
            Cadastrar
          </button>
      </form>
    </div>
  )  
}
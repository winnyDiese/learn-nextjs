import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {ninjas : data}
  }
}

export default function Home({ninjas}) {
  return <div>
    <h1>All Ninja</h1>
    {ninjas.map(ninja => ( 
      <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
        <h3>{ninja.name}</h3>
      </Link>


    ))}
  </div>
}



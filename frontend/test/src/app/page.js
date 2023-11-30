'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect,useState,react } from 'react';
export default function Home() {
  const [name,setname] = useState('');
  const [pic,setPic] = useState('');
  const [apiURL,setAPIURL] = useState('');

  const testAPI = async () =>  {
    const res = await fetch('http://127.0.0.1:5000/test/Paul');
    const data = await res.json();
    setname(data.data)
  }

  const testAPIPIC = async () =>  {
    const res = await fetch('http://127.0.0.1:5000/static/paul.jpg');
    const data = await res.blob();
    setPic(URL.createObjectURL(data));
  }

  useEffect(() => {
    testAPI();
    testAPIPIC();
  },[])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {name} start editing at&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          src={pic}
          alt="Next.js Logo"
          height={250}
          width={120}
          priority
        />
        <Image
          className={styles.logo}
          src={pic}
          alt="Next.js Logo"
          height={250}
          width={120}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

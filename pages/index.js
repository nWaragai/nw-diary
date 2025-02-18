import Head from "next/head";
// import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const articles = [];
      const querySnapshot = await getDocs(collection(db, 'articles'));
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
        setArticles(articles);
      });
    })();
  }), [];
  //データベースからのデータが入る
  console.log(articles);
  return (
    <>
      <Head>
        <title>ひとこと日記</title>
        <meta name="description" content="今の気分を一言で表そう！" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>ひとこと日記</h1>
          <div className={styles.grid}>
            {articles.map((article)=> {
              return (
                <a key={article.id} href={`/article?id=${article.id}`} className={styles.card}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </a>
              )
            })}
            </div>
        </main>
      </div>
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';

import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import styles from '../styles/Home.module.css';

export default function Home({ source }) {
  const content = hydrate(source)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Image on Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Image on Netlify</h1>
        <div className="wrapper">{content}</div>
        <p>
          <Image
            src="/jason-rogers.jpg"
            alt="Jason in the Mr. Rogers “I’m not very good at it” meme."
            width="1368"
            height="1044"
            layout="responsive"
          />
        </p>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component'
  const mdxSource = await renderToString(source)
  return { props: { source: mdxSource } }
}
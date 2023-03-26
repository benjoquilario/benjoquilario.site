import Head from 'next/head';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Benjo Quilario | Fullstack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Benjo Quilario - Web Developer" />
        <meta
          name="description"
          content="Hi there!, I'm Benjo Quilario a self-taught passionate frontend developer focused on building fast, easy to-use and accessible websites"
        />
        <meta property="og:url" content="https://www.benjoquilario.live/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Benjo Quilario | Fullstack Developer"
        />
        <meta
          property="og:image"
          content="https://www.benjoquilario.live/benjo.jpg"
        />
        <meta
          property="og:description"
          content="Hi there!, I'm Benjo Quilario a self-taught passionate frontend developer focused on building fast, easy to-use and accessible websites"
        />
        <meta name="og:image:alt" content="Benjo Quilario's" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="benjoquilario.live" />
        <meta
          property="twitter:url"
          content="https://www.benjoquilario.live/"
        />
        <meta
          name="twitter:title"
          content="Benjo Quilario | Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Hi there!, I'm Benjo Quilario a self-taught passionate frontend developer focused on building fast, easy to-use and accessible websites"
        />
        <meta
          name="twitter:image"
          content="https://www.benjoquilario.live/benjo.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Screenshot of Benjo Quilario's portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

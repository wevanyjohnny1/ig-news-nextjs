import Head from "next/head";
import type { NextPage } from "next";
import styles from './styles.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Página principal | JWD</title>
      </Head>
      <div className={styles.presentationBox}>
        <h1>Olá, meu nome é Johnny.</h1>
        <p className={styles.subtitle}>Bem vindo ao meu site!</p>
      </div>
    </>
  );
};

export default Home;

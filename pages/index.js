import Head from "next/head";
import styles from "../styles/Construcao.module.css";
import Image from 'next/image';
import logo from "../assets/logocofcofpng.png"

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Em Construção</title>
      </Head>
      <main className={styles.main}>
        <Image src={logo} alt="Logo da Smoke Shop" className={styles.logo} />
        <h1>Em breve a maior smoke shop do Brasil!!</h1>
      </main>
    </div>
  );
}

export default Home;
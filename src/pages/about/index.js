import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './index.module.css';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <section className={styles.main}>
      <Navigation />

      <main className={styles.main}></main>
    </section>
  );
}

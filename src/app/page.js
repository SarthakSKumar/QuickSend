import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js + Tailwind CSS Boilerplate</h1>
      <p>
        This is a boilerplate for Next.js 13 with Tailwind CSS 2.2, PostCSS 8,
        and CSS Modules.
      </p>
    </main>
  );
}

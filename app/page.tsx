import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>AmbaTeen</h1>
        <Link href="/about">About</Link>
        <p>
          <Link href="/users">Users</Link>
        </p>
      </main>
    </div>
  );
}

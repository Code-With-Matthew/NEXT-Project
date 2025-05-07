import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambateen About",
};

export default function About() {
  //throw new Error("Error in About Page")
  return (
    <>
      <h1>About Amba</h1>
      <Link href="/">Back to Home</Link>
    </>
  )
}

"use client";
import React from "react";
import Link from 'next/link'


export default function Home() {
  return (
    <React.Fragment>
      <main className="main">
        <section>
          <h1>hello world</h1>
          <p>Lorem ipsum, I wish i knew more but I dont.</p>
          <ul>
            <li><Link href="/blog/welcome">Welcome</Link></li>
          </ul>
        </section>
      </main>
    </React.Fragment >
  );
}

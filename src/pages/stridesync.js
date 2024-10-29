import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Hello() {
  return (
    <Layout title="StrideSync" description="StrideSync">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            StrideSync Project
          </Heading>
          <p className="hero__subtitle">
            StrideSync is an app that combines a runner training plan with running activity to display usable progress data.
          </p>
        </div>
      </header>
      <main>
        <div className="container">
          <h2>Design System</h2>
          <iframe 
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
            width="800" 
            height="450" 
            src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=17-2&embed-host=share"
            allowFullScreen></iframe>
          <h2>Mockups</h2>
          <iframe 
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
            width="800" 
            height="450" 
            src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=0-1&embed-host=share" 
            allowFullScreen></iframe>
          <h2>Prototype</h2>
          <iframe 
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
            width="800" 
            height="450" 
            src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=32-16&embed-host=share" 
            allowFullScreen></iframe>
        </div>
      </main>
    </Layout>
  );
}

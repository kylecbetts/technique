import Athlete from "@component/components/Athlete";
import Head from "next/head";
import { MouseEventHandler } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technique</title>
        <meta
          name="description"
          content="Visualization of human body movement"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Athlete />
      </main>
    </>
  );
}

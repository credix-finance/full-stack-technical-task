import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Credix Full-Stack Technical Task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className="flex justify-center h-screen p-32">
        <h1 className="capitalize">credix full-stack technical task</h1>
      </main>

      <footer className="flex justify-center items-center py-8 border-t border-gray-200">
        <a
          href="https://credix.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Credix
        </a>
      </footer>
    </div>
  );
};

export default Home;
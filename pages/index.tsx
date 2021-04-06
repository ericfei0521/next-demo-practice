import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";

function HomePage({ data }) {
  return (
    <>
      <Head>
        <title>Next Demo Project</title>
      </Head>
      <div>
        <h1>Hello World!!</h1>
        <div>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/test.html">
            <button>test</button>
          </Link>
          <Link href="/starwars.html">
            <button>starwars</button>
          </Link>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.map((item) => {
              return (
                <Link href={`/posts/${item.id}?name=${item.name}`}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { data } };
};
export default HomePage;

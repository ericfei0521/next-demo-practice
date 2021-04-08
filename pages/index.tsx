import Link from "next/link";
import Head from "next/head";
import Button from "../component/button";
<<<<<<< HEAD
import { firestore } from "../lib/firebase";
=======
import { firestore } from "../util/firebase";
>>>>>>> 6f8b6466a9da5ec41504264594491179331c2e01
import { GetStaticProps } from "next";

function HomePage({ data }) {
  return (
    <div>
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
          <Button index="starwars" path="/starwars.html" />
          <Link href="/posts/serverpost">
            <button>ServerSide Demo</button>
<<<<<<< HEAD
          </Link>
          <Link href="/test?id=1" as="/test/1">
            <button>跳转到test页面</button>
=======
>>>>>>> 6f8b6466a9da5ec41504264594491179331c2e01
          </Link>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.map((item) => {
              return (
                <Link href="/posts/[uid]" as={`/posts/${item.id}`}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await firestore.collection("demoData").get();
  const data = await res.docs.map((doc) => doc.data());
  return { props: { data }, revalidate: 1 };
};
export default HomePage;

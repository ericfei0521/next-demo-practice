//Dynamic route using useRouter way
// import { useRouter } from "next/router";

// const Post = () => {
//   useRouter
//   const router = useRouter();
//   const { uid, name } = router.query;

//   return (
//     <div>
//       <h2>ID : {uid}</h2>
//       <h3>Name : {name}</h3>
//     </div>
//   );
// };

//Dynamic route using getStaticPaths
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const idarray = data.map((item) => String(item.id));
  return {
    paths: idarray.map((uid) => ({
      params: { uid },
    })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { uid } = context.params;
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const content = data[uid - 1];
  return { props: { uid, content } };
}

export default function Post({ uid, content }) {
  return (
    <>
      <h1>ID: {uid}</h1>
      <h2>Name:{content.name}</h2>
      <h3>Email:{content.email}</h3>
    </>
  );
}

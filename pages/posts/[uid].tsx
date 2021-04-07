import { GetStaticProps, GetStaticPaths } from "next";
import { firestore } from "../../util/firebase";
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
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await firestore.collection("demoData").get();
  const data = await res.docs.map((doc) => doc.data());
  const idarray = data.map((item) => String(item.id));
  return {
    paths: idarray.map((uid) => ({
      params: { uid },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { uid }: any = context.params;
  const id = parseInt(uid) - 1;
  const res = await firestore.collection("demoData").get();
  const data = await res.docs.map((doc) => doc.data());
  const content = data[id];
  return { props: { uid, content } };
};

export default function Post({ uid, content }) {
  return (
    <>
      <h1>ID: {uid}</h1>
      <h2>Name:{content.name}</h2>
      <h3>Email:{content.email}</h3>
    </>
  );
}

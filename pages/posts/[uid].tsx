import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { uid, name } = router.query;

  return (
    <div>
      <h2>ID : {uid}</h2>
      <h3>Name : {name}</h3>
    </div>
  );
};

export default Post;

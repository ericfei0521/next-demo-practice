import { GetServerSideProps } from "next";
import { convertToObject } from "typescript";
import { firestore } from "../../util/firebase";

interface dataProps {
  data: any[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await firestore.collection("demoData").get();
  const data = await res.docs.map((doc) => doc.data());
  return { props: { data } };
};

export default function Post({ data }: dataProps) {
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </>
  );
}

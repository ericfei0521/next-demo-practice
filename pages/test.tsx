const Test = ({ id }) => {
  console.log(id);
  return (
    <div>
      <h2>Test頁面 ＩＤ: {id}</h2>
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
  const id = query.id;
  return {
    props: { id },
  };
};
export default Test;

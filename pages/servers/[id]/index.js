import DetailServer from "containers/server/detail";

export default DetailServer;

export const getServerSideProps = async ({ query }) => {
  try {
    const { id } = query;

    return { props: { id } };
  } catch (error) {
    console.log(error);
    return { props: { id: "" } };
  }
};

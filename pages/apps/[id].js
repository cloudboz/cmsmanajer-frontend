import DetailApp from "containers/app/detail";

export default DetailApp;

export const getServerSideProps = async ({ query }) => {
  try {
    const { id } = query;

    return { props: { id } };
  } catch (error) {
    console.log(error);
    return { props: { id: "" } };
  }
};

import Loading from "../Loading";

const Guess = ({ children }) => {
  const isLoading = false;
  return <div id="wrapper"><Loading loading={isLoading} />{children}</div>;
};

export default Guess
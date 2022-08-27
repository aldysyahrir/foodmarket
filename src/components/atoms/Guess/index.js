import Allert from "../Allert";
import Loading from "../Loading";

const Guess = ({ children }) => {
  const isLoading = false;
  return (
    <div id="wrapper">
      <Loading loading={isLoading} />
      <Allert/>
      {children}
    </div>
  )
};

export default Guess
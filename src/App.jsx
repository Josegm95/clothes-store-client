import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const App = () => {
  const { loading, error, data } = useQuery(
    gql`
      query getProduct {
        product(id: 12) {
          name
          price
        }
      }
    `
  );

  useEffect(() => {
    console.log("loading: ", loading);
    console.log("error: ", error);
    console.log("data: ", data);
  }, [loading, error, data]);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default App;

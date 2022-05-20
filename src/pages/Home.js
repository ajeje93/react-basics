import { useQuery } from "react-query";
import { useContext } from "react";
import { ReducerContext } from "../contexts";
import { useContextCounter } from "../hooks";

const Home = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  const { state } = useContext(ReducerContext);

  const { count, handleIncrement, handleDecrement } = useContextCounter();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <br />
      ReducerContext count: {state.count}
      <br />
      useContextCounter count: {count}
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export { Home };

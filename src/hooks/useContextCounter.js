import { useContext } from "react";
import { ReducerContext } from "../contexts";

const useContextCounter = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return { count: state?.count ?? 0, handleIncrement, handleDecrement };
};

export { useContextCounter };

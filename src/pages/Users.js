import { useEffect, useState } from "react";

const Users = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((value) => value + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>Users</h2>
      {timer} seconds have passed since page load
    </>
  );
};

export { Users };

import { Routes, Route } from "react-router-dom";
import { About, Home, Users } from "../pages";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { RoutesComponent as Routes };

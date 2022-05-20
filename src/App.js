import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Routes } from "./components";
import { ReducerContextProvider } from "./contexts";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReducerContextProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </div>
      </ReducerContextProvider>
    </QueryClientProvider>
  );
}

export default App;

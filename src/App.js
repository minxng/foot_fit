import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;

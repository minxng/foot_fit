import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartContextProvider } from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Outlet />
        </QueryClientProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;

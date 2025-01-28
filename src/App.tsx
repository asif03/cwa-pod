import { Outlet } from "react-router";
import "./App.css";
function App() {
  return (
    <>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="overflow-auto min-w-screen">
      <Outlet />
    </div>
  );
};

export default App;

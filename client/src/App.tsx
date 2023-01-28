import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div className="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

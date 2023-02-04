import { RouterProvider } from "react-router-dom";
import { Provider } from "jotai";
import { QueryClientProvider } from "react-query";
import { router } from "./router";
import { queryClient } from "./store";
import { Modal } from "./components";

function App() {
  return (
    <div className="root">
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={router} />
          <Modal.Portal />
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

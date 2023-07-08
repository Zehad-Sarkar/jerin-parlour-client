import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-5xl mx-auto mt-2">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
);

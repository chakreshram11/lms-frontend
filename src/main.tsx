import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import router from "./routes";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AppProvider>
        <RouterProvider router={router} />
    </AppProvider>
);

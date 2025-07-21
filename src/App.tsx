import { Outlet } from "react-router-dom";
import Toast from "./components/toast/Toast";

const App = () => {
    return (
        <>
            <Outlet />
            <Toast />
        </>
    );
};

export default App;

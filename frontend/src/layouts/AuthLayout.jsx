import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";

export default function AuthLayout () {
    return (
        <>
            <header>
                <AuthNavbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
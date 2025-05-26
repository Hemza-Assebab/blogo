import { createContext, useState, useContext } from "react";
import { AuthService } from "../services/Auth";

export const UserStateContext =  createContext({
    user: {},
    authenticated: false,
    setAuthenticated: () => {},
    setUser: () => {},
    logout: () => {},
});

export default function UserContext({children}) {
    const [user, setUser] = useState({});
    const [authenticated, _setAuthenticated] = useState(window.localStorage.getItem("AUTHENTICATED") === "true");

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED", isAuthenticated ? "true" : "false");
    }

    const login = async (values) => {
        await AuthService.getCSRF();
        return AuthService.login(values);
    }

    const signup = async (values) => {
        await AuthService.getCSRF();
        return AuthService.signup(values);
    }

    const logout = () => {
        setUser({});
        setAuthenticated(false);
    };

    return <>
        <UserStateContext.Provider value={{
            user,
            setUser,
            authenticated,
            setAuthenticated,
            login,
            signup,
            logout,
        }}>
            {children}
        </UserStateContext.Provider>
    </>
}

export const useUserContext = () => useContext(UserStateContext);
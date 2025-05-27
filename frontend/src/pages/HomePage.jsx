import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { useUserContext } from "../context/UserContext";
import { AuthService } from "../services/Auth";

function HomePage () {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { authenticated, setAuthenticated, user, setUser, logout } = useUserContext();

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
            return;
        }

        AuthService.getUser().then(({data}) => {
            setUser(data);
            setIsLoading(false);
        })
        .catch(() => {
            logout();
        });
    }, [authenticated]);

    return (
        isLoading
            ?
        <PageLoader />
        :
        <div className="container mt-5" style={{maxWidth: "800px"}}>
            <h1>Hello {user.first_name}</h1>
        </div>
    );
}

export default HomePage;
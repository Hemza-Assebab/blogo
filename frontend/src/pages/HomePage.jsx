import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { useUserContext } from "../context/UserContext";
import { AuthService } from "../services/Auth";

function HomePage () {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { authenticated, setAuthenticated, user, setUser, logout } = useUserContext();

    useEffect(() => {
        if (!authenticated) {
            navigate("/login");
            return;
        }

        AuthService.getUser().then(({data}) => {
            setUser(data);
            setLoading(false);
        })
        .catch(() => {
            logout();
        });
    }, [authenticated]);

    return (
        <div className="container">
            {
                loading
                ?
                <PageLoader />
                :
                <h1>Hello {user.first_name}</h1>
            }
        </div>
    );
}

export default HomePage;
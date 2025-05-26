import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../api/axios";
import PageLoader from "../components/PageLoader";

function HomePage () {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get("/user")
         .then(({data}) => {
            setUser(data);
            setLoading(false)
         })
         .catch(e => {
            navigate("/login");
         })
    }, []);

    return (
        <div className="container">
            {
                loading
                ?
                <PageLoader />
                :
                <h1>Hello {user.username}</h1>
            }
        </div>
    );
}

export default HomePage;
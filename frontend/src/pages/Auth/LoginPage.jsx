import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import LoadingButton from "../../components/LoadingButton";
import { useUserContext } from "../../context/UserContext";

function LoginPage () {
    const [generalErrors, setGeneralErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { login, authenticated, setAuthenticated } = useUserContext();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    useEffect(() => {
        if (authenticated) navigate("/");
    }, [authenticated]);

    const onLogin = async (values) => {
        setIsLoading(true);
        setGeneralErrors({});

        try {
            const response = await login(values);
            if (response.status === 200) {
                setAuthenticated(true);
                if (authenticated) navigate("/");
            };
        } catch ({response}) {
            setGeneralErrors({...generalErrors, login: response.data.message});
            setIsLoading(false);
        }
    }

    const handleCloseAlert = () => setGeneralErrors({...generalErrors, login: null});

    return (
        <div className="container mt-5">
            <h1 className="text-center">Connect to your account</h1>
            <div className="" style={{maxWidth: "600px", margin: "50px auto 0"}}>
                {
                    generalErrors.login
                        &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {generalErrors.login}
                        <button type="button" className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
                    </div>
                }
                <form onSubmit={handleSubmit(onLogin)}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label fw-bold">Email:</label>
                        <input
                            {...register("email", {
                                required: "Email is required !",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email !"
                                },
                            })}
                            type="text" id="email" className="form-control" name="email" placeholder="example@domain.com"/>
                        { errors.email && <p className="text-danger form-text fw-bold">{errors.email.message}</p> }
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="form-label fw-bold">Password:</label>
                        <input
                            {...register("password", {
                                required: "Password is required !"
                            })}
                            type="password" id="password" className="form-control" name="password" placeholder="Your password here" />
                        { errors.password && <p className="text-danger form-text fw-bold">{errors.password.message}</p> }
                        
                    </div>
                    {
                            isLoading
                        ?
                            <LoadingButton className="btn btn-success w-100 mt-4"/>
                        :
                            <input type="submit" value={"Log In"} className="btn btn-success w-100 mt-4" />
                    }
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
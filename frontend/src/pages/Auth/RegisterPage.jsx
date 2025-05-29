import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import LoadingButton from "../../components/LoadingButton";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function RegisterPage () {
    const [generalErrors, setGeneralErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { signup, authenticated, setAuthenticated } = useUserContext();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const handleCloseAlert = () => setGeneralErrors({...generalErrors, register: null});
    const password = watch("password");

    useEffect(() => {
        if (authenticated) navigate("/");
    }, [authenticated]);

    const onRegister = async (values) => {
        setIsLoading(true);
        setGeneralErrors({});

        try {
            const response = await signup(values);
            console.log(1);
            
            if (response.status === 201) {
                setAuthenticated(true);
                if (authenticated) navigate("/");
            };
        } catch ({response}) {
            setGeneralErrors({...generalErrors, register: response.data.message});
            setIsLoading(false);
        }
    }

    return (
        <div className="container my-5">
            <h1 className="text-center">Create an account</h1>
            <div className="" style={{maxWidth: "700px", margin: "50px auto 0"}}>
                {/* TOFIX: Display Validation Registering Errors */}
                {
                    generalErrors.register
                    &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {generalErrors.register}
                        <button type="button" className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
                    </div>
                }
                <form onSubmit={handleSubmit(onRegister)}>
                    <div className="row">
                        <div className="col-md">
                            <div className="form-group mb-4">
                                <label htmlFor="first_name" className="form-label fw-bold">First Name:</label>
                                <input
                                    {...register("first_name", {
                                        required: "First name is required !",
                                        minLength: {value: 2, message: "First name must contain at least 2 characters"},
                                        maxLength: {value: 25, message: "First name can't be more than 25 characters"}
                                    })}
                                    type="text" className="form-control" id="first_name" name="first_name" />
                                { errors.first_name && <span className="text-danger form-text fw-bold">{errors.first_name.message}</span> }
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="last_name" className="form-label fw-bold">Last Name:</label>
                                <input
                                    {...register("last_name", {
                                        required: "Last name is required !",
                                        minLength: {value: 2, message: "Last name must contain at least 2 characters"},
                                        maxLength: {value: 25, message: "Last name can't be more than 25 characters"}
                                    })}
                                    type="text" className="form-control" id="last_name" name="last_name" />
                                { errors.last_name && <span className="text-danger form-text fw-bold">{errors.last_name.message}</span> }
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="username" className="form-label fw-bold">Username:</label>
                                <input
                                    {...register("username", {
                                        required: "Username is required !",
                                        minLength: {value: 5, message: "Username must contain at least 5 characters"},
                                        maxLength: {value: 25, message: "Username can't be more than 25 characters"}
                                    })}
                                    type="text" className="form-control" id="username" name="username" />
                                { errors.username && <span className="text-danger form-text fw-bold">{errors.username.message}</span> }
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="form-label fw-bold">Email:</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required !",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email !"
                                        },
                                        maxLength: {value: 150, message: "Email can't be more than 150 characters"}
                                    })}
                                    type="text" className="form-control" id="email" name="email" />
                                { errors.email && <span className="text-danger form-text fw-bold">{errors.email.message}</span> }
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-group mb-4">
                                <label htmlFor="birth_date" className="form-label fw-bold">Birth Date:</label>
                                <input
                                    {...register("birth_date", {
                                        required: "Date of birth is required !",
                                        validate: (value) => {
                                            if (new Date(value) > new Date()) {
                                                return "Date can't be in the future";
                                            }
                                            return true;
                                        }
                                    })}
                                    type="date" className="form-control" name="birth_date" />
                                { errors.birth_date && <span className="text-danger form-text fw-bold">{errors.birth_date.message}</span> }
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="country" className="form-label fw-bold">Country:</label>
                                <select
                                    {...register("country", {
                                        required: "Country is required !",
                                        minLength: {value: 4, message: "Country must contain at least 4 characters"},
                                        maxLength: {value: 100, message: "Country can't be more than 100 characters"}
                                    })}
                                    name="country" id="country" className="form-select">
                                    <option value="">Select your country</option>
                                    <option value="Morocco">Morocco</option>
                                </select>
                                { errors.country && <span className="text-danger form-text fw-bold">{errors.country.message}</span> }
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="form-label fw-bold">Password:</label>
                                <input
                                    {...register("password", {
                                        required: "Password is required !",
                                        minLength: {value: 8,  message: "Password must contain at least 8 characters"},
                                        maxLength: {value: 20, message: "Password can't be more than 20 characters"}
                                    })}
                                    type="password" className="form-control" name="password" />
                                { errors.password && <span className="text-danger form-text fw-bold">{errors.password.message}</span> }
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password" className="form-label fw-bold">Confirm Password:</label>
                                <input
                                    {...register('confirm_password', {
                                        required: 'Please confirm your password !',
                                        validate: (value) =>
                                        value === password || 'Passwords do not match'
                                    })}
                                    type="password" className="form-control" name="confirm_password" />
                                { errors.confirm_password && <span className="text-danger form-text fw-bold">{errors.confirm_password.message}</span> }
                            </div>
                        </div>
                    </div>
                    {
                            isLoading
                        ?
                            <LoadingButton className="btn btn-success w-100 mt-4"/>
                        :
                            <input type="submit" value={"Create"} className="btn btn-success w-100 mt-4" />
                    }
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
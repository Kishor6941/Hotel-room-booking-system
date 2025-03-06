import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { urls } from "../../apiConstant/apiConstant";
import { toast } from "react-toastify";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const login = async (payload) => {
    try {
      const response = await axios.post(urls.login, payload);
      localStorage.setItem("userDetails", JSON.stringify(response.data));
      toast.success(response.data.message);
      reset();
      if (JSON.parse(localStorage.getItem("userDetails"))?.userDetails?.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 bs">
          <div className="input-form">
            <h2 className="text-center">Login</h2>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
            <input
              type="password"
              className="form-control"
              placeholder="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <div className="text-center">
              <button className="btn btn-dark" type="submit">
                Login
              </button>
              <p className="mt-3">
                Don't have an Account? <Link to="/register">Sign Up</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

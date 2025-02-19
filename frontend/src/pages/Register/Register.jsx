import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { urls } from "../../apiConstant/apiConstant";
import { toast } from "react-toastify";
const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      let payload = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
      };
      const response = await axios.post(urls.register, payload);
      toast.success(response.data.message);
      reset();
      //   navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 bs">
          <div className="input-form">
            <h2 className="text-center">Sign Up</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
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
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
            <div className="text-center">
              <button type="submit" className="btn btn-dark">
                Sign Up
              </button>
              <p className="mt-3">
                Already have an Account ? <Link to="/login">Login</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

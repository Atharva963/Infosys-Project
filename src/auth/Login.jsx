import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginService } from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState();

  const onSubmit = async(data) => {
    try {
      const response = await loginService(data);
      console.log(response);
      setUser(response);
      if (response) {
        navigate('/Home')
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex backdrop-blur-sm items-center justify-center bg-white-50 py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-xl w-full bg-transparent text-white space-y-8 p-10 rounded-2xl shadow-xl">
        <div>
          <h2 className="text-3xl font-extrabold  text-center mb-2">
            Welcome back
          </h2>
          <p className="text-center  text-sm mb-8">
            Please sign in to your account
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full text-gray-500 px-4 py-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white-700 mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full text-gray-500 px-4 py-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-white-300 rounded"
              />
              <label className="ml-2 block text-sm text-white-700">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm font-medium  text-blue-600 hover:text-blue-500"
              onClick={() => navigate('/ForgotPassword')}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center tex py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 rounded-xl bg-black text-white-500">
                Don't have an account?
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate('/signup')}
              className="w-full flex justify-center py-3 px-6  rounded-lg shadow-sm text-sm font-medium text-white-700 bg-blue-600 hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Sign up
            </button>
          </div>
        </div>

        {user && <h1 className="mt-4 text-center text-green-600">{user}</h1>}
      </div>
    </div>
  );
};

export default Login;
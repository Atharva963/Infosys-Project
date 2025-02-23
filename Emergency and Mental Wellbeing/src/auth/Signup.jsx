 import {  useState } from "react";
 import { useForm } from "react-hook-form";
 import { signupService } from "../services/authServices";
 import { useNavigate } from "react-router-dom";
 const Signup = () => {
  const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [user, setUser] = useState();
    const onSubmit = async(data) => {
      try {
        const response = await signupService(data);
        
        setUser(response);
        navigate('/Home')
      } catch (error) {
        console.log(error.message);
      }
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-transparent rounded-2xl text-white shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
  
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
        {user && <h1>{user}</h1>}
      </div>
    );
  };
  export default Signup;
  




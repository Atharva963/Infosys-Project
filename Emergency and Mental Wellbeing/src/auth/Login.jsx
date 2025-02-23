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
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        {user && <h1>{user}</h1>}
      </div>
    );
  };
  export default Login;
















// import { useForm } from "react-hook-form";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Updated onSubmit to handle API call
//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("Login Successful ✅");
//         console.log("Login Data:", result);
//         // You can redirect the user here if needed
//       } else {
//         alert(`Login Failed ❌: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("An error occurred during login. Please try again later.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             {...register("email", { required: "Email is required" })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             {...register("password", { required: "Password is required" })}
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/authServices";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      if (step === 1) {
        // Verify email logic here
        console.log("Verifying email:", data.email);
        setStep(2);
      } else if (step === 2) {
       await changePassword(data)
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center space-x-4 mb-8">
      {[1, 2].map((number) => (
        <div
          key={number}
          className={`h-2 w-16 rounded-full ${
            number <= step ? 'bg-blue-600' : 'bg-white-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-transparent p-10 rounded-2xl shadow-xl">
        {renderStepIndicator()}
        
        <div>
          <h2 className="text-3xl font-extrabold text-white text-white-900 text-center mb-2">
            {step === 1 ? "Reset your password" : "Create new password"}
          </h2>
          <p className="text-center text-white text-sm mb-8">
            {step === 1 
              ? "Enter your email to reset your password"
              : "Please enter and confirm your new password"
            }
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 ? (
            <div>
              <label className="block text-white text-sm font-medium text-white-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full px-4 py-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm text-white font-medium text-white-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    }
                  })}
                  className="w-full px-4 py-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter new password"
                />
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-white font-medium text-white-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", { 
                    required: "Please confirm your password",
                    validate: value => 
                      value === password || "Passwords do not match"
                  })}
                  className="w-full px-4 py-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Confirm new password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
          >
            {step === 1 ? "Continue" : "Reset Password"}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white-300"></div>
            </div>
            <div className="relative  flex justify-center text-sm">
              <span className="px-4 bg-black text-white rounded-xl text-white-500">
                Remember your password?
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate('/login')}
              className="w-full flex justify-center py-3 px-6 border border-white-300 rounded-lg shadow-sm text-sm font-medium text-white-700 bg-white hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Back to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
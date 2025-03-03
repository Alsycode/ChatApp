import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'; // Ensure axios is imported
import { Link } from "react-router-dom";
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const [authUser, setAuthUser] = useState();
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  // Async onSubmit function to handle signup
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const response = await axios.post("/api/user/signup", userInfo);
      console.log(response.data);
      alert("Signup successful");
      localStorage.setItem("ChatApp", JSON.stringify(response.data));
      setAuthUser(response.data)
      console.log(authUser)
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  return (
    <>
      <div className='h-screen flex justify-center items-center my-auto mx-auto rounded-lg px-2 py-2'>
        <form className='border border-white px-6 py-2 rounded space-y-3 w-96' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='my-auto mx-auto text-2xl text-center text-white font-semibold'>
            Chat <span className='text-green-500 m-[-5px]'>App</span>
          </h1>
          <h2 className='text-white text-2xl font-bold'>Signup</h2>

          {/* Username Field */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("fullname", { required: true })}
            />
          </label>
          {errors.username && <span>This field is required</span>}

          {/* Email Field */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && <span>This field is required</span>}

          {/* Password Field */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && <span>This field is required</span>}

          {/* Confirm Password Field */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Confirm password"
              {...register("confirmPassword", { required: true })}
            />
          </label>
          {errors.confirmPassword && <span className='text-red-900'>{errors.confirmPassword.message}</span>}

          <div className='flex justify-between items-center'>
            <p>Have an account? <Link  to="/signup" className='text-blue-700 underline cursor-pointer'>Login</Link></p>
            <input type="submit" className='bg-green-500 text-white rounded-md px-1 py-1 cursor-pointer' value="Signup" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup

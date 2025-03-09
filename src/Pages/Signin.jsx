import react, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Classroom from "../Assets/logo_square_rounded.svg";
import { SigninContext } from "../Context/SigninContext";

export default function Signin() {
  // Server Request will be sent on Submit
  const onSubmit = async (data) => {
    // Sending AXIOS request
    const response = await axios.post(
      "http://localhost:4000/signin",
      {
        Email: data.email,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    alert(response.data);

    // console.log("Response:", response.data);
    await delay(1);

    // NOTE: change this logic and make the authentication more meaningful
    if (response.data === "Signin Success") {
      if (isLoggedIn === "Signin") {
        setIsLoggedIn("Home");
      } else {
        setIsLoggedIn("Signin");
      }
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // This function u=is used add delay after submission of the form to symbolise processing
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  // ************************************************************

  // This is used to check whether the user is logged in or not
  const { isLoggedIn } = useContext(SigninContext);
  const { setIsLoggedIn } = useContext(SigninContext);

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <main className="w-full h-screen flex flex-col ">
      <span className="w-full flex flex-col justify-center my-auto gap-3 ">
        <Link to="/" className="w-20 h-20 mx-auto ">
          <img src={Classroom} alt="Google Classroom" />
        </Link>
        <Link to="/" className="text-2xl mx-auto my-auto ">
          Google Classroom Clone
        </Link>
        {isSubmitting && <div className="mx-auto">Submitting...</div>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 border-2 mx-auto my-auto w-fit p-3 rounded-lg  "
        >
          <h2 className="mx-auto text-2xl font-mono">Sign In</h2>

          {/* register your input into the hook by invoking the "register" function */}

          {/* USERNAME */}
          <input
            placeholder="example@gmail.com"
            {...register("email", {
              required: { value: true, message: "this field is required" },
              minLength: { value: "4", message: "the minimum length is 4" },
              maxLength: { value: "35", message: "the maximum length is 20" },
            })}
            type="email"
            className="bg-gray-300 border-2 border-gray-400 p-2 rounded-lg "
          />
          {errors.email && <div>{errors.email.message}</div>}

          {/* include validation with required or other standard HTML validation rules */}
          {/* PASSWORD FIELD */}
          <input
            {...register("password", {
              required: true,
              message: "This field is required",
              minLength: { value: "4", message: "The mininmum Length is 4" },
              maxlength: { value: "13", message: "The maximum length is 10" },
            })}
            type="password"
            placeholder="Password"
            className="bg-gray-300 border-2 border-gray-400 p-2 rounded-lg "
          />

          {/* following is the code if errors will return when the "Password" field validation fails  */}
          {errors.password && <div>{errors.password.message}</div>}

          <input
            disabled={isSubmitting}
            type="submit"
            className="border-2 border-black bg-green-400 p-2 rounded-xl disabled:bg-slate-600 hover:cursor-pointer hover:bg-green-300"
          />
          {/* Forgot passwors or Recover account */}
          <span className="flex gap-2 justify-between text-xs">
            <Link
              to=""
              className="text-red-400 hover:underline hover:cursor-pointer"
            >
              Forgot Password!
            </Link>
            <Link
              to=""
              className="text-red-400 hover:underline hover:cursor-pointer"
            >
              Recover Account!
            </Link>
          </span>
          {/* in case you dont have an account */}
          <p>
            Don't have an Account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 underline hover:text-blue-600 ml-2"
            >
              SignUp
            </Link>
          </p>
        </form>
      </span>
    </main>
  );
}

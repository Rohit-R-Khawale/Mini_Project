import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Classroom from "../Assets/logo_square_rounded.svg"
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },d*1000);
    })
  }

  const onSubmit =async (data) => {
    await delay(2);
  };

  console.log(watch("example")); // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <main className="w-full h-screen flex flex-col ">
    <span className="w-full flex flex-col justify-center my-auto gap-3 ">
        <Link to="/" className="w-20 h-20 mx-auto " ><img src={Classroom} alt="Google Classroom"/></Link>
        <Link to="/" className="text-2xl mx-auto my-auto ">Google Classroom Clone</Link>
        {isSubmitting && <div className="mx-auto">Submitting...</div>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 border-2 mx-auto my-auto w-fit p-3 rounded-lg  "
        >
            <h2 className="mx-auto text-2xl font-mono">Sign In</h2>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "this field is required"},
              minLength: { value: "3", message: "the minimum length is 3"},
              maxLength: { value: "10", message: "the maximum length is 10"},
            })}
            type="text"
            className="bg-gray-300 border-2 border-gray-400 p-2 rounded-lg "
          />
          {errors.username && <div>{errors.username.message}</div>}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("password", {
              required: true,
              message: "This field is required",
              minLength: { value: +"8", message: "The mininmum Length is 8" },
              maxlength: { value: "10", message: "The maximum length is 10" },
            })}
            type="password"
            placeholder="Password"
            className="bg-gray-300 border-2 border-gray-400 p-2 rounded-lg "
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <div>{errors.password.message}</div>}
          <input
            disabled={isSubmitting}
            type="submit"
            className="border-2 border-black bg-green-400 p-2 rounded-xl disabled:bg-slate-600 hover:cursor-pointer hover:bg-green-300"
          /> 
          <span className="flex gap-2 justify-between text-xs">
              <Link to="" className="text-red-400 hover:underline hover:cursor-pointer">Forgot Password!</Link>
              <Link to="" className="text-red-400 hover:underline hover:cursor-pointer">Recover Account!</Link>
          </span>
          <p>Dont have an Account? <Link to="/signup" className="text-blue-400 underline hover:text-blue-600 ml-2">SignUp</Link></p>
        </form>
    </span>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userLoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// interface InputState {
//   email: string;
//   password: string;
// }

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [input, setInput] = useState<userLoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<userLoginInputState>>({});

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // login validation

    const result = userLoginSchema.safeParse(input);

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<userLoginInputState>);
      setLoading(false);
      return;
    }

    // api
  };

  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <form
        onSubmit={loginHandler}
        className="md:p-8 md:w-full max-w-md  md:border mx-4 md:border-gray-200 md:rounded-lg  "
      >
        <div className="mb-8">
          <h1 className="font-bold  text-2xl text-center ">Restaurants X</h1>
        </div>
        <div className="relative mb-4">
          <Input
            onChange={changeInputHandler}
            name="email"
            type="email"
            id="email"
            value={input.email}
            placeholder="Enter your email"
            className="px-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && (
            <p className="text-red-500 text-sm   mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative mb-4 ">
          <Input
            onChange={changeInputHandler}
            name="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={input.password}
            className="px-10 focus-visible:ring-1"
          />
          <Lock className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {showPassword ? (
            <>
              <EyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-2 right-2 text-gray-500  cursor-pointer"
              />
            </>
          ) : (
            <>
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-2 right-2 text-gray-500  cursor-pointer"
              />
            </>
          )}

          {errors && (
            <p className="text-red-500 text-sm   mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-6">
          {loading ? (
            <>
              <Button
                disabled={loading}
                variant="outline"
                className="w-full bg-orange hover:bg-hoverOrange text-white hover:text-white"
              >
                <Loader2 className="h-6 w-6 animate-spin" />
              </Button>
            </>
          ) : (
            <>
              <Button
                type="submit"
                variant="outline"
                className="w-full bg-orange hover:bg-hoverOrange text-white hover:text-white"
              >
                Login
              </Button>
            </>
          )}
          <div className="mt-2 flex items-center  md:justify-center  gap:4 md:gap-0">
            <Link
              className=" text-red-500"
              to="/forgot-password"
            >
              Forgot Password
            </Link>
          </div>
        </div>
        <hr />

        <div className="mt-4 flex items-center justify-center  gap-4 md:gap-0">
          <p className="mr-4">Don't have an account?</p>
          <Link className="text-blue-500 " to="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form className="md:p-8 md:w-full max-w-md  md:border mx-4 md:border-gray-200 md:rounded-lg  ">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="font-bold  text-2xl text-center ">Reset Password</h1>
          <p className="text-gray-600 text-sm text-center">
            Enter your previous password to reset your password
          </p>
        </div>
        <div className="relative mb-4 ">
          <Input
            onChange={(e) => setNewPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            value={newPassword}
            placeholder="Enter your password"
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
        </div>
        <div>
          {loading ? (
            <>
              <Button
                onClick={() => setLoading(!loading)}
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
                onClick={() => setLoading(!loading)}
                type="submit"
                variant="outline"
                className="w-full bg-orange hover:bg-hoverOrange text-white hover:text-white"
              >
                Reset Password
              </Button>
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-1 mt-4">
          <p>Back to </p>
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;

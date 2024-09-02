import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Loader2 } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <form className="md:p-8 md:w-full max-w-md  md:border mx-4 md:border-gray-200 md:rounded-lg  ">
        <div className="mb-8">
          <h1 className="font-bold  text-2xl text-center ">Restaurants X</h1>
        </div>
        <div className="relative mb-4">
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="px-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative mb-4 ">
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="px-10 focus-visible:ring-1"
          />
          <Lock className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
        <div className="mb-6">
          {loading ? (
            <>
              <Button
                variant="outline"
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                <Loader2 className="h-6 w-6 animate-spin" />
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full bg-orange hover:bg-hoverOrange"
              >
                Login
              </Button>
            </>
          )}
        </div>
        <hr />

        <div className="mt-4">
          <p>Don't have an account?</p>
        </div>
      </form>
    </main>
  );
};

export default Login;

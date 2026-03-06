import { LoginForm } from "@/components/LoginForm";
import { ToastContainer } from "react-toastify";
import logo from "@/assets/logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function LogIn() {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token") != null) {
			navigate("/admin");
		}
	}, [navigate]);

	
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <img src={logo} className="w-[100px]" alt="logo" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ToastContainer />
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

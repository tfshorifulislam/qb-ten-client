import { Button } from "../ui/button";

const LoginButton = () => {
    return (
        <div className="flex items-center gap-4">
            <Button className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                Login
            </Button>
            <Button variant="outline" className="rounded-md px-4 py-2 font-semibold cursor-pointer">
                Sign Up
            </Button>
        </div>
        
    );
};

export default LoginButton;
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import { InputButtonGroup } from "./SearchInput";

const Navbar = () => {
    return (
        <div className="sticky top-0 left-0 right-0 z-50 py-4 border-b bg-white">
            <div className="w-11/12 mx-auto  flex items-center justify-between">
                <div>
                    <Logo />
                </div>
                <div className="hidden md:block">
                    <InputButtonGroup />
                </div>
                <div>
                    <LoginButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
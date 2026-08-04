import LoginButton from "./LoginButton";
import Logo from "./Logo";
import { InputButtonGroup } from "./SearchInput";

const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto sticky top-0 left-0 right-0 z-50 bg-white py-4">
            <div className="flex items-center justify-between">
                <div>
                    <Logo />
                </div>
                <div>
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
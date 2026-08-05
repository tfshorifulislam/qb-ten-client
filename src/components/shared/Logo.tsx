import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 transition-opacity hover:opacity-80">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">
        Q
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-slate-900">
          QBten
        </span>
      </div>
    </Link>
  );
};

export default Logo;
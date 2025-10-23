import { Link } from "@/components/ui/index.js";

export const Header = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 bg-gray-50 py-4">
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

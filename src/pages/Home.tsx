import { Link } from "@/components/ui";

export const Home = () => {
  return (
    <div className="bg-white">
      <Link to="/login">Log in</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

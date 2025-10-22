import { useGetUser } from "@/modules/User/logic/useGetUser.js";
import { Link, Typography } from "@/components/index.js";
import { useEffect } from "react";

export const Profile = () => {
  const { onGetUser, user } = useGetUser();

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  return (
    <div className="flex w-full items-center justify-between">
      <Typography.H1 className="mx-auto flex justify-center">Profile:</Typography.H1>
      {!user && (
        <Link to="/login" className="mr-12 text-4xl">
          Login
        </Link>
      )}
    </div>
  );
};

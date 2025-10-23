import { useGetUser } from "@/modules/User/logic/useGetUser.js";
import { Button, Typography } from "@/components/index.js";
import { useEffect } from "react";
import { logoutHandler } from "@/modules/Auth/index.js";

export const Profile = () => {
  const { onGetUser, user, isLoading, error } = useGetUser();

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <Typography.P className="text-lg">Loading user...</Typography.P>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Typography.P className="text-red-600">Error: {error.message}</Typography.P>
        <div className="flex items-center justify-center">
          <Button onClick={onGetUser} className="mr-3">
            Retry
          </Button>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Typography.H1>No user found</Typography.H1>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <section className="mx-auto max-w-4xl p-6">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between border-b pb-4">
        <Typography.H1 className="m-0">Profile</Typography.H1>
        <Button onClick={logoutHandler} variant="outline">
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <article className="space-y-8">
        {/* Personal Information */}
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <Typography.H2 className="mb-4 border-none text-xl">Personal Information</Typography.H2>

          <dl className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  Username
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{user.username}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">Email</Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{user.email}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">Role</Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg capitalize">{user.role}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  User ID
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 font-mono text-sm">{user.id}</Typography.P>
              </dd>
            </div>
          </dl>
        </section>

        {/* Account Status */}
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <Typography.H2 className="mb-4 border-none text-xl">Account Status</Typography.H2>

          <dl className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  Verification Status
                </Typography.P>
              </dt>
              <dd className="flex gap-2">
                <span
                  className={`rounded px-2 py-1 text-xs font-medium ${
                    user.confirmed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                  {user.confirmed ? "Confirmed" : "Unconfirmed"}
                </span>
                {user.blocked && (
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    Blocked
                  </span>
                )}
                {user.deleted && (
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                    Deleted
                  </span>
                )}
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  Member Since
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{formatDate(user.createdAt)}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1 md:col-span-2">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  Last Updated
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{formatDate(user.updatedAt)}</Typography.P>
              </dd>
            </div>
          </dl>
        </section>
      </article>
    </section>
  );
};

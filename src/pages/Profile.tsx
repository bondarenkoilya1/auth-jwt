import { useGetUser } from "@/modules/User/logic/useGetUser.js";
import { Button, Typography } from "@/components/index.js";
import { useEffect } from "react";
import { logoutHandler } from "@/modules/Auth/index.js";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const { t } = useTranslation();
  const { onGetUser, user, isLoading, error } = useGetUser();

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <Typography.P className="text-lg">{t("loading_user")}</Typography.P>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Typography.P className="text-red-600">
          {t("error")}: {error.message}
        </Typography.P>
        <div className="flex items-center justify-center">
          <Button onClick={onGetUser} className="mr-3">
            {t("retry")}
          </Button>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4">
        <Typography.H1>{t("no_user_found")}</Typography.H1>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
  };

  return (
    <section className="mx-auto max-w-4xl p-6">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between border-b pb-4">
        <Typography.H1 className="m-0">{t("profile")}</Typography.H1>
        <Button onClick={logoutHandler} variant="outline">
          {t("logout")}
        </Button>
      </header>

      {/* Main Content */}
      <article className="space-y-8">
        {/* Personal Information */}
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <Typography.H2 className="mb-4 border-none text-xl">
            {t("profile.personal_information")}
          </Typography.H2>

          <dl className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("username")}
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{user.username}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("email")}
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{user.email}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("role")}
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg capitalize">{user.role}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("profile.user_id")}
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
          <Typography.H2 className="mb-4 border-none text-xl">
            {t("profile.account_status")}
          </Typography.H2>

          <dl className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("profile.verification_status")}
                </Typography.P>
              </dt>
              <dd className="flex gap-2">
                <span
                  className={`rounded px-2 py-1 text-xs font-medium ${
                    user.confirmed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                  {user.confirmed ? t("profile.confirmed") : t("profile.unconfirmed")}
                </span>
                {user.blocked && (
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    {t("profile.blocked")}
                  </span>
                )}
                {user.deleted && (
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                    {t("profile.deleted")}
                  </span>
                )}
              </dd>
            </div>

            <div className="space-y-1">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("profile.member_since")}
                </Typography.P>
              </dt>
              <dd>
                <Typography.P className="m-0 text-lg">{formatDate(user.createdAt)}</Typography.P>
              </dd>
            </div>

            <div className="space-y-1 md:col-span-2">
              <dt>
                <Typography.P className="m-0 text-sm font-medium text-gray-500">
                  {t("profile.last_updated")}
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

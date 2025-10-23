import { Link } from "@/components/ui/index.js";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-x-10 bg-gray-50 py-4">
      <Link to="/register">{t("register")}</Link>
      <Link to="/login">{t("login")}</Link>
      <Link to="/profile">{t("profile")}</Link>
    </div>
  );
};

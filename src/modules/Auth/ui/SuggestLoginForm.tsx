import { Typography } from "@/components/ui/typography.tsx";
import { Form } from "@/components/ui/form.tsx";
import { Link } from "@/components/ui/link.tsx";
import { useTranslation } from "react-i18next";

export const SuggestLoginForm = () => {
  const { t } = useTranslation();
  return (
    <Form className="flex items-center justify-center">
      <Typography.P>{t("already_have_account")}</Typography.P>
      <Link to="/login">{t("login")}</Link>
    </Form>
  );
};

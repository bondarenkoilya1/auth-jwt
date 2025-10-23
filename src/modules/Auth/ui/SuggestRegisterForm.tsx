import { Button } from "@/components/ui/button.tsx";
import { Typography } from "@/components/ui/typography.tsx";
import { Form } from "@/components/ui/form.tsx";
import { Link } from "react-router";
import { testLoginHandler } from "@/modules/Auth/index.js";
import { useTranslation } from "react-i18next";

export const SuggestRegisterForm = () => {
  const { t } = useTranslation();
  return (
    <Form>
      <div className="flex items-center justify-center">
        <Typography.P>{t("new_to")} _?</Typography.P>
        <Link to="/register" className="ml-2 text-blue-400">
          {t("create_account")}
        </Link>
      </div>
      <Button className="mt-2 w-full" variant="outline" onClick={testLoginHandler}>
        {t("login_as_demo_user")}
      </Button>
    </Form>
  );
};

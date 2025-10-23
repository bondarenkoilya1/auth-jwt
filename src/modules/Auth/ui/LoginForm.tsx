import { type FC } from "react";

import { SuggestRegisterForm, VerificationPanel } from "@/modules/Auth/ui";
import {
  Button,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Form,
  Input,
  Typography
} from "@/components/ui";
import { type LoginValues, useLogin } from "@/modules/Auth";
import { useVerificationStatus } from "@/app/store/useAuthStore.js";
import { useTranslation } from "react-i18next";
import { loginFields } from "@/data/index.js";

export const LoginForm: FC = () => {
  const { register, onLogin, getValues } = useLogin();
  const isVerificationRequested = useVerificationStatus();
  const { t } = useTranslation();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      <Typography.H1>{t("login_to")} _</Typography.H1>
      <Form className="p-10" onSubmit={onLogin}>
        <FieldSet>
          {loginFields.map((field) => (
            <FieldGroup key={crypto.randomUUID()}>
              <Field>
                <FieldLabel htmlFor={field.name}>{t(field.name)}</FieldLabel>
                <Input
                  disabled={isVerificationRequested}
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name as keyof LoginValues)}
                />
                {field.description && <FieldDescription>{t(field.description)}</FieldDescription>}
              </Field>
            </FieldGroup>
          ))}
        </FieldSet>
        <Button
          className="mt-4 inline-flex w-full justify-center"
          type="submit"
          variant={isVerificationRequested ? "outline" : "default"}
          disabled={isVerificationRequested}>
          {t("login")}
        </Button>
      </Form>
      {isVerificationRequested && <VerificationPanel email={getValues("email")} className="mt-6" />}
      <SuggestRegisterForm />
    </div>
  );
};

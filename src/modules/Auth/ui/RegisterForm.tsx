import { type FC } from "react";

import { SuggestLoginForm, VerificationPanel } from "@/modules/Auth/ui";
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
import { type RegisterValues } from "@/modules/Auth";
import { useVerificationStatus } from "@/app/store/useAuthStore.js";
import { useRegister } from "@/modules/Auth/logic/useRegister.js";
import { useTranslation } from "react-i18next";
import { registerFields } from "@/data/index.js";

export const RegisterForm: FC = () => {
  const { register, onRegister, getValues } = useRegister();
  const { t } = useTranslation();
  const isVerificationRequested = useVerificationStatus();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      <Typography.H1>{t("create_account_in")} _</Typography.H1>
      <Form className="p-10" onSubmit={onRegister}>
        <FieldSet>
          {registerFields.map((field) => (
            <FieldGroup key={crypto.randomUUID()}>
              <Field>
                <FieldLabel htmlFor={field.name}>{t(field.name)}</FieldLabel>
                <Input
                  disabled={isVerificationRequested}
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name as keyof RegisterValues)}
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
          {t("create_account")}
        </Button>
      </Form>
      {isVerificationRequested && (
        <div className="mt-8">
          <VerificationPanel email={getValues("email")} />
        </div>
      )}
      <SuggestLoginForm />
    </div>
  );
};

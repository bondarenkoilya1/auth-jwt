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

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "maxleiter@yandex.com"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    description: "Must be at least 8 characters long."
  }
];

export const LoginForm: FC = () => {
  const { register, onLogin, getValues } = useLogin();
  const isVerificationRequested = useVerificationStatus();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      <Typography.H1>Log in to _</Typography.H1>
      <Form className="p-10" onSubmit={onLogin}>
        <FieldSet>
          {fields.map((field) => (
            <FieldGroup key={crypto.randomUUID()}>
              <Field>
                <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
                <Input
                  disabled={isVerificationRequested}
                  id={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name as keyof LoginValues)}
                />
                {field.description && <FieldDescription>{field.description}</FieldDescription>}
              </Field>
            </FieldGroup>
          ))}
        </FieldSet>
        <Button
          className="mt-4 inline-flex w-full justify-center"
          type="submit"
          variant={isVerificationRequested ? "outline" : "default"}
          disabled={isVerificationRequested}>
          Log in
        </Button>
      </Form>
      {isVerificationRequested && <VerificationPanel email={getValues("email")} className="mt-8" />}
      <SuggestRegisterForm />
    </div>
  );
};

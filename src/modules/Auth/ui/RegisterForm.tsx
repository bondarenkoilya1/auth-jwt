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

const fields = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "maxleiter"
  },
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

export const RegisterForm: FC = () => {
  const { register, onRegister, getValues } = useRegister();
  const isVerificationRequested = useVerificationStatus();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      <Typography.H1>Create an account in _</Typography.H1>
      <Form className="p-10" onSubmit={onRegister}>
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
                  {...register(field.name as keyof RegisterValues)}
                />
                {field.description && <FieldDescription>{field.description}</FieldDescription>}
              </Field>
            </FieldGroup>
          ))}
        </FieldSet>
        <Button
          className="my-5 inline-flex w-full justify-center"
          type="submit"
          variant={isVerificationRequested ? "outline" : "default"}
          disabled={isVerificationRequested}>
          Create an account
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

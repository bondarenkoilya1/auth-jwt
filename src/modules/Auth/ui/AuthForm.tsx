import { type FC } from "react";

import { SuggestRegisterForm, SuggestLoginForm, VerificationPanel } from "@/modules/Auth/ui";
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
import { type AuthValues, useAuthForm } from "@/modules/Auth";

type FormTypes = {
  formType: "login" | "register";
};

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

export const AuthForm: FC<FormTypes> = ({ formType }) => {
  const { register, onLogin, onRegister, isVerificationRequested, getValues } = useAuthForm();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      {renderTitle(formType)}
      <Form className="p-10" onSubmit={formType === "login" ? onLogin : onRegister}>
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
                  {...register(field.name as keyof AuthValues)}
                />
                {field.description && <FieldDescription>{field.description}</FieldDescription>}
              </Field>
            </FieldGroup>
          ))}
        </FieldSet>
        {renderButton(formType, isVerificationRequested)}
      </Form>
      {renderVerificationPanel(formType, isVerificationRequested, getValues("email"))}
      {renderSuggestForm(formType)}
    </div>
  );
};

function renderTitle(formType: FormTypes["formType"]) {
  return (
    <Typography.H1>{formType === "login" ? `Log in to _` : `Create an account in _`}</Typography.H1>
  );
}

function renderButton(formType: FormTypes["formType"], isVerificationRequested: boolean) {
  return (
    <Button
      className="my-5 inline-flex w-full justify-center"
      type="submit"
      variant={isVerificationRequested ? "outline" : "default"}
      disabled={isVerificationRequested}>
      {formType === "login" ? "Log in" : "Create an account"}
    </Button>
  );
}

function renderSuggestForm(formType: FormTypes["formType"]) {
  return formType === "login" ? <SuggestRegisterForm /> : <SuggestLoginForm />;
}

function renderVerificationPanel(
  formType: FormTypes["formType"],
  isVerificationRequested: boolean,
  email: string
) {
  return (
    formType === "register" &&
    isVerificationRequested && (
      <div className="mt-8">
        <VerificationPanel email={email} />
      </div>
    )
  );
}

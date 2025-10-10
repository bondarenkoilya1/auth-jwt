import { type FC } from "react";

import {
  SuggestRegisterForm,
  SuggestLoginForm,
  VerificationPanel
} from "@/modules/Auth/ui/index.ts";
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
import { useAuthForm } from "@/modules/Auth";

type FormTypes = {
  formType: "login" | "register";
};

export const AuthForm: FC<FormTypes> = ({ formType }) => {
  const { register, onLogin, onRegister, isVerificationRequested, getValues } = useAuthForm();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      {renderTitle(formType)}
      <Form className="p-10" onSubmit={formType === "login" ? onLogin : onRegister}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                disabled={isVerificationRequested}
                id="email"
                type="email"
                placeholder="maxleiter@yandex.com"
                {...register("email")}
              />
              <FieldDescription>Provide your email address.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                disabled={isVerificationRequested}
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
              />
              <FieldDescription>Must be at least 8 characters long.</FieldDescription>
            </Field>
          </FieldGroup>
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
      variant={isVerificationRequested ? "outline" : "default"}>
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

import { type FC } from "react";

import { SuggestRegisterForm, SuggestLoginForm } from "@/modules/Auth/ui/index.ts";
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
import { useAuth } from "@/modules/Auth";

type FormTypes = {
  formType: "login" | "register";
};

export const AuthForm: FC<FormTypes> = ({ formType }) => {
  const { register, onSubmit } = useAuth();

  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      {renderTitle(formType)}
      <Form className="p-10" onSubmit={onSubmit}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
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
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
              />
              <FieldDescription>Must be at least 8 characters long.</FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
        {renderButton(formType)}
      </Form>
      {renderSuggestForm(formType)}
    </div>
  );
};

function renderTitle(formType: FormTypes["formType"]) {
  return (
    <Typography.H1>{formType === "login" ? `Log in to _` : `Create an account in _`}</Typography.H1>
  );
}

function renderButton(formType: FormTypes["formType"]) {
  return (
    <Button className="my-5 inline-flex w-full justify-center" type="submit">
      {formType === "login" ? "Log in" : "Create an account"}
    </Button>
  );
}

function renderSuggestForm(formType: FormTypes["formType"]) {
  return formType === "login" ? <SuggestRegisterForm /> : <SuggestLoginForm />;
}

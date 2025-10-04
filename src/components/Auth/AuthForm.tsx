import { type FC } from "react";

import { SuggestRegisterForm, SuggestLoginForm } from "@/components/Auth";
import {
  Button,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Form,
  Input,
  Typography,
} from "@/components/ui";

type FormTypes = {
  formType: "login" | "register";
};

export const AuthForm: FC<FormTypes> = ({ formType }) => {
  return (
    <div className="mx-auto mt-30 flex flex-col items-center">
      {renderTitle(formType)}
      <Form className="p-10">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" placeholder="********" />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
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
    <Typography.H1>
      {formType === "login" ? `Log in to _` : `Create an account in _`}
    </Typography.H1>
  );
}

function renderButton(formType: FormTypes["formType"]) {
  return (
    <Button className="my-5 inline-flex w-full justify-center">
      {formType === "login" ? "Log in" : "Create an account"}
    </Button>
  );
}

function renderSuggestForm(formType: FormTypes["formType"]) {
  return formType === "login" ? <SuggestRegisterForm /> : <SuggestLoginForm />;
}

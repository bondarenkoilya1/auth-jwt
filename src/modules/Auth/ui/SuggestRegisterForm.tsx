import { Button } from "@/components/ui/button.tsx";
import { Typography } from "@/components/ui/typography.tsx";
import { Form } from "@/components/ui/form.tsx";
import { Link } from "react-router";
import { testLoginHandler } from "@/modules/Auth/logic/handlers.js";

export const SuggestRegisterForm = () => {
  return (
    <Form>
      <div className="flex items-center justify-center">
        <Typography.P>New to _?</Typography.P>
        <Link to="/register" className="ml-2 text-blue-400">
          Create an account
        </Link>
      </div>
      <Button className="mt-2 w-full" onClick={testLoginHandler}>
        Log in as demo user
      </Button>
    </Form>
  );
};

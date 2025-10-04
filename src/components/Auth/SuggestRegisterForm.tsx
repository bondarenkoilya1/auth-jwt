import { Button } from "@/components/ui/button.tsx";
import { Typography } from "@/components/ui/typography.tsx";
import { Form } from "@/components/ui/form.tsx";

export const SuggestRegisterForm = () => {
  return (
    <Form>
      <div className="flex items-center justify-center">
        <Typography.P>New to _?</Typography.P>
        <a href="/register" className="ml-2 text-blue-400">
          Create an account
        </a>
      </div>
      <Button className="mt-2 w-full">Log in as demo user</Button>
    </Form>
  );
};

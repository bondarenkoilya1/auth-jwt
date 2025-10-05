import { Typography } from "@/components/ui/typography.tsx";
import { Form } from "@/components/ui/form.tsx";
import { Link } from "@/components/ui/link.tsx";

export const SuggestLoginForm = () => {
  return (
    <Form className="flex items-center justify-center">
      <Typography.P>Already have an account?</Typography.P>
      <Link to="/login">Log in</Link>
    </Form>
  );
};

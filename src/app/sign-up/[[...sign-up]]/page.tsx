import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { CustomSignUpForm } from "@/components/auth/CustomSignUpForm";

export default async function SignUpPage() {
  const session = await auth();

  if (session.userId) {
    redirect("/onboarding/roles");
  }

  return (
    <AuthShell mode="sign-up">
      <CustomSignUpForm />
    </AuthShell>
  );
}

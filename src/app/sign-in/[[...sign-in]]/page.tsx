import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { CustomSignInForm } from "@/components/auth/CustomSignInForm";

export default async function SignInPage() {
  const session = await auth();

  if (session.userId) {
    redirect("/onboarding/roles");
  }

  return (
    <AuthShell mode="sign-in">
      <CustomSignInForm />
    </AuthShell>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export const SignOutForm = () => {
  const router = useRouter();

  return (
    <form
      className="w-full"
      onSubmit={async (e) => {
        e.preventDefault();
        await signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
              router.refresh();
            },
          },
        });
      }}
    >
      <button
        className="w-full px-1 py-0.5 text-left text-red-500"
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
};

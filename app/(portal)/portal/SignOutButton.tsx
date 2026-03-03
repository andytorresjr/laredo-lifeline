"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="text-blue-200 hover:text-white text-sm transition-colors"
    >
      Sign Out
    </button>
  );
}

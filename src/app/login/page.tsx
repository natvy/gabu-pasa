"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth, type Role } from "@/hooks/useAuth";
import LoginCard from "@/components/auth/LoginCard";
import "@/app/login/login.css";

function LoginContent() {
  const searchParams = useSearchParams();
  const initialRole = (searchParams.get("role") as Role) ?? "student";

  const {
    email,
    password,
    role,
    loading,
    error,
    setEmail,
    setPassword,
    setRole,
    handleLogin,
    handleGoogle,
  } = useAuth(initialRole);

  return (
    <main className="login-page">
      <LoginCard
        email={email}
        password={password}
        role={role}
        loading={loading}
        error={error}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onRoleChange={setRole}
        onSubmit={handleLogin}
        onGoogle={handleGoogle}
      />
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

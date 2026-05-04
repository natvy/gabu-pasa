"use client";

import Image from "next/image";
import { useState } from "react";
import { useUserSession } from "@/hooks/useUserSession";

interface UserMenuProps {
  collapsed?: boolean;
}

export default function UserMenu({ collapsed = false }: UserMenuProps) {
  const { profile, loading, signOut, deleteAccount, switchRole } =
    useUserSession();
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [switching, setSwitching] = useState(false);

  if (loading || !profile) {
    return null;
  }

  const initials = (profile.display_name ?? profile.correo ?? "?")
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const otherRole = profile.role === "student" ? "tutor" : "student";
  const otherRoleLabel =
    profile.role === "student" ? "Cambiar a Tutor" : "Cambiar a Estudiante";

  const toggleMenu = () => {
    setOpen((current) => !current);
    setConfirmDelete(false);
  };

  const handleSwitchRole = async () => {
    setSwitching(true);
    await switchRole(otherRole);
    setSwitching(false);
    setOpen(false);
  };

  const handleDeleteAccount = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }

    await deleteAccount();
  };

  const avatar = (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--secondary)] text-xs font-bold text-white">
      {profile.avatar_url ? (
        <Image
          src={profile.avatar_url}
          alt="avatar"
          width={36}
          height={36}
          unoptimized
          className="h-full w-full rounded-xl object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );

  if (collapsed) {
    return (
      <div className="relative flex justify-center">
        <button
          type="button"
          onClick={toggleMenu}
          title="Menu de usuario"
          aria-expanded={open}
          className="rounded-2xl p-1 transition hover:bg-white/10"
        >
          {avatar}
        </button>

        {open && (
          <Dropdown
            profile={profile}
            otherRoleLabel={otherRoleLabel}
            switching={switching}
            confirmDelete={confirmDelete}
            onSwitchRole={handleSwitchRole}
            onSignOut={signOut}
            onDeleteAccount={handleDeleteAccount}
            position="bottom-0 left-full ml-3"
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={open}
        className="flex w-full items-center gap-3 rounded-2xl border border-white/12 bg-white/8 p-2.5 text-left transition hover:bg-white/14"
      >
        {avatar}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {profile.display_name ?? profile.correo?.split("@")[0] ?? "Usuario"}
          </p>
          <p className="text-xs capitalize text-white/60">
            {profile.role === "student" ? "Estudiante" : "Tutor"}
          </p>
        </div>
        <span className="text-xs text-white/40">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <Dropdown
          profile={profile}
          otherRoleLabel={otherRoleLabel}
          switching={switching}
          confirmDelete={confirmDelete}
          onSwitchRole={handleSwitchRole}
          onSignOut={signOut}
          onDeleteAccount={handleDeleteAccount}
          position="bottom-full left-0 right-0 mb-2"
        />
      )}
    </div>
  );
}

function Dropdown({
  profile,
  otherRoleLabel,
  switching,
  confirmDelete,
  onSwitchRole,
  onSignOut,
  onDeleteAccount,
  position,
}: {
  profile: { correo: string };
  otherRoleLabel: string;
  switching: boolean;
  confirmDelete: boolean;
  onSwitchRole: () => void;
  onSignOut: () => void;
  onDeleteAccount: () => void;
  position: string;
}) {
  return (
    <div
      className={`absolute ${position} z-50 w-56 overflow-hidden rounded-2xl border border-white/12 shadow-2xl`}
      style={{
        background: "rgba(15, 28, 36, 0.98)",
        backdropFilter: "blur(18px)",
      }}
    >
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-xs text-white/40">Sesion activa</p>
        <p className="mt-0.5 truncate text-sm font-medium text-white">
          {profile.correo}
        </p>
      </div>

      <div className="space-y-0.5 p-2">
        <button
          type="button"
          onClick={onSwitchRole}
          disabled={switching}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 disabled:opacity-50"
        >
          <span>↻</span>
          <span>{switching ? "Cambiando..." : otherRoleLabel}</span>
        </button>

        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10"
        >
          <span>→</span>
          <span>Cerrar sesion</span>
        </button>

        <button
          type="button"
          onClick={onDeleteAccount}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
            confirmDelete
              ? "bg-red-500/20 text-red-300 hover:bg-red-500/30"
              : "text-red-400/70 hover:bg-white/10"
          }`}
        >
          <span>×</span>
          <span>
            {confirmDelete ? "Confirmar eliminacion" : "Eliminar cuenta"}
          </span>
        </button>
      </div>
    </div>
  );
}

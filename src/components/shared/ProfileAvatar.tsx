"use client";

import Image from "next/image";
import Button from "../ui/Button";

interface ProfileAvatarProps {
  id: string;
  name: string;
  photoUrl?: string;
}

export default function ProfileAvatar({
  id,
  name,
  photoUrl,
}: ProfileAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="app-card-strong w-full p-6">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left xl:flex-col xl:text-center">
        <div className="relative shrink-0">
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-[color:var(--primary-soft)] text-3xl font-semibold text-[color:var(--primary)]">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={name}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          <div className="absolute bottom-1 right-1">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-white px-2 py-1 text-xs shadow-md"
              onClick={() => console.log("Cambiar foto")}
            >
              Editar
            </Button>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xl font-semibold text-[color:var(--primary-strong)]">
            {name}
          </p>
          <p className="mt-1 break-words text-sm app-muted">{id}</p>
        </div>
      </div>
    </div>
  );
}

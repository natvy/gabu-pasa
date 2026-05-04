"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserMenu from "@/components/layout/UserMenu";

export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

const W_COLLAPSED = 80;
const W_EXPANDED = 280;
const STORAGE_KEY = "gabu-pasa-sidebar-expanded";

const sidebarBg =
  "linear-gradient(180deg, rgba(20, 44, 55, 0.96) 0%, rgba(34, 69, 82, 0.97) 58%, rgba(54, 93, 80, 0.98) 100%)";

export default function Sidebar({ items }: SidebarProps) {
  const [expanded, setExpanded] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedState = window.localStorage.getItem(STORAGE_KEY);

    if (savedState !== null) {
      return savedState === "true";
    }

    return window.innerWidth >= 1280;
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const width = expanded ? W_EXPANDED : W_COLLAPSED;
    document.documentElement.style.setProperty("--sidebar-width", `${width}px`);
    window.localStorage.setItem(STORAGE_KEY, String(expanded));
  }, [expanded]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <aside
        className="
          hidden lg:flex lg:flex-col
          fixed left-3 top-3 bottom-3 z-40
          rounded-3xl border border-white/10
          shadow-2xl shadow-black/30
          backdrop-blur-xl
          transition-all duration-300 ease-in-out
        "
        style={{
          background: sidebarBg,
          width: expanded ? W_EXPANDED : W_COLLAPSED,
        }}
      >
        <div
          className={`flex items-center border-b border-white/10 px-3 py-4 ${
            expanded ? "justify-between gap-3" : "justify-center"
          }`}
        >
          {expanded && <Brand />}

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white transition hover:bg-white/16"
            aria-label={expanded ? "Colapsar sidebar" : "Expandir sidebar"}
          >
            <span className="text-xs">{expanded ? "←" : "→"}</span>
          </button>
        </div>

        {expanded && (
          <div className="mx-3 mt-3 rounded-3xl border border-white/10 bg-white/8 px-4 py-4 text-sm text-white/74">
            <p className="font-semibold text-white">Navegacion principal</p>
            <p className="mt-1 leading-relaxed text-white/62">
              El contenido se adapta a este panel para mantener alineacion en cualquier estado.
            </p>
          </div>
        )}

        <nav className="app-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-3">
          {items.map((item) => (
            <SidebarLink
              key={item.href}
              item={item}
              isActive={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
              }
              expanded={expanded}
            />
          ))}
        </nav>

        <div className="border-t border-white/10 px-2 py-3">
          <UserMenu collapsed={!expanded} />
        </div>
      </aside>

      <div className="fixed left-3 top-3 z-50 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 text-white shadow-lg transition hover:bg-white/10"
          style={{ background: sidebarBg }}
          aria-label="Abrir navegacion"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Cerrar navegacion"
            onClick={() => setMobileOpen(false)}
          />

          <div
            className="relative z-10 flex h-full w-[min(82vw,22rem)] flex-col rounded-r-3xl border-r border-white/10 shadow-2xl"
            style={{ background: sidebarBg }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4">
              <Brand />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sm font-semibold text-white transition hover:bg-white/14"
                aria-label="Cerrar menu"
              >
                ✕
              </button>
            </div>

            <nav className="app-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-3">
              {items.map((item) => (
                <SidebarLink
                  key={item.href}
                  item={item}
                  isActive={
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)
                  }
                  expanded
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </nav>

            <div className="border-t border-white/10 px-2 py-3">
              <UserMenu collapsed={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-sm font-bold text-white">
        GP
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          Plataforma
        </p>
        <p className="text-sm font-semibold text-white">Gabu Pasa</p>
      </div>
    </div>
  );
}

function SidebarLink({
  item,
  isActive,
  expanded,
  onNavigate,
}: {
  item: SidebarItem;
  isActive: boolean;
  expanded: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      title={!expanded ? item.label : undefined}
      className={`
        flex items-center gap-3 rounded-2xl border px-2 py-2 transition duration-200
        ${
          isActive
            ? "border-white/18 bg-white/16 text-white shadow-md"
            : "border-transparent text-white/70 hover:bg-white/10 hover:text-white"
        }
        ${expanded ? "justify-start pr-3" : "justify-center"}
      `}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          isActive ? "bg-white/14" : "bg-white/8"
        }`}
      >
        <Image
          src={item.icon}
          alt={item.label}
          width={18}
          height={18}
          className="brightness-0 invert"
        />
      </div>

      {expanded && (
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">
            {item.label}
          </span>
          <span className="block text-xs text-white/50">
            {isActive ? "Vista actual" : "Abrir seccion"}
          </span>
        </div>
      )}
    </Link>
  );
}

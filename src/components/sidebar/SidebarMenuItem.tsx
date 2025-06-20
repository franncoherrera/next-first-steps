"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface Props {
  path: string;
  icon: IconType;
  title: string;
  subTitle: string;
  onClickItem?: () => void;
}

export const SideMenuItem = ({
  path,
  icon,
  title,
  subTitle,
  onClickItem,
}: Props) => {
  const currentPath = usePathname();
  const Icon = icon;
  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
        currentPath === path ? "bg-blue-800" : ""
      }`}
      onClick={onClickItem}
    >
      <div>
        <Icon size={40} />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};

import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <div className="flex justify-center align-baseline">
        <span className="text-3xl ml-1">Información general</span>
      </div>
      <WidgetsGrid />
    </div>
  );
}

import { ThemeProvider } from "@/components/theme-provider";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

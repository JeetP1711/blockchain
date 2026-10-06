import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Layers, CheckCircle, Copy, BrainCircuit, Activity, BookA, Moon, Sun, Search } from "lucide-react";
import SearchModal from "./SearchModal";
import { useAppProgress } from "../hooks/useAppContext";
import { cn } from "../lib/utils";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/learn", label: "Learn", icon: BookOpen },
  { path: "/visualize", label: "Visualize", icon: Layers },
  { path: "/quiz", label: "Quiz", icon: CheckCircle },
  { path: "/flashcards", label: "Flashcards", icon: Copy },
  { path: "/exam-mode", label: "Exam Mode", icon: BrainCircuit },
  { path: "/revision", label: "Revision", icon: Activity },
  { path: "/glossary", label: "Glossary", icon: BookA },
];

export default function Layout() {
  const { progress, toggleTheme } = useAppProgress();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = React.useState(false);

  useEffect(() => {
    if (progress.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [progress.theme]);

  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-background text-foreground overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h1 className="font-bold text-lg text-primary tracking-tight">BlockAcademy</h1>
          <div className="flex items-center gap-1">
            <button onClick={() => setSearchOpen(true)} className="p-2 rounded-full hover:bg-secondary text-muted-foreground">
              <Search size={18} />
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary">
              {progress.theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
        <h1 className="font-bold text-lg text-primary tracking-tight">BlockAcademy</h1>
        <div className="flex items-center gap-1">
          <button onClick={() => setSearchOpen(true)} className="p-2 rounded-full hover:bg-secondary text-muted-foreground">
            <Search size={18} />
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary">
            {progress.theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background relative pb-20 md:pb-8">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-card z-50">
        <ul className="flex items-center justify-around p-2">
          {navItems.slice(0, 5).map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 rounded-md transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

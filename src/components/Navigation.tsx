import { GitBranch, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type Page = "home" | "about" | "projects" | "contact";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home" as Page, label: "Home" },
    { id: "about" as Page, label: "About" },
    { id: "projects" as Page, label: "Projects" },
    { id: "contact" as Page, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e8eb]/10 bg-[#0f1717]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f1717]/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <h1 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk']">
            <span className="hidden sm:inline">
              Siraj Ashraf{" "}
            </span>
            <span className="sm:hidden">Portfolio</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#7B61FF] font-['Space_Grotesk'] ${
                  currentPage === item.id
                    ? "text-[#7B61FF]"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="bg-[#26363b] border-[#26363b] text-white hover:bg-[#26363b]/80 rounded-lg h-10 px-2.5"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="bg-[#26363b] border-[#26363b] text-white hover:bg-[#26363b]/80 rounded-lg h-10 px-2.5"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="bg-[#26363b] border-[#26363b] text-white hover:bg-[#26363b]/80 rounded-lg h-10 px-2.5"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e5e8eb]/10 bg-[#0f1717]">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors font-['Space_Grotesk'] ${
                    currentPage === item.id
                      ? "bg-[#7B61FF] text-white"
                      : "text-white hover:bg-[#26363b]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-[#e5e8eb]/10">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-[#26363b] border-[#26363b] text-white hover:bg-[#26363b]/80 rounded-lg font-['Space_Grotesk']"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
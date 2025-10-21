import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { ModeToggle } from "./mode-toggle";
import Profile from "./Profile";
import { motion } from "framer-motion";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/40 dark:bg-black/30 backdrop-blur-md border-b border-white/20 dark:border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5 md:px-12">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* Mobile menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-emerald-400/20 transition-all"
              >
                <svg
                  className="pointer-events-none"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6H20M4 12H20M4 18H20" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-44 p-2 md:hidden">
              <NavigationMenu className="max-w-none">
                <NavigationMenuList className="flex-col gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          className="block w-full py-2 px-3 rounded-md hover:bg-emerald-400/20 transition-all text-sm font-medium"
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl flex items-center gap-2 font-extrabold text-gray-900 dark:text-white hover:text-emerald-400 transition group"
          >
            <motion.div
              className="relative drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

            </motion.div>
            <span className="tracking-wide bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-300 dark:to-emerald-400 text-transparent bg-clip-text">
              GoWay
            </span>
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden md:flex ml-6">
            <NavigationMenuList className="flex gap-6">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href}
                      className="relative font-medium text-sm py-1.5 px-2 text-gray-800 dark:text-gray-200 hover:text-emerald-400 transition group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Conditional Buttons */}
          {data?.data?.role === "RIDER" && (
            <>
              <Link
                to="/ride-request"
                className="font-medium py-1.5 px-3 rounded-md hover:bg-emerald-400/40 bg-emerald-400/25 transition text-sm text-gray-900 dark:text-white"
              >
                Request a Ride
              </Link>
              <Link
                to="/be-a-driver"
                className="font-medium py-1.5 px-3 rounded-md hover:bg-emerald-400/40 bg-emerald-400/10 transition text-sm text-gray-900 dark:text-white"
              >
                Be a Driver
              </Link>
            </>
          )}

          {(data?.data?.role === "ADMIN" ||
            data?.data?.role === "SUPER_ADMIN") && (
            <Link
              to="/admin/analytics"
              className="font-medium py-1.5 px-3 rounded-md hover:bg-emerald-400/40 bg-emerald-400/25 transition text-sm text-gray-900 dark:text-white"
            >
              Dashboard
            </Link>
          )}

          {data?.data?.role === "DRIVER" && (
            <Link
              to="/pick-a-ride"
              className="font-medium py-1.5 px-3 rounded-md hover:bg-emerald-400/40 bg-emerald-400/25 transition text-sm text-gray-900 dark:text-white"
            >
              Pick a Ride
            </Link>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {data?.data?.email ? (
            <Profile />
          ) : (
            <Button
              asChild
              size="sm"
              className="text-sm bg-emerald-400 hover:bg-emerald-500 text-black dark:text-white transition-all duration-300 hover:shadow-[0_0_10px_rgba(52,211,153,0.6)]"
            >
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

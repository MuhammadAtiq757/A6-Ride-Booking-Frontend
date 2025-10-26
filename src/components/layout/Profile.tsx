import { BookOpenIcon, ChevronDownIcon, LogOutIcon } from "lucide-react";
import { useNavigate, Link } from "react-router";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";

export default function Profile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  // userInfo query
  const { data: userInfo } = useUserInfoQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const handleLogout = async () => {
    try {
      await logout(undefined); // call logout API
      localStorage.removeItem("userInfo");
      sessionStorage.removeItem("userInfo");

      // clear all authApi cache
      dispatch(authApi.util.resetApiState());

      // invalidate USER tag explicitly (userInfo query provides "USER")
      dispatch(authApi.util.invalidateTags(["USER"]));

      // redirect to login page
      navigate("/login");

      toast.success("Logged out successfully");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  // hide profile if no userInfo
  if (!userInfo?.data) return null;

  // determine dashboard link based on role
  const dashboardLink = (() => {
    switch (userInfo.data.role) {
      case "ADMIN":
      case "SUPER_ADMIN":
        return "/admin";
      case "DRIVER":
        return "/driver";
      case "RIDER":
        return "/rider";
      default:
        return "/";
    }
  })();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage
              src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
              alt={userInfo.data.name}
            />
            <AvatarFallback>
              {userInfo.data.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="max-w-64 z-1000">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {userInfo.data.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {userInfo.data.email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link to={dashboardLink}>
            <DropdownMenuItem>
              <BookOpenIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import * as React from "react";
import { Link, useNavigate } from "react-router";
import { LogOutIcon } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";
import { Button } from "./ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout(undefined); // call logout API

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


  return (
    <Sidebar {...props}>
      <SidebarHeader className="items-center">
        <Link to="/" className=" mb-4">

          <span className="font-bold text-2xl text-left text-primary dark:text-primary-light">
            GoWay
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />

      <div className="w-full flex justify-center mb-6">
        <Button
          onClick={() => handleLogout()}
          size="lg"
          className="bg-primary hover:shadow-primary text-lg px-8 py-3 cursor-pointer"
        >
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          Logout
        </Button>
      </div>
    </Sidebar>
  );
}

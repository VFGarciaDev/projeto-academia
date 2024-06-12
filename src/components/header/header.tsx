import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu"
import { SwitchTheme } from "../theme-provider/switch-theme";
import { MenuLanguage } from "./components/menu-language";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#",
        label: "Home",
    },
    {
        href: "#plano",
        label: "Planos",
    },
    {
        href: "#modalidade",
        label: "Modalidades",
    },
    {
        href: "#horarios",
        label: "Horários",
    },
    {
        href: "#contact",
        label: "Contato",
    },
];

export const Header = () => {

    return (
        <header className="w-full py-5 shadow-sm dark:border dark:border-b-neutral-700">
            <NavigationMenu className="container block z-40">
                <NavigationMenuList className="flex justify-between items-center">
                    <NavigationMenuItem>
                        Logo
                    </NavigationMenuItem>

                    <div className="flex gap-10 items-center">
                        <NavigationMenuItem
                            className="flex gap-6">
                            {routeList.map(({ href, label }: RouteProps, index) => (
                                <a
                                    href={href}
                                    key={index}
                                    className="text-lg underline underline-offset-[3px] font-semibold decoration-2 px-4 pt-2 pb-3 rounded-full 
                                    hover:bg-black hover:text-secondary dark:hover:text-white dark:text-secondary">
                                    {label}
                                </a>
                            ))}
                        </NavigationMenuItem>

                        <NavigationMenuItem className="flex items-center gap-4">
                            <SwitchTheme />
                            <MenuLanguage />
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
import { Switch } from "../ui/switch";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react"

export const SwitchToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center gap-2">
            <Moon className=" h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <Switch
            defaultChecked={!(theme === "dark")}
            onCheckedChange={(checked) => {
                if (checked) setTheme("light")
                if (!checked) setTheme("dark")
              }}/>
            <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </div>
    )
}
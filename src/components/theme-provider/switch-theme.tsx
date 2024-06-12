import { Switch } from "../ui/switch";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react"

export const SwitchTheme = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex items-center gap-1">
            <Moon className="h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fill-current text-[#00a0ae]" />
            <Switch
            
            defaultChecked={!(theme === "dark")}
            onCheckedChange={(checked) => {
                if (checked) setTheme("light")
                if (!checked) setTheme("dark")
              }}/>
            <Sun className="h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-current text-secondary" />
        </div>
    )
}
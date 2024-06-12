import { Button } from "@/components/ui/button"

interface CardProps {
    title: string,
    desc: string,
    price: number,
}

export const CardPlanos = (props: CardProps) => {

    return (
        <div className="h-full flex flex-col justify-end items-center border-4 border-neutral-800 rounded-xl px-5 py-10 bg-secondary dark:border-secondary dark:bg-primary dark:text-primary-foreground">
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <p className="text-lg">{props.desc}</p>
            <div className="flex flex-col items-center gap-1 mt-10">
                <p className="font-bold">Por apenas:</p>
                <a>
                    <Button className="rounded-full text-2xl font-bold dark:bg-secondary">
                        R$ {props.price},00
                    </Button>
                </a>
            </div>
        </div>
    )
}
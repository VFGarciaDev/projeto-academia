import { FaArrowRight } from "react-icons/fa";
import { CardPlanos } from "./components/card-planos";

const listPlanos = [
    {
        title: "Plano Básico",
        desc: "descrição",
        price: 100,
    },
    {
        title: "Plano Cross",
        desc: "descrição",
        price: 150,
    },
    {
        title: "Plano Ultimate",
        desc: "descrição",
        price: 200,
    }
]

export const Planos = () => {

    return (
        <section className="container flex flex-col items-center w-full my-20 h-[60vh]">
            <h1 className="text-4xl font-bold">Conheça nossos planos</h1>
            <h2 className="text-2xl font-semibold mt-5 mb-20">Venha fazer parte da academia <span className="text-secondary font-bold">mais completa do país</span></h2>
            <div className="grid grid-cols-4 w-full items-center gap-10 grow">
                {listPlanos.map((value, index) => (
                    <CardPlanos key={index} title={value.title} desc={value.desc} price={value.price} />
                ))}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xl font-bold ">Veja mais...</p>
                    <a className="bg-secondary rounded-full p-3 hover:cursor-pointer">
                        <FaArrowRight className="w-6 h-6 text-black"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
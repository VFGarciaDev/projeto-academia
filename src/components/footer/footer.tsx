interface RouteFooterLinks {
    href: string;
    label: string;
}

const routeaboutus: RouteFooterLinks[] = [
    {
        href: "#sobrenos",
        label: "Sobre nós",
    },
    {
        href: "#Unidades",
        label: "Unidades",
    },
    {
        href: "#nossoespaco",
        label: "Nosso Espaço",
    },
    {
        href: "#programas",
        label: "Programas",
    },
    {
        href: "#aulas",
        label: "Aulas",
    },
];

const routeelsemore: RouteFooterLinks[] = [
    {
        href: "#blod",
        label: "Blog",
    },
    {
        href: "#eventos",
        label: "Eventos",
    },
    {
        href: "#contato",
        label: "Contato",
    },
    {
        href: "#parainvestidores",
        label: "Para Investidores",
    },
    {
        href: "#indiqueumimovel",
        label: "Indique um Imóvel",
    },
]

const routemore: RouteFooterLinks[] = [
    {
        href: "#contratos",
        label: "Contratos",
    },
    {
        href: "#trabalheconosco",
        label: "Trabalhe Conosco",
    },
    {
        href: "#canaldedenuncias",
        label: "Canal de Denúncias",
    },
]

export const Footer = () => {

    return (
        <footer className="w-full dark:border dark:border-t-neutral-700 py-5">
            <div className="grid grid-cols-4 justify-items-center">
                <div>
                    <h5 className="text-2xl mb-2">Conheça</h5>
                    <div className="flex flex-col">
                        {routeaboutus.map(({ href, label }: RouteFooterLinks, index) => (
                            <a
                                href={href}
                                key={index}
                                className="text-lg underline underline-offset-[3px] font-semibold decoration-2 px-4 pt-2 pb-3 rounded-full 
                                    hover:bg-black hover:text-secondary dark:hover:text-white dark:text-secondary">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="text-2xl mb-2">Veja também</h5>
                    <div className="flex flex-col">
                        {routeelsemore.map(({ href, label }: RouteFooterLinks, index) => (
                            <a
                                href={href}
                                key={index}
                                className="text-lg underline underline-offset-[3px] font-semibold decoration-2 px-4 pt-2 pb-3 rounded-full 
                                    hover:bg-black hover:text-secondary dark:hover:text-white dark:text-secondary">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="text-2xl mb-2">Saiba Mais</h5>
                    <div className="flex flex-col">
                        {routemore.map(({ href, label }: RouteFooterLinks, index) => (
                            <a
                                href={href}
                                key={index}
                                className="text-lg underline underline-offset-[3px] font-semibold decoration-2 px-4 pt-2 pb-3 rounded-full 
                                    hover:bg-black hover:text-secondary dark:hover:text-white dark:text-secondary">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="text-2xl mb-2">Entre em Contato</h5>
                    <a href="" className="text-lg underline underline-offset-[3px] font-semibold decoration-2 px-4 pt-2 pb-3 rounded-full 
                                    hover:bg-black hover:text-secondary dark:hover:text-white dark:text-secondary">Converse conosco</a>
                    <h5 className="flex flex-col text-2xl mb-2">Nos siga nas redes sociais</h5>
                    <div>
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    </div>
                </div>
            </div>
            <h1 className="text-center py-20">Logo</h1>
        </footer>
    )
}
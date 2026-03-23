import Link from "next/link";

export default function Home() {
    const aulas = [
        "1. Responsividade",
        "2. Tipografia",
        "3. Coares e fundo",
        "4. Espacamentos",
        "5. Tamanhos",
        "6. Bordas",
        "7. Componentes",
        "8. Colunas",
        "9. Elementos flutuantes",
        "10. Posicionamentos",
        "11. Flexbox",
        "12. Grid",
        "13. Container"
    ]


    return (
        <div className="text-3xl">
            {aulas.map((aula) => (
                <Aula key={aula} titulo={aula}/>
            ))}
        </div>
    );
}




// const cores = {
//     red: "bg-red-600",
//     orange: "bg-orange-500",
//     yellow: "bg-amber-400",
//     green: "bg-emerald-600",
//     blue: "bg-sky-600",
//     indigo: "bg-indigo-600",
//     violet: "bg-violet-600",
// };

const coresArr = [
    "bg-red-600",
    "bg-orange-500",
    "bg-amber-400",
    "bg-emerald-600",
    "bg-sky-600",
    "bg-indigo-600",
    "bg-violet-600",
];

interface AulasProps {
    titulo: string,
}

let i = 0;
function Aula(props: AulasProps) {
    if (i >= 7) {
        i = 0
    }
    const link = '/' +
        props.titulo
            .replace('. ', '_')
            .replaceAll(' ', '_')
            .toLowerCase();

    const background = coresArr[i]
    i++;

    return (
        <Link
            href={link}
            className={background}
        >
            <div className={background + '  px-4 py-2 text-white hover:brightness-110 transition'}>
                {props.titulo}
            </div>
        </Link>
    )
}
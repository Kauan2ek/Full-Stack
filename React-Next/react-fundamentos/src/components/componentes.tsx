import Link from "next/link";

export function Acomodacao() {
    return (
        <div>
            <span>IMAGEM ACOMODAÇÃO</span>
            <h1>titulo</h1>
            <p>Desc. Perto da vinícola Góes</p>
        </div>
    );
}

export function Menu() {
    return (
        <div className="bg-yellow-500">
            <MenuItem texto="Início" url="/inicio" />
            <MenuItem texto="Acomodações" url="/acomodacoes" />
            <MenuItem texto="Ajuda" url="/inicio" />
        </div>
    );
}

export function MenuItem(props: any) {
    return (
        <Link href={props.url} className="p-5">
            {props.texto}
        </Link>
    );
}

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
    className?: string;
}

export function Cabecalho(props: CabecalhoProps) {
    const classe = props.className ?? ""; // se ela estiver vazia, define como ""
    return (
        <div className={"p-3 " + classe}>
            <p className="font-semibold">{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </div>
    );
}

export function Rodape() {
    return (
        <div className="bg-blue-200">
            <p>Rodapé</p>
        </div>
    );
}

interface ConteudoProps {
    children: any;
    [key: string]: any;
}

export function Conteudo(props: ConteudoProps) {
    return (
        <div className="bg-gray-700">
            <h1>{props.titulo}</h1>
            <div>{props.children}</div>;
        </div>
    );
}

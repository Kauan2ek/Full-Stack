import {
    Acomodacao,
    Cabecalho,
    Conteudo,
    Menu,
    Rodape,
} from "@/components/componentes";

export default function PaginaSite() {
    return (
        <div>
            <Cabecalho
                titulo="AirBnb"
                subtitulo="Início"
                className="bg-blue-400 pt-5 pb-5"
            />

            <Menu />

            <Conteudo titulo="Página início">
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, deserunt porro reiciendis mollitia tenetur eum
                    eligendi. Mollitia odio accusamus minima quis provident
                    consequuntur dicta aliquid, eum debitis modi velit
                    reiciendis!
                </p>
            </Conteudo>

            <Rodape />
        </div>
    );
}

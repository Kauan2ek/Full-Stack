import {
    Acomodacao,
    Cabecalho,
    Conteudo,
    Menu,
    Rodape,
} from "@/components/componentes";

export default function Page() {
    return (
        <div>
            <Cabecalho titulo="AirBnb" subtitulo="Minhas acomodações" />

            <Menu />

            <Conteudo titulo="Página início">
                <h1>Página Acomodações</h1>
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

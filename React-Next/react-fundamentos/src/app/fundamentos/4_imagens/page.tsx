import Image from "next/image";

export default function Page() {
    const usuario = {
        nome: "Ana Maria",
        urlPerfil: "/img/kauan.jpg",
    };
    return (
        <div>
            <h1 className="titulo">Imagens</h1>
            {/* Forma padrão HTML de carregar imagem*/}
                <img
                src={usuario.urlPerfil}
                alt={"Nome: " + usuario.nome}
                style={{ width: 200, height: "200px" }}
            />
            {/* Forma otimizada pelo Next de carregar imagem */}
            <Image
                src={usuario.urlPerfil}
                alt={"Nome: " + usuario.nome}
                width={400}
                height={400}
            />
        </div>
    );
}

export default function Aplicacao() {
    return (
        <div className="bg-orange-800">
            <h1 className="text-orange-300">Cores</h1>
            <h1 className="text-orange-300/75">Cores</h1>
            <h1 className="text-[#50d716]">Cores</h1>

            <button className="bg-orange-600 hover:bg-orange-400 rounded-md">
                Clique em mim
            </button>
            <button className="bg-[#50d71e] rounded-md">Clique em mim</button>
            <h1 className="
            h-64 
            bg-[url(/img/cidade.jpg)]
            bg-cover
            bg-center
            ">
                Fundo Imagem
            </h1>
            <h1 className="
            h-64
            bg-blue-200
            bg-[url(/img/nuvem.webp)]
            bg-repeat
            ">
                Fundo Imagem
            </h1>

            <div></div>
        </div>
    );
}

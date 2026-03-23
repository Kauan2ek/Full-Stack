import { Acomodacao, Cabecalho, Menu } from "@/components/componentes";

export default function Page() {
    return (
        <div>
            <h1 className="bg-amber-800">Propriedades (APP)</h1>
            <Cabecalho titulo="São Roque, Brasil" preco="R$350,00" />
            <hr />
            <Acomodacao />
        </div>
    );
}

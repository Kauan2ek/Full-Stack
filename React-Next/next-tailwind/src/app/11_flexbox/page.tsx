export default function Aplicacao() {
    return (
        /**
         * flex flex-row-reverse flex-col flex-wrap gap-3 basis-64
         * order-2 grow
         * justify-between items-baseline
         */
        // <div className="border-4 p-3 h-screen flex flex-row gap-2 justify-evenly items-baseline">
        <div className="border-4 p-3 flex flex-row gap-2">

            <div className="caixa w-48 grow-0 shrink-0">Caixa 1</div>
            <div className="caixa w-72 grow shrink">Caixa 2</div>
            <div className="caixa w-96 shrink-0">Caixa 3</div>
            
        </div>
    );
}

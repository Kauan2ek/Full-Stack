export function Largura() {
    return (
        
        <div className="text-2xl p-3 bg-blue-950 flex sm:bg-red-300 md:bg-amber-300">
            {/**
             * w-96, w-[500px]
             * w-2/5
            */}
            <div className="text-4xl p-3 bg-red-950 m-2 w-1/2">Tamanho1</div>
            <div className="text-4xl p-3 bg-red-950 m-2 w-1/2">Tamanho2</div>
            <br />
            {/* <div className="bg-orange-400 m-2">
                Lorem ipsum dolor sit1
            </div>
            <div className="bg-orange-400 m-2">
                Lorem ipsum dolor sit2
            </div> */}
        </div>
    );
}

export function Largura2() {
    return (
        
        <div className="text-2xl p-3 bg-blue-950 sm:bg-red-300 md:bg-amber-300">
            <div className="text-4xl p-3 bg-red-950 m-2 size-60">
                Tamanho
            </div>
        </div>
    );
}

export default function Aplicacao() {
    return (
        
        <div className="text-2xl p-3 sm:bg-red-300 h-screen">
            <div className="text-4xl p-3 bg-purple-500 h-1/5">
                Item 1
            </div>

            <div className="text-4xl p-3 bg-red-950 h-4/5">
                Item 2
            </div>

            <div className="text-4xl p-3 bg-blue-400 h-svh">
                Item 3
            </div>
        </div>
    );
}



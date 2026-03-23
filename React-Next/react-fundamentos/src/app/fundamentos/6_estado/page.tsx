"use client";

import { useState } from "react";

export default function Page() {
    let [numero, setNumero] = useState(0);
    let [tempo, setTempo] = useState(10);
    

    function incrementar() {
        setNumero(numero++);
    }

    function decrementar() {
        setNumero(numero--);
    }

    function timer() {
        const intervalId = setInterval(() => {
            tempo--;
            setTempo(tempo);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
            console.log("Timer parado!");
        }, 10000);
    }

    return (
        <div>
            <h1 className="meuTexto">Estados</h1>
            <button
                onClick={incrementar}
                className="bg-blue-400 p-3 border-2 border-cyan-200 mb-3"
                style={{ width: 230, height: 60 }}
            >
                Incrementar
            </button>{" "}
            <br />
            <button
                onClick={decrementar}
                className="bg-red-400 p-3 border-2 border-cyan-200 mb-3"
                style={{ width: 230, height: 60 }}
            >
                Decrementar
            </button>
            <button
                onClick={timer}
                className="bg-green-400 p-3 border-2 border-cyan-200 mb-3"
                style={{ width: 230, height: 60 }}
            >
                Timer
            </button>
            <div>
            <span style={{width: 230, height:30}}>Número: {numero}</span>
            <span>Timer: {tempo}</span>
            </div>
        </div>
    );
}

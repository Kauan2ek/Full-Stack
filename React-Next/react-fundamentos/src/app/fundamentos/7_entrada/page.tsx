"use client";

import { useState } from "react";

export default function Entrada() {
    const [valor, setValor] = useState("");

    function alterarValor(e: any) {
        setValor(e.target.value);
        console.log(e);
    }

    return (
        <div className="p-4">
            <h1>Entrada de dados</h1>
            <input
                value={valor}
                type="text"
                className="campo-texto"
                onChange={alterarValor}
            />

            <h4>Valor digitado: {valor}</h4>
        </div>
    );
}

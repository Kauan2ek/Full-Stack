"use client";

import { useState } from "react";

export default function Calculator() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState("Calcule IMC");

    function alterarPeso(e: any) {
        setPeso(e.target.value);
    }

    function alterarAltura(e: any) {
        setAltura(e.target.value);
    }

    function calcularIMC() {
        if (!peso || !altura) {
            setResultado("Digite valores válidos");
            return;
        }

        let imc = peso / altura ** 2;
        if (imc <= 18) {
            setResultado("Abaixo do peso");
        } else if (imc < 25 && imc > 0) {
            setResultado("Peso Normal");
        } else if (imc >= 25) {
            setResultado("Sobrepeso");
        } else {
            setResultado("digite os valores corretamente...");
        }

        document.getElementById('id_altura')?.blur()
    }

    return (
        <div className="p-4 pt-3">
            <h1>Cálculo IMC</h1>
            <hr />

            <p>Digite seu peso</p>
            <input
                placeholder="ex: 90"
                id={"id_peso"}
                type="number"
                onChange={alterarPeso}
                className="campo-texto mb-2"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        calcularIMC();
                        document.getElementById("id_altura")?.focus();
                    }
                }}
            />
            <span className="pl-2">KG</span>

            <p>Digite sua altura</p>
            <input
                placeholder="ex: 1.75"
                id={"id_altura"}
                type="number"
                onChange={alterarAltura}
                className="campo-texto"
                onKeyDown={(e) => e.key === "Enter" && calcularIMC()}
            />
            <span className="pl-2">Metros</span>
            <br />
            <button className="botao" onClick={calcularIMC}>
                Calcular
            </button>

            <p>Resultado: {resultado}</p>
            {/* <p>{peso} KG</p>
            <p>{altura} m</p> */}
        </div>
    );
}

// interface MoldeCampo {
//     campo:string
// }
// export function CampoTexto(props: MoldeCampo) {
//     const [setPeso, setValor] = useState(0)
//     // const [altura, setAltura] = useState(0)

//     function alterarValor (e: any) {
//         setValor(e.targe.value)
//     }

//     return (
//         <input
//         value={valor}
//         id={"id_" + props.campo}
//         type="number"
//         onChange={alterarValor}
//         className="campo-texto"
//         />
//     )
// }

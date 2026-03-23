"use client";
import { useState } from "react";

interface AbaProps {
    atualizar(nome: string): void;
}

export default function AbaIndireta(props: AbaProps) {
    const [aba, setAba] = useState("");

    return (
        <div className="p-3">
            <button onClick={() => props.atualizar("Conversas")}>
                Conversas
            </button>
            <button onClick={() => props.atualizar("Atualizações")}>
                Atualizações
            </button>
            <button onClick={() => props.atualizar("Chamadas")}>
                Chamadas
            </button>
        </div>
    );
}

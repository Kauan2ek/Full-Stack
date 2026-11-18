#!/bin/sh

echo "Executando o entrypoint do serviço Alpine"

for i in 1 2 3 4 5; do
    echo "Contagem: $i"
done

echo "Processos realizados, serviço em execução"

echo "Iniciando o processo de 5 segundos..."

sleep 5s

echo "5 segundos se passaram, processo finalizado"
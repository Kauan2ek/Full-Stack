export default function Page() {
    const regra = <h1>Maior de idade</h1>;
    const nome = "Kauan Talles";
    const lista = [<h1>Kauan</h1>, <h1>Ana</h1>, <h1>Marcos</h1>];

    let salario = 1000;
    let bonus = 200;

    const usuario = {
        nome: "Kauan",
        idade: "18",
    };

    function MeuBotao(desc: string) {
        return <button>{desc}</button>;
    }

    return (
        <div className={nome}>
            {regra}
            Olá {nome}!{lista[1]}
            {10 + 3} <br />O salário é: R${salario + bonus} <br />O usuário tem{" "}
            {usuario.idade} anos
            <br />
            <br />
            {MeuBotao("Clique aqui")}
        </div>
    );
}

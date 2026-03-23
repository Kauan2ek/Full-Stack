export default function Page() {
    type Usuario = {
        id: number;
        nome: string;
        email: string;
    };
    const usuarios: Usuario[] = [
        { id: 1, nome: "Kauan", email: "k@gmail.com" },
        { id: 2, nome: "Ana", email: "a@gmail.com" },
        { id: 3, nome: "Carlos", email: "c@gmail.com" },
        { id: 4, nome: "Maria", email: "m@gmail.com" },
        { id: 5, nome: "Pedro", email: "p@gmail.com" },
    ];

    const lista = usuarios.map((usuario) => (
        <li key={usuario.id}>
            {usuario.nome}, {usuario.email}
        </li>
    ));

    return (
        <div>
            <h1 className="">Título Listas</h1>
            <ul>{lista}</ul>
        </div>
    );
}

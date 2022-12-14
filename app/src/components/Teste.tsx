import { MouseEventHandler, useState } from "react";

export default function () {
  const [name, setName] = useState("___");
  const [email, setEmail] = useState("___");

  const buscarDados: MouseEventHandler<HTMLButtonElement> = async (ev) => {
    ev.preventDefault();
    const request = await fetch(`/api/logged/${localStorage.getItem("token")}`);

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json();
      setName(user.name);
      setEmail(user.email);
      return;
    }

    alert("Deu ruim!");
  };

  return (
    <div className="container">
      <h1>teste</h1>
      <h2>Buscar dados do Usuário Logado</h2>
      <div>
        <label>Nome: </label>
        {name}
      </div>
      <div>
        <label>Email: </label>
        {email}
      </div>
      <button onClick={buscarDados}>buscar</button>
      <button>sair</button>
    </div>
  );
}

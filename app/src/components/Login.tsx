import { Dispatch, FormEventHandler, SetStateAction } from "react";
import Logo from "./Logo";

export default function ({
  setRoute,
}: {
  setRoute: Dispatch<SetStateAction<string>>;
}) {
  const enviarDados: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const { email, password } = ev.currentTarget;

    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const responseData = await request.json();

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.token);
      alert("PARABAEINZ!");
      setRoute("teste");
      return;
    }

    if (responseData.error) {
      alert(responseData.error);
      return;
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!");
  };

  return (
    <div className="container">
      <Logo />
      <form onSubmit={enviarDados}>
        <h1>Login</h1>
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Senha" />
        <button>Entrar</button>
        <span>
          Ainda não possui uma conta?
          <button className="text-btn" onClick={() => setRoute("cadastro")}>
            Cadastrar-se
          </button>
        </span>
      </form>
    </div>
  );
}

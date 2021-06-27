import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";
import { Button } from "../../components/Button";

import "../../styles/components/auth.scss";
import logoImg from "../../images/logo.svg";
import illustration from "../../images/illustration.svg";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração Inicial" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entra em uma sala existente? <Link to="/">Clique Aqui!</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

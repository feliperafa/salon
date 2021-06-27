import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/Button";

import "../../styles/components/auth.scss";
import logoImg from "../../images/logo.svg";
import illustration from "../../images/illustration.svg";
import googleIconImg from "../../images/google-icon.svg";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/room/new");
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo Google" />
            Crie sua sala com Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entra na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

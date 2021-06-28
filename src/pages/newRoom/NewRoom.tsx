import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";
import { Button } from "../../components/Button";
import { database } from "../../service/firebase";

import "../../styles/components/auth.scss";
import logoImg from "../../images/logo.svg";
import illustration from "../../images/illustration.svg";

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewromm] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/room/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewromm(event.target.value)}
              value={newRoom}
            />
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

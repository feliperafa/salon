import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";
import { Button } from "../../components/Button";

import "../../styles/components/auth.scss";
import logoImg from "../../images/logo.svg";
import illustration from "../../images/illustration.svg";
import googleIconImg from "../../images/google-icon.svg";
import { database } from "../../service/firebase";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCoder, setRoomCoder] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/room/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCoder.trim() === "") {
      return;
    }

    const roomsRef = await database.ref(`rooms/${roomCoder}`).get();

    if (!roomsRef.exists()) {
      alert("Room does not exists");
      return;
    }

    if (!roomsRef.val().endAt) {
      alert("Room already closed.");
      return;
    }

    history.push(`/room/${roomCoder}`);
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
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCoder(event.target.value)}
              value={roomCoder}
            />
            <Button type="submit">Entra na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

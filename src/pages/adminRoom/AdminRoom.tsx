import { useParams, useHistory } from "react-router-dom";
import { RoomParams } from "../../types";
import { Question } from "../../components/Question";
// import { useAuth } from "../../hooks/userAuth";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { useRoom } from "../../hooks/useRoom";

import "../../styles/components/room.scss";
import logoImg from "../../images/logo.svg";
import deletImg from "../../images/delete.svg";
import checkImg from "../../images/check.svg";
import answerImg from "../../images/answer.svg";

import { database } from "../../service/firebase";

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();
  const { question, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir está pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswer(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighLightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endAt: new Date(),
    });

    history.push("/");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {question.length > 0 && <span>{question.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {question.map((questions) => {
            return (
              <Question
                key={questions.id}
                content={questions.content}
                author={questions.author}
                isHighlighted={questions.isHighlighted}
                isAnswered={questions.isAnswered}
              >
                {!questions.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswer(questions.id)}
                    >
                      <img src={checkImg} alt="pergunta respondida" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighLightQuestion(questions.id)}
                    >
                      <img src={answerImg} alt="Dar destaque a pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(questions.id)}
                >
                  <img src={deletImg} alt="remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}

import { RoomCodeProps } from "../types"
import copyImg from "../images/copy.svg"
import "../styles/components/room-code.scss"
export function RoomCode(props:RoomCodeProps){

    function copyRoomCodeToClipBoard(){
        navigator.clipboard.writeText(props.code)
    }

    return(
      <button className="room-code" onClick={copyRoomCodeToClipBoard}>
          <div>
              <img src={copyImg} alt="copy room code" />
          </div>
          <span>sala #{props.code}</span>
      </button>
    )
}
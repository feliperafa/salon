import {ReactNode} from 'react'

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface AuthContextType {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export interface AuthContexProviderProps {
  children: ReactNode;
}

export interface RoomCodeProps{
  code:string;
}

export interface RoomParams{
  id:string;
}
import { ReactNode } from 'react'

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

export interface RoomCodeProps {
  code: string;
}

export interface RoomParams {
  id: string;
}

export interface QuestionType {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
}

export interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?:boolean;
  isHighlighted?:boolean;

}
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

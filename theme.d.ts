// types/navigation.d.ts
import '@react-navigation/native';

declare module '@react-navigation/native' {
  export interface Theme {
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      secondary: string;
    };
  }
}

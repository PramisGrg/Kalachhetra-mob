// declarations.d.ts

declare module '*.jpg' {
  const content: number;
  export default content;
}

declare module '*.png' {
  const content: number;
  export default content;
}
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.jpeg' {
  const content: number;
  export default content;
}

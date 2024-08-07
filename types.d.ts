declare module '*.svg' {
  import * as React from 'react';
  import type { SVGProps } from 'react';

  const ReactComponent: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '@hookform/resolvers/yup';

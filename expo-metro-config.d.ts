declare module 'expo/metro-config' {
    import { ConfigT } from 'metro-config';
  
    export function getDefaultConfig(projectRoot: string): ConfigT;
  }
  
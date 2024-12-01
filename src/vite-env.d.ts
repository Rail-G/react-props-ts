/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */
interface MyData {
  [key: string]: any;
}

type From =  {
  name: string
}

interface Message {
  id: string,
  from: From,
  type: string,
  time: string,
  text?: string
}
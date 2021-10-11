export default function Error(e: number | string | object | Array<number | string | object> | Function) {
  return console.error(e);
}
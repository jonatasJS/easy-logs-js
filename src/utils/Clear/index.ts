export default function Clear(txt: number | string | object | Array<number | string | object> | Function | null) {
  if (txt == null) return console.clear();
  console.clear();
  return console.log(txt);
}
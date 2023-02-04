export function generateUniqId() {
  return Date.now() + Number(String(Math.random()).substring(2));
}

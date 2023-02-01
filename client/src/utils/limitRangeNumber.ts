export default function limitRangeNumber(
  value: number,
  min = -Infinity,
  max = Infinity
) {
  return Math.max(min, Math.min(max, value));
}

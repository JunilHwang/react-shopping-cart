export default function limitRangeNumber(
  value: number,
  min = -Infinity,
  max = Infinity
) {
  return Math.min(max, Math.max(min, value));
}

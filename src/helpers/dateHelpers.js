export const dateSubtract = (date, interval) => {
  const d1 = new Date(date)
  const dateRes = new Date(d1.setDate(d1.getDate() - interval))
  return dateRes
}

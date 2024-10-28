export const isToday = (epoc: number) => {
  const today = new Date()
  const date = new Date(epoc)
  return date.getDate() === today.getDate()
}

export const isYesterday = (epoc: number) => {
  const today = new Date()
  const date = new Date(epoc)
  return date.getDate() === today.getDate() - 1
}

export function getMonthName(month: number): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return monthNames[month]
}

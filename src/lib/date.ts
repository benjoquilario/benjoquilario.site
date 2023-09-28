// dayjs converts a date to a dayjs object

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export const relativeDate = (
  date: string | number | Date | dayjs.Dayjs | null | undefined
): String => {
  return dayjs().to(date)
}

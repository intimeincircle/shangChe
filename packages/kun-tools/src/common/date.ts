import dayjs from "dayjs";


export function formatTime(date: number) {
    return dayjs(date).format("YYYY-MM-DD HH:mm")
}
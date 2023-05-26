import dayjs from "dayjs";
import weekday from "dayjs/plugin/isoWeek";

const nextInstanceOfDay = (dayNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
    dayjs.extend(weekday);
    dayjs.extend(weekday);
    const today = dayjs().isoWeekday(dayNumber);
    if (today.isoWeekday() <= dayNumber) {
        return dayjs().day(dayNumber);
    }
    return dayjs().add(1, "week").day(dayNumber);
};

export default nextInstanceOfDay;

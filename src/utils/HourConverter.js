const HourConverter = (fullDate) => {
    const dateTime = fullDate;
    const [date, time] = dateTime.split(" ");
    const hours = time.split(":").slice(0, 2).join(":");
    return hours;
};

export default HourConverter;
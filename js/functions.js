const toMinutes = function (timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes; // Возвращаем общее количество минут
};

const isTimeValid = function (
  startTime,
  finalTime,
  meetingStart,
  meetingLength
) {
  const workStart = toMinutes(startTime);
  const workEnd = toMinutes(finalTime);
  const meetingStartMinutes = toMinutes(meetingStart);
  const meetingEnd = meetingStartMinutes + meetingLength;

  // Проверяем, находится ли встреча в пределах рабочего времени
  return meetingStartMinutes >= workStart && meetingEnd <= workEnd;
};

// Примеры вызовов функции
console.log(isTimeValid("08:00", "17:30", "14:00", 90)); // true
console.log(isTimeValid("08:00", "10:00", "08:00", 120)); // false
console.log(isTimeValid("08:00", "14:30", "14:00", 90)); // true
console.log(isTimeValid("14:00", "17:30", "08:00", 90)); // false
console.log(isTimeValid("08:00", "17:30", "08:00", 900)); // false

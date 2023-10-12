const calculateDays = (date: string) => {
  const monthsWithThirtyDays = [4, 6, 9, 11];  
  const givenDay = Number(date.slice(0, 2));
  const givenMonth = Number(date.slice(3, 5));
  const givenYear = Number(date.slice(8, 10))
  const isFebruary = givenMonth === 2;
  const isLeapYear = givenYear % 4 === 0 && givenYear !== 0; 
  const rawDate = new Date();
  const day = rawDate.getUTCDate();
  if (givenDay > day) {
    const daysUntilFirst = 31 - givenDay;
    if (monthsWithThirtyDays.includes(givenMonth)) {
      return `${(daysUntilFirst - 1) + day} dias atrás.`
    } else if (isLeapYear) {
      return `${(29 - givenDay) + day} dias atrás`
    } else if (isFebruary) {
      return `${(28 - givenDay) + day} dias atrás`
    }
    return `${daysUntilFirst + day} dias atrás.`    
  }
  return `${day - givenDay} dias atrás.`
}

export default calculateDays;
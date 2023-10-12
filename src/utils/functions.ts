const calculateDays = (date: string) => {
  const monthsWithThirtyDays = [4, 6, 9, 11];
  const givenDay = Number(date.slice(0, 2));
  const givenMonth = Number(date.slice(3, 5));    
  const rawDate = new Date();
  const day = rawDate.getUTCDate();
  if (givenDay > day) {
    const daysUntilFirst = 31 - givenDay;
    if (monthsWithThirtyDays.includes(givenMonth)) {
      return `${(daysUntilFirst - 1) + day} dias atrás.`
    }
    return `${daysUntilFirst + day} dias atrás.`    
  }
  return `${day - givenDay} dias atrás.`
}

export default calculateDays;
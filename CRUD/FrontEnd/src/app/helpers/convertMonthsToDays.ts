export const convertMonthsToDays = (months: number): number => {
  switch (months) {
    case 1:
      return 30;
    case 2:
      return 60;
    case 3:
      return 90;
    case 4:
      return 120;
    case 5:
      return 150;
    case 6:
      return 180;
    case 7:
      return 210;
    case 8:
      return 240;
    case 9:
      return 270;
    case 10:
      return 300;
    case 11:
      return 330;
    case 12:
      return 360;
    default:
      return 0;
  }
}

export const convertDaysToMonths = (days: number): string => {
  switch(days){
    case 30:
      return "1 mes"
    case 60:
      return "2 meses"
    case 90:
      return "3 meses"
    case 120:
      return "4 meses"
    case 150:
      return "5 meses"
    case 180:
      return "6 meses"
    case 210:
      return "7 meses"
    case 240:
      return "8 meses"
    case 270:
      return "9 meses"
    case 300:
      return "10 meses"
    case 330:
      return "11 meses"
    case 360:
      return "12 meses"
    default:
      return "0 meses"
  }
}

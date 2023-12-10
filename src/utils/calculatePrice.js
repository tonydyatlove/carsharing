import {
  differenceInMinutes,
  differenceInDays,
  differenceInWeeks,
} from 'date-fns';

export const calculatePrice = (
  dateFrom,
  dateTo,
  rate,
  isFullTank,
  hasBabySeat,
  isRightHand
) => {
  let price;

  if (rate.rateTypeId.name.includes('Поминутно')) {
    const minutes = differenceInMinutes(dateTo, dateFrom);
    price = rate.price * minutes;
  }
  if (rate.rateTypeId.name.includes('Недельный')) {
    const weeks = differenceInWeeks(dateTo, dateFrom);
    const daysLeft = differenceInDays(dateTo, dateFrom) % 7;
    price = daysLeft ? rate.price * (weeks + 1) : rate.price * weeks;
  }
  if (rate.rateTypeId.name.includes('Суточный')) {
    const days = differenceInDays(dateTo, dateFrom);
    const minutesLeft = differenceInMinutes(dateTo, dateFrom) % 1440;
    price = minutesLeft ? rate.price * (days + 1) : rate.price * days;
  }

  if (isFullTank) price += 500;
  if (hasBabySeat) price += 200;
  if (isRightHand) price += 1600;

  return price;
};

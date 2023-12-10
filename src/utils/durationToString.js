import {
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
} from 'date-fns';

export const durationToString = (dateFrom, dateTo) => {
  const days = differenceInDays(dateTo, dateFrom);
  const hours = differenceInHours(dateTo, dateFrom) % 24;
  const minutes = differenceInMinutes(dateTo, dateFrom) % 60;

  const durationString = `${days ? days + 'д' : ''}${
    hours ? ' ' + hours + 'ч' : ''
  }${minutes ? ' ' + minutes + 'мин' : ''}`;

  return durationString;
};

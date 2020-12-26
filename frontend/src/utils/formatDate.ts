import { formatDistanceToNow, isToday } from 'date-fns';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

export const formatToFullLabel = (date: string | Date): string => {
  return format(new Date(date), 'p · PP', { locale: ru });
};

export const formatToShortLabel = (date: string | Date): string => {
  date = new Date(date);
  if (isToday(date)) {
    return formatDistanceToNow(date, { locale: ru });
  }
  return format(date, 'PP', { locale: ru }).split('. ')[0] + '.';
};

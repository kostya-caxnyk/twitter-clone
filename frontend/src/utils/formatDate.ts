import { formatDistanceToNow } from 'date-fns';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import isAfter from 'date-fns/isAfter';

export const formatToFullLabel = (date: string | Date): string => {
  return format(new Date(date), 'p · PP', { locale: ru });
};

export const formatToShortLabel = (date: string | Date): string => {
  date = new Date(date);
  const oneDayBefore = new Date(Date.now() - 43200000);
  if (isAfter(date, oneDayBefore)) {
    return formatDistanceToNow(date, { locale: ru });
  }
  return format(date, 'd MMM', { locale: ru });
};

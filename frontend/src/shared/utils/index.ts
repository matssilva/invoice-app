import { format, parse } from 'date-fns';

export const formatDate = (dateString?: string): string => {
  const date = dateString
    ? parse(dateString, 'yyyy-MM-d', new Date())
    : new Date();
  return format(date, 'dd MMM yyyy');
};

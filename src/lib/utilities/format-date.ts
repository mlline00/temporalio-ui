import { format } from 'date-fns';

export function formatDate(date: Date | string | null): string {
  if (!date) return '';
  return format(new Date(date), 'MMMM dd, yyyy — h:mm a');
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };
  
  return date.toLocaleDateString('es-ES', options);
};

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = formatDate(startDate);
  
  if (!endDate) {
    return `${start} - Presente`;
  }
  
  const end = formatDate(endDate);
  return `${start} - ${end}`;
};

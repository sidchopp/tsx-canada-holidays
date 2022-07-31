interface Holidays {
  date: string;
  federal: number;
  id: number;
  nameEn: string;
  nameFr: string;
  observedDate: string;
}

interface Province {
  holidays: Holidays[];
  id: string;
  nameEn: string;
  nameFr: string;
  nextHoliday: {
    date: string;
    federal: number;
    id: number;
    nameEn: string;
    nameFr: string;
    observedDate: string;
  };
  sourceEn: string;
  sourceLink: string;
}
export const array: Province[] = [];

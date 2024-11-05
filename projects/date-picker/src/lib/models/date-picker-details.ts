import { Moment } from 'moment/moment';

export interface CalendarDay {
  isToday: boolean;
  weekDay: number;
  date: Moment;
  day: number;
}

export enum CalendarMode {
  NORMAL = 'normal',
  DATEPICKER = 'datepicker',
  DATE_RANGE_PICKER = 'date-range-picker',
}

export enum CalendarType {
  GREGORIAN = 'gregorian',
}

export interface DateRange {
  startDate: Moment;
  endDate: Moment;
}

export interface DatepickerConfig {
  rtl: boolean;
  weekends: number[];
  min?: Moment;
  max?: Moment;
  isPastDisabled?: Moment;
  showMonthOutOfRangeDays?: boolean;
}

export interface DatepickerOptions {
  translate: {
    goToToday: string;
    nextMonth: string;
    previousMonth: string;
  };
}

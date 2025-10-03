import React, { useState } from 'react';
import { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import moment, { Moment } from 'moment';
import { FieldProps, FormControl, useFormField } from '@core/utils/form';

interface FormDateInputBaseProps<C> {
  clearable?: boolean;
  tooltip?: string;
  minDate?: Moment;
  maxDate?: Moment;
  options?: Partial<DatePickerProps>;
  disabled?: boolean;
  onChange?(date: C | null): void;
}

export interface FormDateInputNumberProps<C extends any> extends FormDateInputBaseProps<C>, FieldProps<FormControl<C> | FormControl<C | null>> {
  type?: 'number';
}

export interface FormDateInputStringProps<C extends any> extends FormDateInputBaseProps<C>, FieldProps<FormControl<C> | FormControl<C | null>> {
  type?: 'string';
}

export type FormOpenDateInputProps<C extends string | number> = FormDateInputNumberProps<C> | FormDateInputStringProps<C>;

export function FormOpenDateInput<C extends string | number>(props: FormOpenDateInputProps<C>) {
  const { tooltip } = props;
  const { formControl } = useFormField(props);
  const [selectedDays, setSelectedDays] = useState(Array<string>());
  if (selectedDays.length === 0 && formControl.value) {
    setSelectedDays((formControl.value as string).split(','));
  }

  const selectedDaysData = (date: Moment) => {
    const day = date.format('D');
    setSelectedDays(prevDays => {
      const updatedDays = prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day];
      formControl.setValue(updatedDays.join(',') as unknown as C);
      return updatedDays;
    });
  };

  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const calendarGrid = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => ''));

  let day = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < dayjs().startOf('month').day()) {
        calendarGrid[i][j] = '';
      } else if (day > monthDays.length) {
        break;
      } else {
        calendarGrid[i][j] = day.toString();
        day++;
      }
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <table style={{ width: '40%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarGrid.map((week, index) => (
              <tr key={index}>
                {week.map((day, index) => (
                  <td
                    key={index}
                    style={{ textAlign: 'center', padding: '8px', cursor: 'pointer' }}
                    onClick={() => selectedDaysData(day === '' ? moment.invalid() : moment(`${day}`, 'D'))}
                  >
                    {day}
                    <br />
                    {day && selectedDays.includes(day) && <span style={{ color: 'red' }}>X</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

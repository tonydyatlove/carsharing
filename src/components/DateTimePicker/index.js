import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

import './style.scss';

const theme = createTheme({
  overrides: {
    MuiInput: {
      root: {
        padding: 0,
      },
      input: {
        width: '224px',
        padding: '3px',
        paddingLeft: '8px',
        fontSize: '14px',
        fontWeight: '300',
        color: '#121212',
        '&::placeholder': {
          color: '#999999',
          opacity: 1,
        },
      },
      underline: {
        '&:hover:not(.Mui-disabled):before': {
          color: 'white',
          borderBottom: '1px solid #121212',
        },
        '&:after': {
          borderBottom: '1px solid #121212',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0EC261',
    },
    secondary: {
      main: '#121212',
    },
  },
});

export default function CustomDateTimePicker({
  dateValue,
  setDateFunction,
  ...restProps
}) {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <div className='date-time-picker'>
          <DateTimePicker
            placeholder='Введите дату и время'
            value={dateValue || null}
            onChange={(value) => setDateFunction(value)}
            ampm={false}
            autoOk={true}
            strictCompareDates={true}
            disablePast
            variant='inline'
            format={'d.MM.yyyy p'}
            color='secondary'
            {...restProps}
          />
          <span
            className='date-time-picker__icon-close'
            onClick={() => setDateFunction(null)}
          ></span>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

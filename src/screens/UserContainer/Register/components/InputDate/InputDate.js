import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const InputDate = ({ setDate, date }) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Fecha de Nacimiento"
        format="dd/MM/yyyy"
        value={date}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => setDate(date)}
      />
    </MuiPickersUtilsProvider>
  );
}
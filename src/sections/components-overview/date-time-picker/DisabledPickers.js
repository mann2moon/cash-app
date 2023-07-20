import { useState } from 'react';

// material-ui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, DateRangePicker, DateTimePicker, LocalizationProvider, TimePicker } from '@mui/lab';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - DISABLED ||============================== //

export default function DisabledPickers() {
  const [value, setValue] = useState(null);
  const [valueRange, setValueRange] = useState([null, null]);

  const disabledDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns}>
  <Stack spacing={3}>
    <Typography variant="h6">Date Picker</Typography>
    <DatePicker
      label="disabled"
      disabled
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    <DatePicker
      label="read-only"
      readOnly
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    <Typography variant="h6">Date Range Picker</Typography>
    <DateRangePicker
      disabled
      startText="disabled start"
      endText="disabled end"
      value={valueRange}
      onChange={(newValue) => {
        setValueRange(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </>
      )}
    />
    <DateRangePicker
      readOnly
      startText="read-only start"
      endText="read-only end"
      value={valueRange}
      onChange={(newValue) => {
        setValueRange(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </>
      )}
    />
    <Typography variant="h6">Date Time Picker</Typography>
    <DateTimePicker
      label="disabled"
      disabled
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    <DateTimePicker
      label="read-only"
      readOnly
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    <Typography variant="h6">Time Picker</Typography>
    <TimePicker
      label="disabled"
      disabled
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    <TimePicker
      label="read-only"
      readOnly
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </Stack>
</LocalizationProvider>`;

  return (
    <MainCard title="Disabled Pickers" codeString={disabledDatepickerCodeString}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <Typography variant="h6">Date Picker</Typography>
          <DatePicker
            label="disabled"
            disabled
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="read-only"
            readOnly
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant="h6">Date Range Picker</Typography>
          <DateRangePicker
            disabled
            startText="disabled start"
            endText="disabled end"
            value={valueRange}
            onChange={(newValue) => {
              setValueRange(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
          <DateRangePicker
            readOnly
            startText="read-only start"
            endText="read-only end"
            value={valueRange}
            onChange={(newValue) => {
              setValueRange(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
          <Typography variant="h6">Date Time Picker</Typography>
          <DateTimePicker
            label="disabled"
            disabled
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DateTimePicker
            label="read-only"
            readOnly
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant="h6">Time Picker</Typography>
          <TimePicker
            label="disabled"
            disabled
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="read-only"
            readOnly
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </MainCard>
  );
}

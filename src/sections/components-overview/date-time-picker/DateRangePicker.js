import { useState } from 'react';

// material-ui
import { Box, Stack, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DesktopDateRangePicker, LocalizationProvider, MobileDateRangePicker } from '@mui/lab';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - DATE RANGE ||============================== //

export default function DateRangePicker() {
  const [value, setValue] = useState([null, null]);

  const rangeDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns}>
  <Stack spacing={3}>
    <MobileDateRangePicker
      startText="Mobile Start"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> To </Box>
          <TextField {...endProps} />
        </>
      )}
    />
    <DesktopDateRangePicker
      startText="Desktop Start"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(startProps, endProps) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> To </Box>
          <TextField {...endProps} />
        </>
      )}
    />
  </Stack>
</LocalizationProvider>`;

  return (
    <MainCard title="Date Range Picker" codeString={rangeDatepickerCodeString}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDateRangePicker
            startText="Mobile Start"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> To </Box>
                <TextField {...endProps} />
              </>
            )}
          />
          <DesktopDateRangePicker
            startText="Desktop Start"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> To </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </Stack>
      </LocalizationProvider>
    </MainCard>
  );
}

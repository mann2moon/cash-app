// material-ui
import { Typography, Stack, CardMedia } from '@mui/material';

// assets
import UploadCover from 'assets/images/upload/upload.svg';

// ==============================|| UPLOAD - PLACEHOLDER ||============================== //

export default function PlaceholderContent() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
    >
      <CardMedia component="img" image={UploadCover} sx={{ width: 150 }} />
      <Stack sx={{ p: 3 }} spacing={1}>
        <Typography variant="h5">Drag & Drop or Select file</Typography>

        <Typography color="secondary">
          Drop files here or click&nbsp;
          <Typography component="span" color="primary" sx={{ textDecoration: 'underline' }}>
            browse
          </Typography>
          &nbsp;thorough your machine
        </Typography>
      </Stack>
    </Stack>
  );
}

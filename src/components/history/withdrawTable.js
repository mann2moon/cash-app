import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Grid, Select, MenuItem, Fab, IconButton, Stack, Typography } from '@mui/material';
import useConfig from 'hooks/useConfig';
import AnimateButton from 'components/@extended/AnimateButton';
import { ContentCopy } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const columns = [
  { id: 'coin', label: 'Coin', minWidth: 100 },
  { id: 'time', label: 'Time', minWidth: 170 },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 100,
    format: (value) => value.toFixed(2)
  },
  {
    id: 'withdrawAddress',
    label: 'Withdrawal Address/Account',
    minWidth: 250,
    enableClickToCopy: true,
    muiTableBodyCellCopyButtonProps: {
      fullWidth: true,
      startIcon: <ContentCopy />,
      sx: { justifyContent: 'flex-start' }
    }
  },
  {
    id: 'blockchainRecord',
    label: 'Blockchain Record',
    minWidth: 170
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 130
  },
  {
    id: 'remarks',
    label: 'Remarks',
    minWidth: 100
  }
];

export const WithdrawTable = ({ rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [months, setMonths] = React.useState('all');
  const [statuses, setStatuses] = React.useState('all');
  const [coins, setCoins] = React.useState('all');
  const { mode } = useConfig();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleMonthsChange = (e) => {
    setMonths(e.target.value);
  };

  const handleStatusesChange = (e) => {
    setStatuses(e.target.value);
  };

  const handleCoinChange = (e) => {
    setCoins(e.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={12} lg={3} md={3}>
          <Select
            value={months}
            onChange={handleMonthsChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ width: '100%', background: mode === 'dark' ? '#515151' : '#FFF' }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="1">1 Months</MenuItem>
            <MenuItem value="3">3 Months</MenuItem>
            <MenuItem value="year">1 Year</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} md={3}>
          <Select
            value={statuses}
            onChange={handleStatusesChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ width: '100%', background: mode === 'dark' ? '#515151' : '#FFF' }}
          >
            <MenuItem value="all">All Statuses</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="progress">In Progress</MenuItem>
            <MenuItem value="failed">Failed</MenuItem>
            <MenuItem value="confirming">Confirming</MenuItem>
            <MenuItem value="frozen">Assets Frozen</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} md={3}>
          <Select
            value={coins}
            onChange={handleCoinChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ width: '100%', background: mode === 'dark' ? '#515151' : '#FFF' }}
          >
            <MenuItem value="all">All Coins</MenuItem>
            <MenuItem value="ltc">LTC</MenuItem>
            <MenuItem value="bit">BIT</MenuItem>
            <MenuItem value="bnb">BNB</MenuItem>
            <MenuItem value="pol">POL</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} lg={3} md={3}>
          <AnimateButton>
            <Fab variant="extended" color="secondary" sx={{ width: '100%' }}>
              CSV download
            </Fab>
          </AnimateButton>
        </Grid>
      </Grid>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: '500px' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {column.id === 'withdrawAddress' && column.enableClickToCopy ? (
                            <CopyToClipboard text={value}>
                              <Stack direction="row" sx={{ marginY: 'auto' }}>
                                <Typography sx={{ marginY: 'auto' }}>
                                  {column.format && typeof value === 'number' ? column.format(value) : value}
                                </Typography>
                                <IconButton>
                                  <ContentCopy sx={{ fontSize: '20px' }} />
                                </IconButton>
                              </Stack>
                            </CopyToClipboard>
                          ) : column.format && typeof value === 'number' ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

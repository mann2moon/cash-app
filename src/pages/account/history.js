import { useState } from 'react';
import { Box, Tab, Container } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DepositHistoryTable } from 'components/history/depositTable';
import { WithdrawTable } from 'components/history/withdrawTable';
import withdrawHistoryData from 'data/withdrawHistory';
import depositHistoryData from 'data/depositHistory';

const History = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Deposit History" value="1" />
                <Tab label="Withdraw History" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DepositHistoryTable rows={depositHistoryData} />
            </TabPanel>
            <TabPanel value="2">
              <WithdrawTable rows={withdrawHistoryData} />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default History;

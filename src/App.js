import "./App.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function App() {
  return (
    <div className="App">
      <Box className="App-header">
        <DateComponent />
        <TopRateComponent />
        <RateTable />
      </Box>
    </div>
  );
}

function DateComponent() {
  return (
    <>
      <Box className="date-header">
        <Typography className="font-color-default font-700 font-30">
          2023-09-17 - 2023-09-24
        </Typography>
        <Typography className="font-color-default font-700 font-30">
          Ends In
        </Typography>
      </Box>
      <Box className="date-grid">
        <Box className="date-grid-component">
          <Typography className="font-40 font-700">06</Typography>
          <Typography className="font-20 font-900 font-color-date">
            Days
          </Typography>
        </Box>
        <Box className="date-grid-component">
          <Typography className="font-40 font-700">16</Typography>
          <Typography className="font-20 font-900 font-color-date">
            Hours
          </Typography>
        </Box>
        <Box className="date-grid-component">
          <Typography className="font-40 font-700">41</Typography>
          <Typography className="font-20 font-900 font-color-date">
            Minutes
          </Typography>
        </Box>
        <Box className="date-grid-component">
          <Typography className="font-40 font-700">28</Typography>
          <Typography className="font-20 font-900 font-color-date">
            Seconds
          </Typography>
        </Box>
      </Box>
    </>
  );
}

function TopRateComponent() {
  return (
    <Box className="topRate">
      <Box className="topRate-1st">
        <Box className="topRate-round1">1st</Box>
        <Box className="topRate-detail">
          <Typography sx={{ color: "yellow" }} className="font-20 font-900">
            chavroux#0
          </Typography>
          <Typography className="font-20 font-900">$11,858.94</Typography>
          <Button
            startIcon={
              <CreditCardIcon
                sx={{
                  color: "black",
                  background: "green",
                  borderRadius: "3px",
                }}
              />
            }
            variant="contained"
            className="topRate-button"
          >
            $210.00
          </Button>
        </Box>
      </Box>
      <Box className="topRate-2nd">
        <Box className="topRate-round2">2nd</Box>
        <Box className="topRate-detail">
          <Typography sx={{ color: "gray" }} className="font-20 font-900">
            baward108
          </Typography>
          <Typography className="font-20 font-900">$2,558.77</Typography>
          <Button
            startIcon={
              <CreditCardIcon
                sx={{
                  color: "black",
                  background: "green",
                  borderRadius: "3px",
                }}
              />
            }
            variant="contained"
            className="topRate-button"
          >
            $120.00
          </Button>
        </Box>
      </Box>
      <Box className="topRate-3rd">
        <Box className="topRate-round3">3rd</Box>
        <Box className="topRate-detail">
          <Typography
            sx={{ color: "rgb(253, 188, 10)" }}
            className="font-20 font-900"
          >
            animalmind
          </Typography>
          <Typography className="font-20 font-900">$858.44</Typography>
          <Button
            startIcon={
              <CreditCardIcon
                sx={{
                  color: "black",
                  background: "green",
                  borderRadius: "3px",
                }}
              />
            }
            variant="contained"
            className="topRate-button"
          >
            $80.00
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const arr = [
  { id: 4, name: "louis", value: "4,765.65", profit: "56.00" },
  { id: 5, name: "charlie", value: "1,567.65", profit: "45.00" },
  { id: 6, name: "marti", value: "588.12", profit: "32.00" },
  { id: 7, name: "bobbie", value: "485.65", profit: "22.00" },
  { id: 8, name: "frank", value: "323.95", profit: "21.00" },
  { id: 9, name: "alex", value: "231.65", profit: "20.00" },
  { id: 10, name: "david", value: "165.65", profit: "15.00" },
];

function RateTable() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        {arr.map((item) => {
          return (
            <Box className="topRate-item">
              <Box
                sx={{ display: "flex", flex: 1, alignItems: "center", gap: 1 }}
              >
                <Box className="topRate-number">
                  <Typography className="font-30">{item.id}</Typography>
                </Box>
                <Typography className="font-30">{item.name}</Typography>
              </Box>
              <Typography className="font-30">${item.value}</Typography>
              <Typography
                className="font-30"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CreditCardIcon
                  sx={{
                    color: "black",
                    background: "green",
                    borderRadius: "3px",
                  }}
                />
                ${item.profit}
              </Typography>
            </Box>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default App;

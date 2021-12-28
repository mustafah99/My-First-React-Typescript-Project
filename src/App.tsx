import React from "react";
import Counter from "./components/counter";
import PrayerTimesByCity from "./components/prayerTimingsByCity";
import MuiAppBar from "./components/mui-components/MuiAppBar";
import Container from "@mui/material/Container";

type AppProps = {
  message: React.ReactNode;
};

let current = new Date();
const dateTime = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

function App({ message }: AppProps) {
  return (
    <Container disableGutters={true} maxWidth="xl">
      <MuiAppBar />
      <div className="mt-11 space-y-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-medium">
          {message} - {dateTime}
        </h1>
        <PrayerTimesByCity />
      </div>
    </Container>
  );
}

export default App;

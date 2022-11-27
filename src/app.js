const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/timeslot", (req, res) => {
  // const minslots = 4;
  // const maxslots = 8;
  let slots = [];
  const randomArrayLength = Math.floor(Math.random() * 4 + 4);
  for (let i = 0; i < randomArrayLength; i++) {
    let randomTime = Math.floor(Math.random() * 24);
    if (randomTime < 10) {
      randomTime = `0${randomTime}`;
    }
    let randomMin = Math.floor(Math.random() * 2);
    if (randomMin === 0) {
      slots.push(`${randomTime}00`);
    } else {
      slots.push(`${randomTime}30`);
    }
  }
  slots.sort((a, b) => a - b);
  slots = slots.filter((e, i, a) => e !== a[i - 1]);
  res.json({ success: true, result: slots });
});

app.get("/slotconfirm", (req, res) => {
  res.json({ status: "SUCCESS" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

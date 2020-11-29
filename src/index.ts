import { getCurrentWeek } from "./api";

async function init() {
  const currentWeek = await getCurrentWeek();
  console.log(currentWeek);
}
init();

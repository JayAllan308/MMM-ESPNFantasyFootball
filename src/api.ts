import type ESPNClient from "./shapes";
import { espnCookie, espnLeagueId, espnSeasonId, espnSwid } from "./config";

const { Client } = require("espn-fantasy-football-api/node");

const client: ESPNClient = new Client({ leagueId: espnLeagueId });
client.setCookies({ espnS2: espnCookie, SWID: espnSwid });

const maxWeeks = 17;
let currentWeek = 0;
export async function getCurrentWeek() {
  for (let week = currentWeek; week < maxWeeks + 1; week++) {
    const weeklyBoxscores = await client.getBoxscoreForWeek({
      seasonId: espnSeasonId,
      matchupPeriodId: week,
      scoringPeriodId: week,
    });
    if (!weeklyBoxscores.length) continue;
    const firstBoxScore = weeklyBoxscores[0];
    if (firstBoxScore.awayScore === 0 && firstBoxScore.homeScore === 0) {
      currentWeek = week - 1;
      return currentWeek;
    }
  }
}

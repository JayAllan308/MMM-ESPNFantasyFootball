import * as dotenv from "dotenv";
dotenv.config();

export const espnCookie = process.env.ESPN_COOKIE;
export const espnSwid = process.env.ESPN_SWID;
export const espnLeagueId = process.env.ESPN_LEAGUEID;

const now = new Date();
const year = now.getFullYear();

export let espnSeasonId = parseInt(process.env.ESPN_SEASONID);
if (!espnSeasonId) {
  espnSeasonId = year;
}

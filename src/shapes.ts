interface BoxscorePlayer {}

interface BoxScore {
  homeScore: number;
  homeTeamId: number;
  homeRoster: BoxscorePlayer[];
  awayScore: number;
  awayTeamId: number;
  awayRoster: BoxscorePlayer[];
}

interface GetBoxscoreForWeekRequest {
  seasonId: number;
  matchupPeriodId: number;
  scoringPeriodId: number;
}

export default interface ESPNClient {
  getBoxscoreForWeek(req: GetBoxscoreForWeekRequest): Promise<BoxScore[]>;
}

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

enum PlayerAvailabilityStatuses {
  FreeAgent = "FREEAGENT",
  OnTeam = "ONTEAM",
  Waivers = "WAIVERS",
}

//---------------------------------------------------
interface Player {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  jerseyNumber: number;
  proTeam: string;
  proTeamAbbreviation: string;
  defaultPosition: string;
  eligiblePositions: Array<string>;
  averageDraftPosition: number;
  averageAuctionValue: number;
  percentChange: number;
  percentStarted: number;
  percentOwned: number;
  acquiredDate: Date;
  availabilityStatus: PlayerAvailabilityStatuses;
  isDroppable: boolean;
  isInjured: boolean;
  injuryStatus: INJURY_STATUSES;
}

interface getFreeAgents {
  seasonId: number;
  scoringPeriodId: number;
}

interface FreeAgentPlayer {
  player: Player;
  rawStats: PlayerStats;
  projectRawStats: PlayerStats;
}

export default interface ESPNClient {
  getBoxscoreForWeek(req: GetBoxscoreForWeekRequest): Promise<BoxScore[]>;
}

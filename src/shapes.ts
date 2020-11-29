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

export interface GetHistoricalScoreboardForWeek {
  seasonId: number;
  matchupPeriodId: number;
  scoringPeriodId: number;
}

export interface GetLeagueInfo {
  seasonId: number;
}

export interface GetNFLGamesForPeriod {
  startDate: string;
  endDate: string;
}

export interface GetTeamsAtWeek {
  seasonId: number;
  scoringPeriodId: number;
}

export interface SetCookieRequest {
  espnS2: string;
  SWID: string;
}

interface DraftSettings {
  date: Date;
  type: DraftType;
  timePerPick: number;
  canTradeDraftPicks: boolean;
}

export interface LeagueMap {
  name: string;
  size: number;
  isPublic: boolean;
  draftSettings: DraftSettings;
  rosterSettings: RosterSettings;
  scheduleSettings: ScheduleSettings;
}

interface RosterSettings {
  lineupPositionCount: object;
  positionLimits: object;
  locktime: LineupLockTimes;
}

enum LineupLockTimes {
  IndividualGame = "INDIVIDUAL_GAME",
  FirstGameScoringPeriod = "FIRSTGAME_SCORINGPERIOD",
}

enum DraftType {
  Offline = "OFFLINE",
  Snake = "SNAKE",
  Autopick = "AUTOPICK",
  Snail = "SNAIL",
  Auction = "AUCTION",
}

enum PlayerAvailabilityStatuses {
  FreeAgent = "FREEAGENT",
  OnTeam = "ONTEAM",
  Waivers = "WAIVERS",
}

enum InjuryStatuses {
  Active = "ACTIVE",
  Bereavement = "BEREAVEMENT",
  DayToDay = "DAY_TO_DAY",
  Doubtful = "DOUBTFUL",
  FifteenDayDL = "FIFTEEN_DAY_DL",
  InjuryReserve = "INJURY_RESERVE",
  Out = "OUT",
  Paternity = "PATERNITY",
  Probable = "PROBABLE",
  Questionable = "QUESTIONABLE",
  SevenDayDL = "SEVEN_DAY_DL",
  SixtyDayDL = "SIXTY_DAY_DL",
  Suspension = "SUSPENSION",
  TenDayDL = "TEN_DAY_DL",
}

interface PlayerStats {
  passingYards: number;
  passingTouchdowns: number;
  passing2PtConversion: number;
  passingInterceptions: number;
  rushingYards: number;
  rushingTouchdowns: number;
  rushing2PtConversions: number;
  receivingYards: number;
  receivingTouchdowns: number;
  receivingReceptions: number;
  lostFumbles: number;
  madeFieldGoalsFrom50Plus: number;
  madeFieldGoalsFrom40to49Plus: number;
  madeFieldGoalsFromUnder40: number;
  missedFieldGoals: number;
  madeExtraPoints: number;
  missedExtraPoints: number;
  defensive0PointsAllowed: number;
  defensive1To6PointsAllowed: number;
  defensive7To13PointsAllowed: number;
  defensive14to17PointsAllowed: number;
  defensive28to34PointsAllowed: number;
  defensive35to45PointsAllowed: number;
  defensiveBlockedKickForTouchdowns: number;
  defensiveInterceptions: number;
  defensiveFumbles: number;
  defensiveBlockedKicks: number;
  defensiveSacks: number;
  defensiveSafeties: number;
  kickoffReturnTouchdown: number;
  puntReturnTouchdown: number;
  fumbleReturnTouchdown: number;
  interceptionReturnTouchdown: number;
  defensive100To199YardsAllowed: number;
  defensive200To299YardsAllowed: number;
  defensive350To399YardsAllowed: number;
  defensive400To449YardsAllowed: number;
  defensive450To499YardsAllowed: number;
  defensive500To549YardsAllowed: number;
  defensiveOver550YardsAllowed: number;
}

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
  injuryStatus: InjuryStatuses;
}

export interface NFLGame {
  startTime: Date;
  quarter: number;
  clock: string;
  odds: string;
  broadcaster: string;
  gameStatus: string;
  homeTeam: NFLTeam;
  awayTeam: NFLTeam;
}

interface NFLTeam {
  id: number;
  team: string;
  teamAbbrev: string;
  record: string;
  score: number;
}

export interface GetFreeAgents {
  seasonId: number;
  scoringPeriodId: number;
}

export interface FreeAgentPlayer {
  player: Player;
  rawStats: PlayerStats;
  projectRawStats: PlayerStats;
}

export interface Team {
  id: number;
  abbreviation: string;
  name: string;
  logoURL: string;
  wavierRank: string;
  roster: Array<Player>;
  wins: number;
  losses: number;
  ties: number;
  divisionWins: number;
  divisionLosses: number;
  divisionTies: number;
  homeWins: number;
  homeLosses: number;
  homeTies: number;
  awayWins: number;
  awayLosses: number;
  awayTies: number;
  totalPointsScored: number;
  regularSeasonPointsFor: number;
  regularSeasonPointsAgainst: number;
  winningPercentage: number;
  playoffSeed: number;
  finalStandingsPosition: number;
}

interface ScheduleSettings {
  numberOfRegularSeasonMatchups: number;
  regularSeasonMatchupLength: number;
  numberOfPlayoffMatchups: number;
  playoffMatchupLength: number;
  numberOfPlayoffTeams: number;
}

export default interface ESPNClient {
  getBoxscoreForWeek(req: GetBoxscoreForWeekRequest): Promise<BoxScore[]>;
  setCookies(req: SetCookieRequest): void;
}

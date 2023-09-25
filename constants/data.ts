import asset from "./asset";
import {
  EarnersType,
  GamesType,
  EventsType,
  TransactionsType,
  ExploreType,
  Onboarding,
} from "../src/types/types";

export const earners: EarnersType[] = [
  {
    id: "1",
    name: "Tonia Eno",
    image: asset.tonia,
    amount: 10233.33,
  },
  {
    id: "2",
    name: "Colin Miller",
    image: asset.colin,
    amount: 20233.33,
  },
  {
    id: "3",
    name: "May Thasha",
    image: asset.may,
    amount: 30233.33,
  },
];

export const games: GamesType[] = [
  {
    id: "1",
    image: asset.synced,
    genre: "adventure",
  },
  {
    id: "2",
    image: asset.outriders,
    genre: "action",
  },
  {
    id: "3",
    image: asset.conan,
    genre: "adventure",
  },
  {
    id: "4",
    image: asset.farcry,
    genre: "platformer",
  },
  {
    id: "5",
    image: asset.devilmaycry,
    genre: "action",
  },
  {
    id: "6",
    image: asset.horizon,
    genre: "platformer",
  },
  {
    id: "7",
    image: asset.synced,
    genre: "adventure",
  },
  {
    id: "8",
    image: asset.outriders,
    genre: "action",
  },
  {
    id: "9",
    image: asset.conan,
    genre: "adventure",
  },
  {
    id: "10",
    image: asset.farcry,
    genre: "platformer",
  },
  {
    id: "11",
    image: asset.devilmaycry,
    genre: "action",
  },
  {
    id: "12",
    image: asset.horizon,
    genre: "platformer",
  },
];

export const event: EventsType[] = [
  {
    id: "1",
    image: asset.dungeon,
    genre: "action",
    name: "enter the gungeon",
    point: 0.0954,
  },
  {
    id: "2",
    image: asset.warhospital,
    genre: "strategy game",
    name: "war hospital",
    point: 0.0854,
  },
  {
    id: "3",
    image: asset.callofduty,
    genre: "action",
    name: "call of duty",
    point: 0.0234,
  },
  {
    id: "4",
    image: asset.supermario,
    genre: "adventure",
    name: "super mario",
    point: 0.00034,
  },
  {
    id: "5",
    image: asset.mafia,
    genre: "action",
    name: "mafia",
    point: 0.4934,
  },
  {
    id: "6",
    image: asset.sniper,
    genre: "action",
    name: "sniper, ghost warrior",
    point: 3.6644,
  },
  {
    id: "7",
    image: asset.supermario,
    genre: "adventure",
    name: "super mario",
    point: 0.00034,
  },
  {
    id: "8",
    image: asset.mafia,
    genre: "action",
    name: "mafia",
    point: 0.4934,
  },
  {
    id: "9",
    image: asset.sniper,
    genre: "action",
    name: "sniper, ghost warrior",
    point: 3.6644,
  },
];

export const transactions: TransactionsType[] = [
  {
    id: "1",
    type: "receive",
    date: new Date().toDateString(),
    wallet: "0x309AcE....14D042",
    amount: 0.236829,
  },
  {
    id: "2",
    type: "receive",
    date: new Date().toDateString(),
    wallet: "0x906AcE....14A022",
    amount: 0.034825,
  },
  {
    id: "3",
    type: "transfer",
    date: new Date().toDateString(),
    wallet: "0x946AcW....13V032",
    amount: 10.194525,
  },
  {
    id: "4",
    type: "transfer",
    date: new Date().toDateString(),
    wallet: "0x946AcS....14J020",
    amount: 100.09472,
  },
];

export const explore: ExploreType[] = [
  {
    id: "1",
    image: asset.hogwarts,
    name: "warframe",
    genre: "action",
    amount: 0.08,
    daysDuration: 5,
    hoursDuration: 0,
    minutesDuration: 0,
    link: "./",
  },
  {
    id: "2",
    image: asset.dragon,
    name: "dragon",
    genre: "adventure",
    amount: 1.05,
    daysDuration: 2,
    hoursDuration: 5,
    minutesDuration: 0,
    link: "./",
  },
  {
    id: "3",
    image: asset.devilmaycry,
    name: "warframe",
    genre: "action",
    amount: 0.08,
    daysDuration: 10,
    hoursDuration: 3,
    minutesDuration: 0,
    link: "./",
  },
  {
    id: "4",
    image: asset.conan,
    name: "dragon",
    genre: "adventure",
    amount: 1.05,
    daysDuration: 1,
    hoursDuration: 2,
    minutesDuration: 0,
    link: "./",
  },
];

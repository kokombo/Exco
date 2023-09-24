import { ImageSourcePropType } from "react-native";
export type EarnersType = {
  id: string;
  image: ImageSourcePropType;
  name: string;
  amount: number;
};

export type GamesType = {
  id: string;
  image: ImageSourcePropType;
  genre: string;
};

export type EventsType = {
  id: string;
  image: ImageSourcePropType;
  genre: string;
  name: string;
  point: number;
};

export type TransactionsType = {
  id: string;
  type: string;
  date: string;
  wallet: string;
  amount: number;
};

export type ExploreType = {
  id: string;
  image: ImageSourcePropType;
  name: string;
  genre: string;
  amount: number;
  duration: number;
  link: string;
};

export type Onboarding = {
  heading?: string;
  subheading?: string;
  cta?: string;
  onPress?: () => void;
};

export type DurationType = {
  hourDuration: number;
  minuteDuration: number;
  secondsDuration: number;
  daysDuration: number;
};

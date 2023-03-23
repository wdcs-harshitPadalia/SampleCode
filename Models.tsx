import { ColorValue } from "react-native";

export interface SignUpDataModal {
  label: string;
  viewType: string;
  value: any;
  valueType: string;
  countryCode?: string;
  countryNum?: number | string;
  optionList?: any[];
}

export enum Mode {
  DATING = "DATING",
  FRIENDS = "FRIENDS",
}

export type UserDashboardInfoModel = {
  age: string;
  height: string;
  location: string;
  religion: string;
  study: string;
};

export type UsersDashboardModel = {
  name: string;
  occupation: string;
  aboutText: string;
  imgUrls: string;
  information: UserDashboardInfoModel;
  questionInfo: any[];
  instagram: any[];
  spotify: any[];
};

export type ModeModel = {
  mode: Mode;
  modeColor: ColorValue;
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum NotificationTypes {
  CHAT_MESSAGE = 'chatMessage',
  LIKE = 'like',
  MATCH = 'match',
  APPROVE = 'approve',
  REJECT = 'reject'
}

export type SettingsFiltersModel = {
  userId?: number;
  location?: string;
  radiusTo?: number;
  genderPrefrence?: string;
  ageFrom?: number;
  ageTo?: number;
  ethinicity?: string;
  privateMode?: boolean;
  pushMode?: boolean;
  datingMode?: string;
  screen?: any;
  status?: any;
};

//Board Data Models
export type AnswerModel = {
  userId: number;
  answerId: number;
  questionId: number;
  answer: string;
  question: string;
};

export type PicsMediaModel = {
  mainUrl: string;
  thumbURL: string;
  profilePicture: boolean;
  mediatype: string;
  id: number;
};

export type BoardUserModel = {
  userId: number;
  bio: string;
  age: string;
  height: string;
  occupation: string;
  currentOrganisation: string;
  name: string;
  ethnicity: string;
  locationName: string;
  religion: string;
  education: string;
  miles: number;
  answers: AnswerModel[];
  gender: string;
  medias: PicsMediaModel[];
  instragramMedias: any[];
  spotifyMedia: any[];
  tags: any;
};

export type LikeUserModel = {
  userId: number;
  userMediaId: number;
  userAnswerId: number;
  comment: any;
  userMatchId: number;
  userIdLikedMe: number;
  name: String;
  profileMedias: PicsMediaModel;
  userAnswer: string;
  updateProfile: any;
};

export type ExpirationModel = {
  userId: number;
  name: string;
  gender: string;
  jberId: string;
  profileMedia: PicsMediaModel;
  expirytimeLeftInHR: number;
  datingMode: string;
};

export type ChatUsersModel = {
  userId: number;
  name: string;
  gender: string;
  jberId: string;
  profileMedia: PicsMediaModel;
  expirytimeLeftInHR: number;
  datingMode: string;
  lastMessage?: string;
};

export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: String;
  status: String;
  name: String;
  thumbnail: string;
  category: CategoryTypes;
}

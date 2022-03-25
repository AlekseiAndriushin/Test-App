export interface IGaearon {
  name: string;
  avatar_url: string;
  company: string;
};

export interface IUser {
  name: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
  followers: number | undefined;
};

export interface IFollowers {
  login: string;
  avatar_url: string;
};
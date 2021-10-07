export type User = {
	name: string | undefined;
	avatar_url: string | undefined;
	html_url: string | undefined;
	followers: number | undefined;
};

export type Followers = {
	login: string;
	avatar_url: string;
};


export type Gaearon = {
	name: string;
	avatar_url: string;
	company: string;
};
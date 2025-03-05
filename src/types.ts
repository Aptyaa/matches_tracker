export interface ITeam {
	name: string
	players: IPlayer[]
	points: number
	place: number
	total_kills: number
}

export interface IPlayer {
	userName: string
	kills: number
}

export interface ResponseSuccess {
	ok: boolean
	data: {
		matches: IMatch[]
	}
}

export interface IMatch {
	title: string
	time: string
	homeTeam: ITeam
	awayTeam: ITeam
	homeScore: number
	awayScore: number
	status: MatchStatus
}

export enum MatchStatus {
	Scheduled = 'Scheduled',
	Ongoing = 'Ongoing',
	Finished = 'Finished',
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MatchStatus, ResponseSuccess } from './types'

const BASE_URL = ' https://app.ftoyd.com/fronttemp-service'

type TTransformResponseMatches = {
	homeTeam: string
	homeTeamScore: number
	awayTeam: string
	awayTeamScore: number
	status: MatchStatus
}

export const appApi = createApi({
	reducerPath: 'appApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getMatches: builder.query<TTransformResponseMatches[], void>({
			query: () => 'fronttemp',
			transformResponse: (response: ResponseSuccess) => {
				const result = response.data.matches.map(match => ({
					homeTeam: match.homeTeam.name,
					homeTeamScore: match.homeScore,
					awayTeam: match.awayTeam.name,
					awayTeamScore: match.awayScore,
					status: match.status,
				}))
				return result
			},
		}),
	}),
})

export const { useGetMatchesQuery } = appApi

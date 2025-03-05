import { MatchItem, MatchItemProps } from '../match-item/match-item'

interface MatchListProps {
	matches: MatchItemProps[]
}

export const MatchList = ({ matches }: MatchListProps) => {
	return (
		<ul>
			{matches.map((match, index) => (
				<MatchItem
					key={index}
					homeTeam={match.homeTeam}
					awayTeam={match.awayTeam}
					homeTeamScore={match.homeTeamScore}
					awayTeamScore={match.awayTeamScore}
					status={match.status}
				/>
			))}
		</ul>
	)
}

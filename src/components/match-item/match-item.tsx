import { CommandItem } from '../command-item/command-item'
import style from './match-item.module.scss'
import logo from '../../assets/logo.svg'
import { CardStatus } from '../card-status/card-status'
import { MatchStatus } from '../../types'

export interface MatchItemProps {
	homeTeam: string
	awayTeam: string
	status: MatchStatus
	homeTeamScore: number
	awayTeamScore: number
}

export const MatchItem = ({
	homeTeam,
	awayTeam,
	status,
	homeTeamScore,
	awayTeamScore,
}: MatchItemProps) => {
	return (
		<li className={style.item}>
			<CommandItem homeTeam={true} logo={logo}>
				{homeTeam}
			</CommandItem>
			<div className={style.progress}>
				<span className={style.score}>
					{homeTeamScore} : {awayTeamScore}
				</span>
				<CardStatus>{status}</CardStatus>
			</div>
			<CommandItem logo={logo}>{awayTeam}</CommandItem>
		</li>
	)
}

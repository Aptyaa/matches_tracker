import { MatchStatus } from '../../types'
import style from './card-status.module.scss'
import clsx from 'clsx'

interface CardStatusProps {
	children: MatchStatus
}

export const CardStatus = ({ children }: CardStatusProps) => {
	const statusTextMap = {
		[MatchStatus.Scheduled]: 'Match prepared',
		[MatchStatus.Finished]: 'Finished',
		[MatchStatus.Ongoing]: 'Live',
	}
	const statusClassMap = {
		[MatchStatus.Scheduled]: style.scheduled,
		[MatchStatus.Finished]: style.finished,
		[MatchStatus.Ongoing]: style.live,
	}
	return (
		<span className={clsx(style.card, statusClassMap[children])}>
			{statusTextMap[children]}
		</span>
	)
}

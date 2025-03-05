import clsx from 'clsx'
import refresh from '../../assets/refresh.svg'
import style from './button.module.scss'
import { useEffect, useState } from 'react'

interface ButtonProps {
	children: string
	onClick: () => void
	isLoading: boolean
}

export const Button = ({ children, onClick, isLoading }: ButtonProps) => {
	const [isSpinning, setIsSpinning] = useState(false)
	useEffect(() => {
		if (isLoading) setIsSpinning(true)
		else {
			const timeout = setInterval(() => setIsSpinning(false), 500)
			return () => clearInterval(timeout)
		}
	}, [isLoading])
	return (
		<button className={style.btn} onClick={onClick}>
			{children}{' '}
			<img
				className={clsx({ [style.spinner]: isSpinning })}
				src={refresh}
				alt='Иконка обновления'
			/>
		</button>
	)
}

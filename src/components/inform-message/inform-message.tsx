import style from './inform-message.module.scss'
import warning from '../../assets/warning.svg'

interface IInformMessage {
	children: string
	srcIcon?: string
}

export const InformMessage = ({ children, srcIcon }: IInformMessage) => {
	return (
		<span className={style.inform}>
			<img src={srcIcon || warning} alt='Иконка предупреждающего сообщения' />
			{children}
		</span>
	)
}

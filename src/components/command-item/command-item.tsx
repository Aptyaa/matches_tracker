interface CommandItemProps {
	children: string
	logo: string
	homeTeam?: boolean
}

export const CommandItem = ({
	logo,
	children,
	homeTeam = false,
}: CommandItemProps) => {
	return (
		<>
			{homeTeam && <img src={logo} alt='Иконка команды' />}
			<span>{children}</span>
			{!homeTeam && <img src={logo} alt='Иконка команды' />}
		</>
	)
}

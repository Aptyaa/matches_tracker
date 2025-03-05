import { MatchList } from './components/match-list/match-list'
import { useGetMatchesQuery } from './api'
import { Button } from './components/button/button'
import { InformMessage } from './components/inform-message/inform-message'
import './App.css'

function App() {
	const { data, isLoading, isError, refetch, isFetching } = useGetMatchesQuery()
	if (isLoading) return <div>Loading...</div>
	return (
		<>
			<div className='header'>
				<h1>Matches tracker</h1>
				<div className='wrapper_btn'>
					{isError && (
						<InformMessage>
							Ошибка: не удалось загрузить информацию
						</InformMessage>
					)}
					<Button onClick={refetch} isLoading={isFetching}>
						Обновить
					</Button>
				</div>
			</div>

			<MatchList matches={data || []} />
		</>
	)
}
export default App

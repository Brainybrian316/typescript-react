import TodoList from './components/TodoList';

const App: React.FC = () => {
	return (
		<div className="App">
			{/* a component tht adds todo's */}
			<TodoList />
		</div>
	);
};

export default App;

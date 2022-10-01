import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
	const toDos = [{ id: 't1', text: 'Finish the course' }];
	return (
		<div className="App">
			<NewTodo />
			<TodoList items={toDos} />
		</div>
	);
};

export default App;

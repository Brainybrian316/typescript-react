import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
	const toDos = [{ id: 't1', text: 'Finish the course' }];

	const toDoAddHandler = (text: string) => {
		console.log(text);
	};

	return (
		<div className="App">
			{/* pointer to the function */}
			<NewTodo onAddToDo={toDoAddHandler} />
			<TodoList items={toDos} />
		</div>
	);
};

export default App;

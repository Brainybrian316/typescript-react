import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import { Todo } from './todo.model';

const App: React.FC = () => {
	const [toDos, setToDos] = useState<Todo[]>([]);

	const toDoAddHandler = (text: string) => {
		setToDos((prevToDos) => [...prevToDos, { id: Math.random().toString(), text: text }]);
	};

	const toDoDeleteHandler = (toDoId: string) => {
		setToDos((prevToDos) => {
			return prevToDos.filter((todo) => todo.id !== toDoId);
		});
	};

	return (
		<div className="App">
			{/* pointer to the function */}
			<NewTodo onAddToDo={toDoAddHandler} />
			<TodoList items={toDos} onDeleteToDo={toDoDeleteHandler} />
		</div>
	);
};

export default App;

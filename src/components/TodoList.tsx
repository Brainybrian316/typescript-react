import './TodoList.css';

// to make code leaner, we can set pros as an interface
interface TodoListProps {
	items: { id: string; text: string }[];
	onDeleteToDo: (id: string) => void;
}

// second approach <{ items: { id: string; text: string }[] }>
const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<>
			<ul>
				{props.items.map((todo) => (
					<li key={todo.id}>
						<span>{todo.text}</span>
						<button onClick={props.onDeleteToDo.bind(null, todo.id)}>DELETE</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TodoList;

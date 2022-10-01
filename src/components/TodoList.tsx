// to make code leaner, we can set pros as an interface
interface TodoListProps {
	items: { id: string; text: string }[];
}

// second approach <{ items: { id: string; text: string }[] }>
const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<>
			<ul>
				{props.items.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</>
	);
};

export default TodoList;

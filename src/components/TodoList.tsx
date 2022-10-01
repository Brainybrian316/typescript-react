const TodoList: React.FC = () => {
	const toDos = [{ id: 't1', text: 'Finish the course' }];
	return (
		<>
			<ul>
				{toDos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</>
	);
};

export default TodoList;

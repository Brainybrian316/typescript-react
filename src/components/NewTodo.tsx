import React, { FormEvent, useRef } from 'react';
import './NewTodo.css';

// third approach from interface/passing props
type NewTodoProps = {
	onAddToDo: (toDoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const toDoSubmitHandler = (event: FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		props.onAddToDo(enteredText);
	};
	return (
		<>
			<form onSubmit={toDoSubmitHandler}>
				<div className="form-control">
					<label htmlFor="todo-text">Todo Text</label>
					<input type="text" id="todo-text" ref={textInputRef} />
				</div>
				<button type="submit">ADD TODO</button>
			</form>
		</>
	);
};

export default NewTodo;

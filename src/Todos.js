const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key = { todo.id }>
                    <span onClick={ () => {deleteTodo(todo.id)} } className="">{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left</p>
    )
  return (
    <div className="todos collection">
        { todoList }
    </div>
  );
};

export default Todos;
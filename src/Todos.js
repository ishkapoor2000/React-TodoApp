const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key = { todo.id }>
                    <span><span onClick={ () => {deleteTodo(todo.id)} } style={{"cursor": "pointer"}} className="badge hoverable">❌</span>{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left! Add them below.</p>
    )

    return (
    <div className="todos collection">
        { todoList }
    </div>
  );
};

export default Todos;
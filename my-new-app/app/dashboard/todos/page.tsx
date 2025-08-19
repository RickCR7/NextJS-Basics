import type{ NextPage } from "next"

async function getAllTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        next: {revalidate: 10},
    });
    
    return await response.json();
}

export const preloadTodos = () => {
    console.log("Preloading Data...");
    void getAllTodos();
}

const TodosPage: NextPage = async() => {
    const todos = await getAllTodos();
    return (
        <div>
            <h1 className="text-4xl font-bold">Todos</h1>
            <div className="grid grid-cols-3 gap-4">
            {todos && Array.isArray(todos) && todos.map((todo: any) => <div className="border p-5 shadow-lg rounded-lg" key={todo.id}>
                <h4>{todo.title}</h4>
            </div>)}
        </div>
    </div>
    )
}

export default TodosPage;
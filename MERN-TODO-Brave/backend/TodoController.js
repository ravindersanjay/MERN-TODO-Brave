import TodoModel from "./TodoModel.js"

async function getTodo(req, resp)
{
    const { text } = req.body
    const todos = await TodoModel
        .find()
        .catch((err) => console.log(err.message))

    resp.send(todos);
     
}

async function saveTodo(req, resp)
{
    const { text } = req.body
    const todos = await TodoModel
        .create({ text })
        // .then(() => resp.send("Record Saved Successsfully"))
        .catch((err) => console.log(err.message))

    resp.json(todos);
}

async function updateTodo(req, resp)
{
    const { _id, text } = req.body
    const todos = await TodoModel
        .findByIdAndUpdate(_id, { text })
        // .then(() => resp.send("Record updated Successfullly"))
        .catch((err) => console.log(err.message))

    resp.json(todos);
}

async function deleteTodo(req, resp)
{
    const { _id } = req.body
    const todos = await TodoModel
        .findByIdAndDelete(_id)
        // .then(() => resp.send("Record deleted Successfullly"))
        .catch((err) => console.log(err.message))
    
    resp.json(todos);
     

    
}

async function searchTodoById(req, resp)
{
    const { _id } = req.body
    const todos = await TodoModel
        .findById(_id)
        //.then(() => resp.json(todos))
        .catch((err) => console.log(err.message))

    resp.json(todos);
}


// async function saveTodo(req, resp)
// {
//     const { text } = req.body
//     const todos = await TodoModel
//         .create({ text })
//         .catch((err) => console.log(err.message))

//     resp.json(todos);
// }

//export default getTodo;
export default { getTodo, saveTodo, updateTodo, deleteTodo, searchTodoById };




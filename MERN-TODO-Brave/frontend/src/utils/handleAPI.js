import axios from "axios";
const baseurl = "http://localhost:8000"

const getAllTodo = (setTodo) =>
{

    axios
        .get(baseurl)
        .then(({ data }) =>
        {
            console.log('data', data);
            setTodo(data)
        })
}


const addTodo = (text, setText, setTodo) =>
{

    axios
        .post(`${baseurl}/save`, { text })
        .then((data) =>
        {
            console.log(data);
            setText("")
            getAllTodo(setTodo)

        })
        .catch((err) => console.log(err.message))

}

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) =>
{

    axios
        .put(`${baseurl}/update`, { _id: todoId, text })
        .then((data) =>
        {
            setText("")
            setIsUpdating(false)
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err))

}


const deleteTodo = (_id, setTodo) => {

    axios
        .post(`${baseurl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err))

}

export { getAllTodo, addTodo, updateTodo, deleteTodo }

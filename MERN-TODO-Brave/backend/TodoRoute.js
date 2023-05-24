import Router from "express";
import a from './TodoController.js'
const router = Router();


// router.get("/", (req, resp) =>{
//     resp.json({message: "this is server response route file"})
// })


router.get('/',       a.getTodo)
router.post("/save",   a.saveTodo)  // create new record 
router.put("/update", a.updateTodo) // update record 
router.post('/delete', a.deleteTodo)  // delete record 
router.get("/search", a.searchTodoById)  // search record 

export default router;
 

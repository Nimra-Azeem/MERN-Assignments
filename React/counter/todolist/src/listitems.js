import './App.css';
import { useState, useEffect, useRef } from "react";

let ItemsList = () => {
    let ItemsList = [
        { title: "Task 1", description: "Casme Sales Process", datetime: '04/05/2023', priority: 1, createdAt: '04/05/2023', updatedAt: '04/05/2023' },
        { title: "Task 2", description: "FIGO Sales Process", datetime: '04/05/2023', priority: 1, createdAt: '04/05/2023', updatedAt: '04/05/2023' }
    ]
    const [list, setlist] = useState(ItemsList);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datetime, setDatetime] = useState("");
    const [priority, setPriority] = useState("");
    const [createdAt] = useState(Date.now());
    const [updatedAt, setUpdatedAt] = useState("");
    
    const allTasks = list.map((element) => {
        return (
            <li><p>{element.title},{element.description},{element.datetime}</p></li>
        )
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(list)
        const obj = {
            title,
            description,
            datetime,
            priority,
            createdAt,
            updatedAt
        }
        ItemsList.push(obj);
        setlist(ItemsList);
    };

    return (
        <div>
            <h2>My To-do List</h2>
            <ul>
                {allTasks}
            </ul>
            <h2>Add New Task</h2>

            <form onSubmit={handleSubmit}>
                <label>Task Title</label><input type="text" onChange={(e) => { setTitle(e.target.value); }} /><br /><br />
                <label>Task Description</label><input type="text" onChange={(e) => { setDescription(e.target.value); }} /><br /><br />
                <label>Task DateTime: </label><input type="datetime-local" onChange={(e) => { setDatetime(e.target.value); }} /><br /><br />
                <label for="priority"> Select priority: </label>
                <select id="priority" name="priority" onChange={(e) => { setPriority(e.target.value); }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select><br /><br />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}
export default ItemsList;

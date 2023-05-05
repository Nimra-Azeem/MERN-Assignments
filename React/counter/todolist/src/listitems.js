import './App.css';
import { useState, useEffect, useRef } from "react";

let ItemsList = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datetime, setDatetime] = useState("");
    const [priority, setPriority] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");

    let ItemsList = [
        { title: "Task 1", description: "Casme Sales Process", datetime: '04/05/2023', priority: 1, createdAt: '04/05/2023', updatedAt: '04/05/2023' },
        { title: "Task 2", description: "FIGO Sales Process", datetime: '04/05/2023', priority: 1, createdAt: '04/05/2023', updatedAt: '04/05/2023' }
    ]
    const allTasks = ItemsList.map((element) => {
        return (
            <li><p>{element.title},{element.description},{element.datetime}</p></li>
        )
    });
    const onAddTask = (object) =>{
        let ItemsListNew = ([...ItemsList],object);
    }

    const handleSubmit = e => {
        e.preventDefault();
        this.props.onAddTask(e);
        setTitle('');
        setDescription('');
        setDatetime(Date.now());
        setPriority('');
        setCreatedAt(Date.now());
        setUpdatedAt(Date.now());
    };

    return (
        <div>
            <h2>My Project</h2>
            <ul>
                {allTasks}
            </ul>
            <h2>Add New Task</h2>

            <form onsubmit={handleSubmit}>
                <label>Task Title</label><input type="text" onChange={(e) => { setTitle(e.target.value); }} /><br /><br />
                <label>Task Description</label><input type="text" onChange={(e) => { setDescription(e.target.value); }} /><br /><br />
                <label>Task DateTime: </label><input type="datetime-local" onChange={(e) => { setDatetime(e.target.value); }} /><br /><br />
                <label>Task createdAt: </label><input type="datetime-local" onChange={(e) => { setCreatedAt(e.target.value); }} /><br /><br />
                <label for="priority"> Select priority: </label>
                <select id="priority" name="priority" onChange={(e) => { setPriority(e.target.value); }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select><br /><br />
                <label>Task UpdatedAt: </label><input type="datetime-local" onChange={(e) => { setUpdatedAt(e.target.value); }} /><br /><br />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}
export default ItemsList;

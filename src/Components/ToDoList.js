import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
 
const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState('');
    const [obj, setObj] = useState({});
 
    useEffect(() => {
        getData();
    }, []);
 
    function create() {
        axios.post('http://localhost:5000/posting', {todo , id, age, gender})
            .then(() => {
                alert('Data has been posted successfully');
                setTodo('');
                setAge('');
                setGender('');
                getData();
            })
            .catch(() => {
                alert('Failed to post data');
            });
    }
 
    function getData() {
        axios.get('http://localhost:5000/posts')
            .then((response) => {
                setTodos(response.data);
            })
            .catch(() => {
                alert('Failed to retrieve data');
            });
    }
 
    function getExactData(id) {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then((resp) => {
                setObj(resp.data);
                alert('Data retrieved successfully');
            })
            .catch(() => {
                alert('Failed to retrieve specific data');
            });
    }
    function upadateTodo(id, object) {
        axios.put(`http://localhost:5000/posts/${id}`, { todo: object })
            .then(() => {
                getData();
            })
            .catch(() => {
                alert("data cannot change")
            })
    }
    function deleteTodo(id) {
        axios.delete(`http://localhost:5000/posts/${id}`)
            .then(() => {
                getData();
            })
            .catch(() => {
                alert("data cannot change")
            })
    }
    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <TextField id="todo" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <TextField id="age" label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} />
                <TextField id="gender" label="Gender" variant="outlined" value={gender} onChange={(e) => setGender(e.target.value)} />
                <TextField id="id" label="ID" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} style={{ marginLeft: '10px' }} />
                <Button variant="outlined" onClick={create} style={{ marginLeft: '10px' }}>Post</Button>
                <Button variant="outlined" onClick={getData} style={{ marginLeft: '10px' }}>Get All</Button>
                <Button variant="outlined" onClick={() => getExactData(id)} style={{ marginLeft: '10px' }}>Exact Data</Button>
            </div>
 
            <ol>
                {todos.map((item) => (
                    <li key={item.id}>{item.todo}, {item.age}, {item.gender}
                        <Button onClick={() => {
                            const newdata = prompt("enter the new data")
                            const newAge = prompt("enter the new age")
                            const newGender = prompt("enter the new gender")
                            const object = { todo: newdata }
                            if (newdata !== null && newAge !==null && newGender !==null)
                             {
                                const updateTodo ={ todo :newdata, age:newAge, gender:newGender}
                                updateTodo(item.id, updateTodo);
                                
                            }
                            else {
                                alert("please enter the new data")
                            }
                        }} >Edit</Button>
                        <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
                    </li>
                ))}
            </ol>
 
            {obj.id && (
                <div>
                    <h3>Exact Data</h3>
                    <p>ID: {obj.id}</p>
                    <p>Todo: {obj.todo}</p>
                    <p>Age: {obj.age}</p>
                    <p>Gender: {obj.gender}</p>

                </div>
            )}
        </div>
    );
};
 
export default TodoList;
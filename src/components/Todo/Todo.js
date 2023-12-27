import './Todo.css';
import List from "./List";
import {useState} from "react";

const Todo = () => {
    const [ todo, setTodo ] = useState('');
    const [ list, setList ] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (todo) {
            setList([...list, todo]);
        }

        setTodo('')
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setTodo(value)
    }

    return (
        <div>
            <div className="big_block">
                <h1>TODO  <span> LIST</span></h1>
                <div className="second_block">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='input_block'
                            placeholder='Enter your todo'
                            value={todo}
                            onChange={handleChange}
                        />
                        <button type='submit'>ADD</button>
                    </form>
                    <List list={list}/>
                </div>
            </div>
        </div>
    );
};

export default Todo;
import './Todo.css';

const List = ({ list }) => {
    return (
        <ul className='list'>
            {list.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
    );
};

export default List;
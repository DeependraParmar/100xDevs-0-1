import { useEffect, useState } from 'react'
import axios from 'axios'


function useTodos(n){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n*1000);

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return () => {
      clearInterval(value);
    }
  }, [n])

  return {todos, loading};
}

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    })
    window.addEventListener("offline", () => {
      setIsOnline(false);
    })
  },[]);

  return isOnline;
}

function useMousePointer(){
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosition({x: e.clientX, y: e.clientY});
    });

    return () => {
      setPosition({x: 0, y: 0});
    }
  },[]);

  return position;
}

function useTimer(){
  const [timer, setTimer] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setTimer(timer+1);
    },1000)


    return () => {
      clearInterval(interval);
    }
  },[]);

  return timer;
}
function App() {
  
  const {todos, loading} = useTodos(10);
  const isOnline = useIsOnline();
  const mousemove = useMousePointer();
  const timer = useTimer();

  return (
    <>
      {isOnline? "you are online": "you are offline"}
      <br />
      {loading ? "Loading as you are online..." : todos.map((todo, index) => <Track todo={todo} key={index} />)}
      <br />
      <div>mouse at {mousemove.x} and {mousemove.y}</div>
      <br />
      <div>Timer is: {timer}</div>
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
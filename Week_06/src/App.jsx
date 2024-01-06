import React, { useEffect, useState } from "react"

function App() {

  // why there is a need to return a single child from the component? Because it makes RECONCILLATION  easier that is the process of figuring out what is to be delivered on the frontend and manipulating the figuring the DOM out there on the frontend...
  const [title, changeTitle] = useState("Deependra Parmar");

    const updateTitle = () => {
      changeTitle(Math.random());
    }
    const [todo, setTodo] = useState([])


    useEffect(() => {
      setInterval(() => {
        fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
          const data = await res.json();
          setTodo(data.todos);
        })
      },10000)
    },[])

  return (
    <div>
      {/* <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={`My name is ${title}`} />
      <Header title={"Today, we are going to deep dive into react"} />
      <Header title={"Today, we are going to deep dive into react"} />
      <Header title={"Today, we are going to deep dive into react"} />

      <Wrapper>
        <TextComponent />
      </Wrapper> */}

      {
        todo && todo.map(todo => {
          return <Todo key={todo.id} title={todo.title} description={todo.description} />
        })
      }
    </div>

  )
}

// Push down your state variable down in another function which contains the dynamic content. Remove the state variable from the App prevents the re-rendering
// function HeaderWithButton(){
//   const [title, changeTitle] = useState("Deependra Parmar");

//   const updateTitle = () => {
//     changeTitle(Math.random());
//   }
//   return <>
//     <button onClick={updateTitle}>Click me to change the title</button>
//     <Header title={`My name is ${title}`} />
//   </>
// }


const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

const Wrapper = ({children}) => {
  return (
    <div style={{border : "1px solid black"}}>
        {children}
    </div>
  )
}

function TextComponent() {
  return <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatem quis expedita maiores ratione vero deserunt repellendus laboriosam, iure velit facere veniam quae ipsam odio est voluptatibus molestiae accusamus voluptas.
  </p>
}

function Todo({title, description}){
  return <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
}
export default App

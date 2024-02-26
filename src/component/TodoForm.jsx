import TodoItem from "./TodoItem";

const TodoForm = () => {
  const todo = [
    { name: "homework", priority: "1" },
    { name: "classwork", priority: "2" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",

        flexDirection: "column",
        backgroundImage: "url('./abstract-triangles-background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50vh"

        
      }}
    >
      <h1
      
        style={{
          opacity: "0.5",
          color: "black",
       
        }}
      >
        My resume
      </h1>

      <form>
        <input
        id="ColorStyle"
          type="text"
          name="nm"
          defaultValue="name : "
          style={{
            display: "block",
            width: "50vh",
            marginTop: "1.5rem",
          }}
        ></input>
        <input
        id="RemoveElement"

          type="text"
          name="nm"
          defaultValue="email: "
          style={{
            display: "block",
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1.5rem",
          }}
        ></input>
        
      </form>

      {todo.map((element, index) => (
        <TodoItem piorit={element.priority} name={element.name} key={index} />
      ))}
    </div>
    
  );
};
export default TodoForm;

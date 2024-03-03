// import TodoForm from "./component/TodoForm";

// function App() {
//   return (
//     <>
    
//       <TodoForm />
//     </>
//   );
// }

// export default App;
// import Gallery from "./component/Gallery";
// import TodoForm from "./component/TodoForm";

// function App() {
//   return (
//     <>
    
//       <TodoForm />
//     </>
//   );
// }

// export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoForm from './Component/TodoForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoForm/>
    </>
  )
}

export default App
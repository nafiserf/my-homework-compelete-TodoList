// import { sculptureList } from "./sculptureList";
// import { useState } from "react";

// export default function Gallery() {
//     const [index, setIndex] = useState(0);
//     const [add, setAdd] = useState(1);
//     const [minus, setMinus] = useState(-1);


//    function handleClick(){
//     if(index+add>=sculptureList.length-1){
//         setIndex(0);
//     }else{
//         setIndex(index+add);
//     }
//    }
//    function handleprev(){
//     if(index+minus<=0){
//         setIndex(sculptureList.length-1);
//     }else{
//         setIndex(index-minus);
//     }
//    }
//    function handleAdd(){
//     if(add===3){
//         setAdd(1)
//     }else{
//         setAdd(add+1)
//     }
//    }
//    function handleprevplus(){
//     if(minus=== -3){
//         setMinus(-1)
//     }else{
//         setMinus(minus-1)
//     }
//    }


// let sculpture = sculptureList[index];
// return(
//     <>
//     <button onClick={handleClick}>
//         Next
//         </button>
//     <button onClick={handleAdd}>
//         +2
//         </button>
//     <button onClick={handleprev}>
//         prev
//         </button>
//     <button onClick={handleprevplus}>
//         -2
//         </button>
//         <h2>
//             <i>{sculpture.name}</i>
//             by {sculpture.artist}
//         </h2>
//         <h3>
//             ({index + 1} of {sculpture.length})
//         </h3>
//         <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//         />
//         <p>
//             {sculpture.description}
//         </p>
//     </>
// );
// }
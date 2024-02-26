// import Button from "./Button";

const TodoItem = ({name}) => {




// }
function Remove() {
  var element = document.getElementById("RemoveElement");
  element.parentNode.removeChild(element);
}
function Linein(){
document.getElementById("ColorStyle").style.textDecoration="line-through";
document.getElementById("ColorStyle").style.color="black"; 


}



  return (
    <div
      style={{
        color: "black",
        marginTop: "0.5rem",
        width:"50",
        height:"50",
        padding: "0.5rem",


        
       
      }}
    >
        
     My Task
     
      <button style={{backgroundColor:"gray",
      marginLeft: "5px",
    }}  onClick={Remove} >romeve</button>
      <button style={{backgroundColor:"yellow",
      marginLeft: "5px",
    }} onClick={Linein} >click it</button>

    </div>
    
  );

};
export default TodoItem;

const totalContent = document.getElementById('main');
const inputRef = document.getElementById('search-bar');
var prev="";
const click = () => {
 //var context = document.querySelector("#main");
 var obj = new Mark(totalContent);
if(prev!=="")
{
    //var context = document.querySelector(".context").value="This is created by tarun";
    
    obj.unmark(prev);
}    
    obj.mark(inputRef.value);
    prev=inputRef.value;
};
const markMatches = (currentNode, pattern) => {

};

document.getElementById('search-button').addEventListener('click', click)
const inputBox=document.getElementById("input-box");
    const listItem=document.getElementById("list-item");
    
    function addTask()
    {
        if(inputBox.value=='')
        {
          alert("you must have to add something ...");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listItem.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputBox.value="";
        savedata();
    }
    listItem.addEventListener("click",function(e)
    {
        if(e.target.tagName==="LI")
        {
            e.target.classList.toggle("checked");
            savedata();
        }
        else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();
            savedata();
        }
    },false)
    function savedata()
    {
        localStorage.setItem("data",listItem.innerHTML);
    }
    function showTask()
    {
        listItem.innerHTML=localStorage.getItem("data");
    }
    showTask();
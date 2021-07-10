var button=document.querySelector('.ctn')
var sabkaparent=document.querySelector('.sabkabap')
var notone=document.querySelector('.notone')
var notesicon=document.querySelector('.notesicon')
var inputva=document.querySelector('.inputva')
var cancel_whole_item=document.querySelector('.kahi')


button.addEventListener('click',notedo)
notesicon.addEventListener('click',shownote)
arr=0
var sabb=[arr]

var count=0
function notedo(count){
    count=count+1
    console.log(count)    
    // arr++
    // console.log(sabb)
    // arr++
    var textarea=document.createElement('textarea')
    textarea.readOnly=false
    textarea.addEventListener('click',()=>{
        // console.log("tarse tarse")
        if(textarea.readOnly==false){
            textarea.readOnly=true
        }else{
            textarea.readOnly=false
        }
    })
    textarea.classList.add('textva')
    notone.appendChild(textarea)

    //delete button hai
    var delbtn=document.createElement('button')
    delbtn.addEventListener('click',(count)=>{
        textarea.remove()
    })
    delbtn.classList.add('delbtn')
    notone.appendChild(delbtn)
    delbtn.innerHTML="&#88;"

    console.log(textarea)
    console.log(notone)

 
    // window.localStorage.setItem("hua",textarea)
}
// console.log(notedo())
function shownote(){
    sabkaparent.style.display='block';
}
inputva.addEventListener('click',(e)=>{
    console.log(e.target)
    const item=e.target
    if(item.classList[0]==='delbtn'){
        const todo=item.parentElement;
        todo.remove()
        // delbtn.remove()
    }
})

cancel_whole_item.addEventListener('click',()=>{
    sabkaparent.style.display='none';
})




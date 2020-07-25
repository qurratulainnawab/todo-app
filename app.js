var list =document.getElementById('list');

function addTodo(){
    var todoItem = document.getElementById('todo-item');

    
    // create li list
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)
    li.setAttribute('class','list-group-item list-group-item-primary')

    // create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    delBtn.setAttribute('class','btn btn-info')
    delBtn.setAttribute('onclick','deleteItem(this)')

    // create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.setAttribute('class','btn btn-info')



    list.appendChild(li)
    todoItem.value = ''
    

}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = prompt('Enter your edit value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = ''
}



















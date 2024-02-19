var list = []

function add() {
    var val = document.getElementById('text').value;
    list.push(val)
    var content = list.map((text) => {
        return `<li>
         <span>${text}</span>
         <button type="button" onclick="clearElement('${text}')">EFFACER</button>
         </li>`
    })
    document.getElementById('todo-list').innerHTML = `<ul>${content.join('')}</ul>`
}

function clearElement(val) {
    var index= list.indexOf(val);
    list.splice(index, 1)
    var content = list.map((text) => {
        return `<li>
             <span>${text}</span>
             <button type="button" onclick="clearElement('${text}')">EFFACER</button>
            </li>`
    })
    document.getElementById('todo-list').innerHTML = `<ul>${content.join('')}</ul>`
}
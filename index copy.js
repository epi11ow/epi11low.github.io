let input = document.getElementById("input")
let form = document.getElementById("form")
let li = document.getElementById("li")

form.addEventListener("submit", (event) => {
    console.log(input.value)
    event.preventDefault()
    functionsubmit()
})

function functionsubmit() {
    if (input.value) {
        let li = document.createElement("li")
        li.innerText = input.value
        li.classList.add("list-group-item")
        ul.appendChild(li)
        //入力した項目の個数をlocalstorageに入れる
        if (localStorage.getItem("name")) {
            let counter = localStorage.getItem("name")
            counter++
            localStorage.setItem("name", counter)
        } else {
            localStorage.setItem("name", 1)
            let counter = localStorage.getItem("name")
        }
        //配列を用いてlocalstorageに入れる
        if (localStorage.getItem("todos")) {
            let todotext = (JSON.parse(localStorage.getItem("todos")))
            todotext.push(input.value)
            localStorage.setItem("todos", JSON.stringify(todotext))
        } else {
            let todotext = []
            todotext.push(input.value)
            localStorage.setItem("todos", JSON.stringify(todotext))
        }

        //入力欄を空にする
        input.value = ""
    }
}

function delatelist() {
    localStorage.removeItem("todos")
    localStorage.removeItem("name")
    alert("削除が完了しました")
}

function loadlist() {
    let todotext = JSON.parse(localStorage.getItem("todos"))
    //繰り返す回数をtimesで定義する
    let times = localStorage.getItem("name")
    for (var item of todotext) {
        let li = document.createElement("li")
        li.innerText = item
        li.classList.add("list-group-item")
        ul.appendChild(li)
    }
}






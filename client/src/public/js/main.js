let socket = io('http://10.10.112.246:5000', {
	transports: ['websocket']
})

function getTodos () {
	socket.on('todos:read', async GET => {
		renderTodos(await GET)
	})
}

function postTodos (data) {
	socket.emit('todos:write', (data))
}

function updateTodos(data) {
	socket.emit('todos:update' , (data))
}


function deleteTodos (data) {
	socket.emit('todos:delete', data)
}


socket.on('todos:new', async GET => {
	renderTodos(await GET)
})


async function renderTodos (todos) {
	list.innerHTML = null
	for(let todo of todos) {
		let li = document.createElement('li')
		let span = document.createElement('span')
		let button = document.createElement('button')

		li.dataset.todoId = todo.todo_id
		span.textContent = todo.todo_text
		span.contentEditable = true
		button.textContent = 'X'

		li.append(span)
		li.append(button)
		list.append(li)

		button.onclick = () => {
			deleteTodos({ todoId: todo.todo_id })
			li.remove()
		}

		span.onkeyup = (event) => {
			span.textContent = span.textContent
			if(event.keyCode === 13) {
				console.log('nimadir')
				updateTodos({ todoId: todo.todo_id, text: span.textContent })
			} 
		}
	}
}


form.onsubmit = (event) => {
	event.preventDefault()
	postTodos({ text: input.value })
	input.value = ''
}

getTodos()
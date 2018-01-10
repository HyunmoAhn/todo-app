(function (window) {
	'use strict';
	let indexId = Number(localStorage.getItem('length'));
	let currentHash = window.location.hash.split('#/')[1];
	let list = JSON.parse(localStorage.getItem('list')) || [];
	const input = document.querySelector('[data-id="todo-input"]');
	const ul = document.querySelector('.todo-list');

	// make html element
	function createListElement(item) {
		if (item.isEdit) {
			const input = document.createElement('input');
			input.classList.add('edit');
			input.setAttribute('data-id', item.id);
			input.value = item.name;

			return input;
		}

		if (item.status === 'active') {
			const li = document.createElement('li');
			li.setAttribute('data-id', item.id);
			const div = document.createElement('div');
			div.classList.add('view');
			const input = document.createElement('input');
			input.type = 'checkbox';
			input.classList.add('toggle');
			const label = document.createElement('label');
			const text = document.createTextNode(item.name);
			label.appendChild(text);
			const button = document.createElement('button');
			button.classList.add('destroy');
			// button.innerHTML = 'x';

			div.appendChild(input);
			div.appendChild(label);
			div.appendChild(button);

			li.appendChild(div);

			return li;
		}

		if (item.status === 'completed') {
			const li = document.createElement('li');
			li.setAttribute('data-id', item.id);
			li.classList.add('completed');
			const div = document.createElement('div');
			div.classList.add('view');
			const input = document.createElement('input');
			input.type = 'checkbox';
			input.checked = true;
			input.classList.add('toggle');
			const label = document.createElement('label');
			const text = document.createTextNode(item.name);
			label.appendChild(text);
			const button = document.createElement('button');
			button.classList.add('destory');

			div.appendChild(input);
			div.appendChild(label);
			div.appendChild(button);

			li.appendChild(div);

			return li;
		}
	}

	// append new todo item in list
	function addTodoListInitial(value) {
		list.push({
			id: indexId,
			name: value,
			status: 'active',
			isEdit: false,
		});
		indexId++;
	}

	function editTodoList(id, key, value) {
		let target = list.find(item => item.id === id);

		Object.assign(target, target, {
			[key]: value,
		});
		renderList();
	}

	function deleteTodoList(id) {
		list = list.filter(item => item.id !== id);
		renderList();
	}

	function filterList() {
		if (currentHash === 'active') {
			return list.filter(item => item.status === 'active');
		} else if (currentHash === 'completed') {
			return list.filter(item => item.status === 'completed');
		} else {
			return list;
		}
	}

	function renderList() {
		const filteredList= filterList();

		ul.innerHTML = '';
		filteredList.forEach((item) => {
			ul.appendChild(createListElement(item));
		});
		document.querySelector('strong').innerHTML = filteredList.length;

		localStorage.setItem('length', list.length);
		localStorage.setItem('list', JSON.stringify(list));
	}

	// add todo list
	input.addEventListener('keypress', (e) => {
		if (e.keyCode === 13 && input.value) {
			addTodoListInitial(input.value);
			input.value = '';
			renderList()
		}
	});

	document.querySelector('.clear-completed').addEventListener('click', () => {
		list.forEach(item => {
			if (item.status === 'completed') {
				deleteTodoList(item.id);
			}
		});
	});

	ul.addEventListener('click', (e) => {
		const target = e.target;

		if (target.className === 'toggle') {
			const li = target.parentElement.parentElement;
			const nextState = li.className === 'completed' ? 'active' : 'completed';

			editTodoList(Number(li.getAttribute('data-id')), 'status', nextState);
		}

		if (target.className === 'destroy') {
			const li = target.parentElement.parentElement;

			deleteTodoList(Number(li.getAttribute('data-id')));
		}
	}, false);

	ul.addEventListener('dblclick', (e) => {
		const target = e.target;

		if (target.tagName === 'LABEL') {
			const li = target.parentElement.parentElement;

			editTodoList(Number(li.getAttribute('data-id')), 'isEdit', true);
			const edit = document.querySelector('.edit');
			const id = Number(edit.getAttribute('data-id'));
			edit.focus();

			edit.addEventListener('blur', () => {
				let target = list.find(item => item.id === id);

				if (!edit.value) {
					deleteTodoList(id);
				} else if (target.isEdit) {
					editTodoList(id, 'name', edit.value);
					editTodoList(id, 'isEdit', false);
				}
			});
			edit.addEventListener('keydown', (e) => {
				if (e.keyCode === 27) {
					editTodoList(id, 'isEdit', false);
				} else if (e.keyCode === 13) {
					edit.blur();
				}
			});
		}
	});

	window.onhashchange = () => {
		currentHash = window.location.hash.split('#/')[1];

		const aTag = document.querySelectorAll('.filters a');

		aTag.forEach(a => {
			a.className = '';
		});

		if (!currentHash) aTag[0].className = 'selected';
		else if (currentHash === 'active') aTag[1].className = 'selected';
		else aTag[2].className = 'selected';

		renderList();
	};

	// Your starting point. Enjoy the ride!
	renderList();
})(window);

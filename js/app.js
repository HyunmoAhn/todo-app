(function (window) {
	'use strict';
	let indexId = Number(localStorage.getItem('index')) || 1;
	let currentHash = window.location.hash.split('#/')[1];
	let list = JSON.parse(localStorage.getItem('list')) || [];
	const input = document.querySelector('[data-id="todo-input"]');
	const ul = document.querySelector('.todo-list');
	const toggleAll = document.querySelector('[data-id="toggle-all"]');

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
			button.classList.add('destroy');

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

	// edit todo item in list
	function editTodoList(id, key, value) {
		let target = list.find(item => item.id === id);

		Object.assign(target, target, {
			[key]: value,
		});
		renderList();
	}

	// delete todo item in list
	function deleteTodoList(id) {
		list = list.filter(item => item.id !== id);
		renderList();
	}

	// filter list todo list
	function filterList() {
		if (currentHash === 'active') {
			return list.filter(item => item.status === 'active');
		} else if (currentHash === 'completed') {
			return list.filter(item => item.status === 'completed');
		} else {
			return list;
		}
	}

	// if all items checked ToggleAll is check else not
	function checkToggleAll() {
		const completedList = list.filter(item => item.status === 'completed');

		if (list.length === completedList.length) {
			toggleAll.checked = true;
		} else {
			toggleAll.checked = false;
		}
	}

	// update html code
	function renderList() {
		const filteredList= filterList();

		ul.innerHTML = '';
		filteredList.forEach((item) => {
			ul.appendChild(createListElement(item));
		});
		document.querySelector('strong').innerHTML = list.filter(item => item.status === 'active').length;

		localStorage.setItem('length', String(indexId));
		localStorage.setItem('list', JSON.stringify(list));
		checkToggleAll();
	}

	// add todo list
	input.addEventListener('keypress', (e) => {
		if (e.keyCode === 13 && input.value) {
			addTodoListInitial(input.value);
			input.value = '';
			renderList()
		}
	});

	// clear completed item
	document.querySelector('.clear-completed').addEventListener('click', () => {
		list.forEach(item => {
			if (item.status === 'completed') {
				deleteTodoList(item.id);
			}
		});
	});

	// click event
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

	// double click event
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

	// toggleAll click event
	toggleAll.addEventListener('click', () => {
		const completedList = list.filter(item => item.status === 'completed');

		if (list.length === completedList.length) {
			list.forEach(item => item.status = 'active');
		} else {
			list.forEach(item => item.status = 'completed');
		}

		renderList();
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

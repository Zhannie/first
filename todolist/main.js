// var data     = (localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : {
//  	todo: []
//  },
	var template = document.getElementById('new'),
	listnav  = document.getElementById('filter'),
	nametask = document.getElementById('nametask'),
	nameproj = document.getElementById('nameproj'),
	prior    = document.getElementById('prior'),
	desc     = document.getElementById('desc');
	
// renderTodoList();

// new task button
document.getElementById('newbutton').addEventListener('click', function() {
	//open the empty template
	template.style.display = 'block';

	//close list navigation
	listnav.style.display = 'none';
});

	//save button
	document.getElementById('savenew').addEventListener('click', function() {
		valuenametask = nametask.value,
		valueproj     = nameproj.value,
		valueprior    = prior.value,
		valuedesc     = desc.value;
	
			if (!!(valuenametask)===true && !!(valueproj) === true && !!(valueprior) === true && !!(valuedesc) === true) {

				addItemToDOM(valuenametask, valueproj, valueprior, valuedesc);
			};

			// template.style.display = 'none';
			// listnav.style.display = 'block';
	});



// function addItem(item1,item2,item3,item4) {
// 	function addItem(value) {
// 		addItemToDOM(value);
// 		valuenametask = '';
// 		valueproj     = '';
// 		valueprior    = '';
// 		valuedesc     = '';

// 		data.todo.push(valuenametask, valueproj, valueprior, valuedesc);
// 		dataObjectUpdate();
// };
// };

// function renderTodoList() {
// 	if (!data.todo.length) return;

// 	for (var i = 0; i < data.todo.length; i++) {
// 		var value = data.todo[i];
// 		addItemToDOM(value);
// 	}
// }

// function dataObjectUpdate() {
// 	localStorage.setItem('todolist', JSON.stringify(data));
// }

function addItemToDOM(text1,text2,text3,text4) {
	
	var list = document.getElementById('list');

	var item = document.createElement('li');

	var taskname = document.createElement('h2');
 	taskname.innerText = text1;

	var pname = document.createElement('p');
	pname.innerText = "Project: " + text2;

	var pr = document.createElement('p');
	pr.innerText = "Priority: " + text3;
	pr.classList.add('right');

	var description = document.createElement('p');
	description.innerText = text4;
	description.classList.add('descr');


	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var change = document.createElement('button');
	change.classList.add('left');
	change.innerHTML = 'Изменить';

	var close = document.createElement('button');
	close.innerHTML = 'Закрыть';

	var swipe = document.createElement('button');
	swipe.classList.add('right');
	swipe.innerHTML = 'Развернуть';

	buttons.appendChild(change);
	buttons.appendChild(close);
	buttons.appendChild(swipe);
	list.appendChild(item);
	item.appendChild(taskname);
	item.appendChild(pname);
	item.appendChild(pr);
	item.appendChild(description);
	item.appendChild(buttons);
	// document.getElementById('list').appendChild(list);


};

	// cancel button

	document.getElementById('cancel').addEventListener('click', function() {
		template.style.display = 'none';
		listnav.style.display = 'block';
	})


import { createStore } from 'redux';
const initState = {};
const action = {
	type: 'init',
	payload: 'hello world',
};
const reducer = (state, action) => {
	return Object.assign({}, state, action);
};
const store = createStore(reducer, initState);
const INPUTDOM = document.getElementById('name');
const PREVIEWDOM = document.getElementById('preview');
const digestUI = () => {
	PREVIEWDOM.innerHTML = store.getState().payload;
	if (PREVIEWDOM.innerHTML.length > 20) {
		alert('good boy')
	}
};
const inputChange = () =>{
	let val = INPUTDOM.value;
	const action = {
		type: 'input_change',
		payload: val,
	};
	store.dispatch(action);
};
let counter = 0;
INPUTDOM.addEventListener('input', inputChange)
store.subscribe(digestUI);
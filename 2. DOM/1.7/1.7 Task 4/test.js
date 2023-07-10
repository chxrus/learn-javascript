function createTree(container, data) {
	if (Object.keys(data) == 0) return;

	console.log(data);

	const ul = document.createElement('ul');

	for (let key in data) {
		const li = document.createElement('li');
		li.textContent = key;
		ul.append(li);
		createTree(li, data[key]);
	}

	container.append(ul);
}

let data = {
	"Рыбы": {
		"форель": {},
		"лосось": {}
	},

	"Деревья": {
		"Огромные": {
			"секвойя": {},
			"дуб": {}
		},
		"Цветковые": {
			"яблоня": {},
			"магнолия": {}
		}
	}
};

const container = document.querySelector('.container');
createTree(container, data);
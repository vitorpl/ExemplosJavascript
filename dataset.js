const divData = document.getElementById('divData');

console.log(Object.prototype.toString.call(divData));

divData.innerText = `${divData.dataset.id} ${divData.dataset.nome}`;
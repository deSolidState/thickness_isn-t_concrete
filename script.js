let dataArr = [];

makePic(dataArr);

function makePic(arr) {
  const cont = document.getElementById('container');

  for (let i=0; i<arr.length; i++){
    const pic = document.createElement('img');
    pic.src = 'oonggubb/' + arr[i];
    pic.classList.add('gif');
    pic.setAttribute('alt', `${arr[i]} pic`);


    cont.appendChild(pic);
  }
  console.log('finished adding pics')
}

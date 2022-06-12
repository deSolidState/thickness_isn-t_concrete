let dataArr = ['01-thickness-isn't-concrete.png', '02-i'm-a-litte.png', '03-it-comes-from.PNG', '04-it-will-never.png', '05-there-was-a-time.png', '06-there-was-a-matter.png', '07-but-even.png', '08-thickness-isn't-concrete.png', '09-what-have-you.png', '10-there's-a-way.png', '11-there-used-to-be.png', '12-a-way-away.png', '13-a-thing-of.png', '14-a-couple-of-ideas.png', '15-a-for-of-in.png', '16-moisture-on-the-back.png', '17-a-race-remember.png', '18-here.png', '19-a-long-time.png', '20-a-minute.png', '21-and-you-and-i.png', '22-and-we're-not.png'];

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

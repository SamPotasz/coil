// console.log('hello!');

const showSprint = weekNumber => {

  // change all nav circles to small except for selected circle
  for( let el of document.getElementsByClassName('sprint-circle')) {
    el.classList.remove('sprint-picker-selected');
    el.classList.add('sprint-picker');
    
    if( el.id === `sprint-picker-${weekNumber}`){
      el.classList.remove('sprint-picker');
      el.classList.add('sprint-picker-selected');
    }
  }

  // hide all sprint-details
  const detailDivs = document.getElementsByClassName('sprint-details');
  for( let el of detailDivs ){
    el.style.display = 'none';
  };

  // hide all nav details (words under circles)
  for( let el of document.getElementsByClassName('nav-details') ){
    el.style.display = 'none';
  };

  document.getElementById(`nav-details-${weekNumber}`).style.display = '';
  document.getElementById(`sprint-details-${weekNumber}`).style.display = '';
}
// console.log('hello!');

const showSprint = weekNumber => {
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
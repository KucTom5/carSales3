const search = document.querySelector('.search');
const lo = document.querySelectorAll('lo');

const searchModel = e => {

  const text = e.target.value.toLowerCase();

  lo.forEach(el => {
    const task = el.textContent.toLowerCase();
    if (task.indexOf(text) !== -1) {
      el.closest(".widget").style.display = "block";
    } else {
      el.closest(".widget").style.display = "none";
    }
  })
}

search.addEventListener('keyup' , searchModel);

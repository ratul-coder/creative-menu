/* Lets start  */
const container = document.querySelector('.container');
/* Lets add a class */
document.querySelector('.open').addEventListener('click', () => {
			container.classList.add('change')
});

/* Lets remove the class */
document.querySelector('.close').addEventListener('click', () => {
			container.classList.remove('change')
})
/* Lets add color */
const colors = ['#6495ed', '#7fffda', '#ffa07a', '#f08080', '#afeeee'];

let i = 0;
Array.from(document.querySelectorAll('.link')).forEach(item => {
			item.style.cssText = `background-color: ${colors[i++]}`;
});

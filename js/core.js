document.querySelector('.js-btn').addEventListener('click',function(){
    document.querySelector('.js-btn').classList.add("active")
    document.querySelector('.js-btn').style.height="200px"
    document.querySelector('.js-btn').textContent="tejkdnfkj"
    var newhr = document.createElement('<p>Paragraph</p>');
    document.querySelector('.js-btn').insertAdjacentElement('afterend')
    const div = document.createElement('div');
    const header = document.createElement('h2');
    header.innerText = ''
    console.log(div)
    console.log(header)
})

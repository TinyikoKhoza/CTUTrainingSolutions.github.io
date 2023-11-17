let slideIndex = 0;
showSlides()

function showSlides(){
    let i;
    let slides = document.getElementsByClassName('mySlides')
    let dot = document.getElementsByClassName('dot')

    for(i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for(i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(' active', '')
    }

    slides[slideIndex-1].style.display = "block";
    dot[slideIndex -1].className += ' active';
    setTimeout(showSlides, 5000)
}

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight +150){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}

function checkForm(){
    let yes = document.getElementById('yes');
    let no = document.getElementById('no');
    let inputs= document.getElementsByTagName('input')
    let flag;

    if(yes.checked && no.checked){
        alert('Please select only one option on our Terms and Condition')
    }
    else if(no.checked && yes.unchecked){
        alert('Please except our Terms and Condition')
    }
    else if(no.checked){
        alert('Please agree to our Terms and Condition')}
    }
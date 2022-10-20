const wrongs = document.querySelectorAll('.wrong');
const quizArray = document.getElementsByClassName('quiz');

for (const wrong of wrongs) {
    wrong.addEventListener('click', function handleClick() {
        wrong.classList.add('wrongA');
})
};

const right = document.getElementsByClassName('right');

 right[0].addEventListener('click', function quiz2() {
    document.getElementById('quiz1').classList.add('hidden');
    document.getElementById('quiz2').style.display = 'block';
  
});

 right[1].addEventListener('click', function quiz3() {
    document.getElementById('quiz2').style.display = 'none';
    document.getElementById('quiz3').style.display = 'block';
});

right[2].addEventListener('click', function quiz4() {
    document.getElementById('quiz3').style.display = 'none';
    document.getElementById('quiz4').style.display = 'block';
});

right[3].addEventListener('click', function quiz5() {
    document.getElementById('quiz4').style.display = 'none';
    document.getElementById('quiz5').style.display = 'block';
});

right[4].addEventListener('click', function quiz6() {
    document.getElementById('quiz5').style.display = 'none';
    document.getElementById('quiz6').style.display = 'block';
});

right[5].addEventListener('click', function quiz7() {
    document.getElementById('quiz6').style.display = 'none';
    document.getElementById('quiz7').style.display = 'block';
});

right[6].addEventListener('click', function quiz8() {
    document.getElementById('quiz7').style.display = 'none';
    document.getElementById('quiz8').style.display = 'block';
});

right[7].addEventListener('click', function quiz9() {
    document.getElementById('quiz8').style.display = 'none';
    document.getElementById('quiz9').style.display = 'block';
});
right[8].addEventListener('click', function quiz9() {
    document.getElementById('quiz8').style.display = 'none';
    document.getElementById('quiz9').style.display = 'block';
    confetti();
    document.getElementById('bts').src = 'https://www.youtube.com/embed/oeh499eKlW0?&autoplay=1';
});


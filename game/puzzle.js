let checkDog = false;
let checkCat = false;

function swapImage() {
    document.getElementById('image1').src = 'cho1.png';
    document.getElementById('image2').src = 'meo2.png';
}

function randomImage1() {
    let flagNumber = Math.random() * 10;
    if (flagNumber > 5) {
        document.getElementById('image1').src = 'cho1.png';
        if (document.getElementById('image2').src.endsWith('cho2.png')) {
            alert('Bạn đã thắng !')
        }
    } else {
        document.getElementById('image1').src = 'meo1.png';
        if (document.getElementById('image2').src.endsWith('meo2.png')) {
            alert('Bạn đã thắng !')
        }
    }
}

function randomImage2() {
    let flagNumber = Math.random() * 10;
    if (flagNumber > 5) {
        document.getElementById('image2').src = 'cho2.png';
        console.log(document.getElementById('image1').src)
        if (document.getElementById('image1').src.endsWith('cho1.png')) {
            alert('Bạn đã thắng !');
        }
    } else {
        document.getElementById('image2').src = 'meo2.png';
        if (document.getElementById('image1').src.endsWith('meo1.png')) {
            alert('Bạn đã thắng !');
        }
    }
}

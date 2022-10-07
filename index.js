let buttonElems = document.querySelectorAll('button');
const containerLeft = document.getElementById('container1');
const containerRight = document.getElementById('container2');

buttonElems.forEach((el) => {
    el.setAttribute('title', `Открыть фото`);
    console.log("123");
    el.addEventListener('click', () => {
        switch(Array.from(buttonElems).indexOf(el)){
            case 0:
                {
                    containerLeft.style.width='98%';
                    containerRight.style.width='2%';

                    containerLeft.querySelector('img').style.opacity='1';
                    containerRight.querySelector('img').style.opacity='0';

                    containerLeft.querySelector('img').style.width = '400px';
                }
                break;
            case 1:
                {
                    containerLeft.style.width='50%';
                    containerRight.style.width='50%';

                    containerLeft.querySelector('img').style.opacity='1';
                    containerRight.querySelector('img').style.opacity='1';

                    containerRight.querySelector('img').style.width='100%';
                    containerLeft.querySelector('img').style.width = '100%';
                }
                break;
            case 2:
                {
                    containerLeft.style.width='2%';
                    containerRight.style.width='98%';

                    containerLeft.querySelector('img').style.opacity='0';
                    containerRight.querySelector('img').style.opacity='1';
                    
                    containerRight.querySelector('img').style.width = '400px';
                }
                break;
                default:
                  break;
                
        }
    });
})
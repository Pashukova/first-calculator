document.addEventListener("DOMContentLoaded", function() {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const action = ['-', '+', 'X', '/'];
    const out = document.querySelector('.calc-screen p');

    function clearAll() {
        a = '';
        b = '';
        sign = '';
        finish = false;
        out.textContent = 0;
    }

    document.querySelector('.ac').onclick = clearAll;

    document.querySelector('.buttons').onclick = (event) => {
        if (!event.target.classList.contains('btn')) return;
        if (event.target.classList.contains('ac')) return;

        const key = event.target.textContent;

        if (digit.includes(key)) {
            if (finish) {
                b = '';
                finish = false;
            }
            a += key;
            out.textContent = a;
        }

        if (action.includes(key)) {
            sign = key;
            b = a; 
            a = ''; 
            out.textContent = sign;
        }

        if (key === '=') {
            if (b === '') b = a;
            if (a && b && sign) {
                let result;
                switch (sign) {
                    case '+':
                        result = parseFloat(b) + parseFloat(a);
                        break;
                    case '-':
                        result = parseFloat(b) - parseFloat(a);
                        break;
                    case 'X':
                        result = parseFloat(b) * parseFloat(a);
                        break;
                    case '/':
                        result = parseFloat(b) / parseFloat(a);
                        break;
                    default:
                        break;
                }
                out.textContent = result;
                a = result; 
                finish = true; 
            }
        }
    }
});
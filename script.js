let ScreenValue = '0';

const MinusPlus = () => {
    if (ScreenValue.slice(-1) === '+' || ScreenValue.slice(-1) === '-' || ScreenValue.slice(-1) === '/' || ScreenValue.slice(-1) === '*') {
        ScreenValue += '(';
    }
}

const CheckForRightBracket = () => {
    let AmountLeftBracket = 0, AmountRightBracket = 1;
    for (let i = 0; i < ScreenValue.length; i++) {
        switch (ScreenValue[i]) {
            case(')'):
                AmountRightBracket++;
                break;
            case('('):
                AmountLeftBracket++;
                break;
        }
    }
    if (AmountLeftBracket >= AmountRightBracket){
        check();
        ScreenValue += ')';
        document.getElementById("screen").innerHTML = ScreenValue;
    }

}

let check = () => {
    if (isNaN(ScreenValue.slice(-1)) && ScreenValue.slice(-1) !== ')' && ScreenValue.slice(-1) !== '(') {
        ScreenValue = ScreenValue.slice(0, -1);
    }
}

let ClickButton = (ButtonValue) => {
    if (ScreenValue[0] === '0' && (!isNaN(ButtonValue) || ButtonValue === '(') && ScreenValue.length === 1) {
        ScreenValue = ScreenValue.slice(1, -1);
    }
    if (!(ScreenValue.slice(-1) === '(' && isNaN(ButtonValue) && ButtonValue !== '(' && ButtonValue !== '-')) {
        ScreenValue += ButtonValue;
        document.getElementById("screen").innerHTML = ScreenValue;
    }
    if (ScreenValue.length >= 10 && ScreenValue.length < 12) {
        document.getElementById('screen').style.fontSize = '350%';
    } else if (ScreenValue.length >= 12 && ScreenValue.length < 14) {
        document.getElementById('screen').style.fontSize = '300%';
    } else if (ScreenValue.length >= 14 && ScreenValue.length < 17) {
        document.getElementById('screen').style.fontSize = '250%';
    } else if (ScreenValue.length >= 17 && ScreenValue.length < 20) {
        document.getElementById('screen').style.fontSize = '200%';
    } else if (ScreenValue.length < 10) {
        document.getElementById('screen').style.fontSize = '400%';
    }
}

const AC = () => {
    ScreenValue = '0';
    document.getElementById("screen").innerHTML = ScreenValue;
}

const Del = () => {
    if (ScreenValue.length > 1 && ScreenValue[0] !== '0') {
        ScreenValue = ScreenValue.slice(0, -1);
        document.getElementById("screen").innerHTML = ScreenValue;
    } else {
        ScreenValue = '0';
        document.getElementById("screen").innerHTML = ScreenValue;
    }
}

let same = () => {
    let amount_left_bracket = 0, amount_right_bracket = 0;
    for (let i = 0; i < ScreenValue.length; i++) {
        switch (ScreenValue[i]) {
            case(')'):
                amount_right_bracket++;
                break;
            case('('):
                amount_left_bracket++;
                break;
        }
    }
    while (amount_left_bracket !== amount_right_bracket) {
        ScreenValue += ')';
        amount_right_bracket++;
    }
    ScreenValue = `${eval(ScreenValue)}`;
    if (ScreenValue.length < 10) {
        document.getElementById('screen').style.fontSize = '400%';
    }
    document.getElementById("screen").innerHTML = ScreenValue;
}

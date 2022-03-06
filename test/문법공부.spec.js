// 동적타이핑 언어 특징
function add(a, b) {
    if (typeof a === 'number') {

    }
    if (typeof b === 'number') {

    }
    return a + b;
}

// 정적타이핑 언어 특징
function add(a: Int, b: Int) {
    return a + b;
}

add(1, 2); // 3
add(1, '2'); // 12 => 컴파일할때 에러를 잡느냐 아니면 그냥 지나가냐

// this...
// 일반함수일때 전역에서 사용을 하면 무조건 window 객체 가르킴
function 디스() {
    for(let i=0; i<arguments.length; i++ ){
        let argument = arguments[i];
        console.log(argument);
    }
    this; // window
}
디스.bind(this);
디스.apply(this, 1,2,3,4);
디스.call(this, [1,2,3,4]);
디스(a,b,c,ce,d,r,d);

// 공통개발자 : 공통함수
function isNull() {
    if (arguments !== undefined) {
        for(let i=0; i<arguments.length; i++ ){
            let argument = arguments[i];
            console.log(argument);
        }
    }
}
function isNull(a) {}
function isNull(a, b) {}
function isNull(a, b, c) {}
function isNull(a, b, c, d) {}

isNull(1);
isNull(1,2,3)
isNull([1,2,3,4])

// 에로우함수는 항상 부모객체 this 상속받아서 가르킨다.
var 마이디스 = () => {
    this; // window
}

var 객체 = {
    일반함수() {
        this; // 객체 this.일반함수(), this.에로우함수();
        function 일반함수2() {
            this; // window
        }
        const 에로우함수2 = () => {
            this; // 객체
        }
    },
    에로우함수: () => {
        this; // window
    },
}

document.getElementById('#id').addEventListener("click", function(e) {
    this; // e.currentTarget
    console.log(this === e.currentTarget);
});

$('#id').on('click', function(e) {
   this; // e.currentTarget
   $(this); // jQuert(this)
});


// 함수를 만드는 방법 또는 호출하는 방법
// 람다 에로우 함수
const fnArrow = () => "kkkkk";
fnArrow();
const fnParamArrow = (a) => console.log(a);
fnParamArrow(12312312);

// 일반함수 이름이 있는경우
function getName(str, callback) {
    callback(str);
}

getName('kkkkk', upper);

function upper(str) {
    return str.toUpperCase();
}

document.getElementById('#id').addEventListener("click", onClick);

// 익명함수 이름이 없는 케이스
document.getElementById('#id').addEventListener("click", function(e) {
    console.log(e);
});
document.getElementById('#id').addEventListener("click", (e) => {
    console.log(e);
});


function onClick(e) {
    console.log(e);
}

// 익명함수
getName('yyyy', function(str) {
    return str.toUpperCase();
})

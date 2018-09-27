let rNum = Math.floor(Math.random() * 100);

// Bai 1
function bai1(input) {
    let a = 0, b = 1, c = 0;
    while (c < input) {
        c = a + b;
        if (c > input) break;
        console.log(c + " ");
        a = b;
        b = c;
    }
}

// Bai 2
function bai2(input) {
    let result = 1;
    do {
        input = Math.floor(Math.random() * 100);
        if (input < 0) break;
    } while (input < 0)
    for (let i = 1; i <= input; i++) {
        result *= i;
    }
    let out = console.log("Giai thừa của " + input + " là " + result);
    return out;
}

// Bai 3
function bai3(ip) {
    for (let i = 0; i < ip; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("* ");
        }
        document.write("</br>");
    }
    document.write("</br>");
    for (let i = 0; i < ip; i++) {
        for (let j = ip; j > i; j--) {
            document.write("* ");
        }
        document.write("</br>");
    }
    document.write("</br>");
    for (let i = 0; i < ip; i++) {
        for (let k = ip; k > i; k--) {
            document.write(".. ");
        }
        for (let j = 0; j <= i; j++) {
            document.write("* ");
        }
        document.write("</br>");
    }
    document.write("</br>");
    for (let i = 0; i < ip; i++) {
        for (let k = 0; k < i; k++) {
            document.write(".. ");
        }
        for (let j = ip; j > i; j--) {
            document.write("* ");
        }
        document.write("</br>");
    }
}

// Bai 4
function bai4(cd, cr) {
    do{
        if(cd<3||cr<3) {alert("Số này nhỏ hơn 3, mời nhập lại")};
    }while(cd<3||cr<3);
    for(let i = 0;i<cr;i++){
        for(let j = 0;j<cd;j++){
            if(i>0&&i<cr-1&&j>0&&j<cd-1)
            {
                document.write(".. ");
            }
            else{
                document.write("* ");
            }
        }
        document.write("</br>");
    }
}

// Bai 5
function bai5() {
    let tien_ban_dau = Number(prompt("Nhập số tiền ban đầu"));
    let thang_cho_vay = Number(prompt("Nhập số tháng cho vay"));
    let lai_suat_thang = Number(prompt("Nhập lãi suất hàng tháng"));
    let laiSuat=0;
    for(let i = 0; i<thang_cho_vay;i++)
    {
        laiSuat+=tien_ban_dau*lai_suat_thang;
    }
    alert("Lãi suất của " + thang_cho_vay + "tháng là " + laiSuat);
}
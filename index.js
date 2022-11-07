// BT 1
let n = 4;
if(n%2==0){
    console.log('Chẵn');
}
else{
    console.log('Lẽ');
}

// BT 2
let a = 10;
let b = 25;
let c = 20;
if(a>b && a > c)
{
    console.log('A Là Số Lớn Nhất');
}

else if(b>a && b >c)
{
    console.log("B Là Số Lớn Nhất");
}

else
{
    console.log('C Là Số Lớn Nhất')
}

// BT 3
let n=10 
let b=15
let i=20
do{
    b= b*i;
    i++;
}while(i <= n);
console.log(b)

// BT 4
let c=20
let b=10
while(b<=c)
{
    if (b%2==0)
    console.log(b)
    b++
}

// BT 5
let t=0
let array = [0,2,-4,8]
for (let a of array)
{if (a>0)
t+= a}
console.log(t)
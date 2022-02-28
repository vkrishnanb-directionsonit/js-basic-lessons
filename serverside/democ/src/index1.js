let m1=()=>console.log("Hello React");
m1();

let m2=(x)=>{console.log('Inside M2=',x);return x;};
m2(100000);

let m3=(x,y)=>{return x*y;};
var result=m3(100,5);
console.log(result);

function doTask(m)
{
    var z=m(10,2);
    console.log('Output doTask=' , z);    
}
//doTask(m3);
//doTask(m2);
//doTask(m1);
console.log('--------------');
let m4=doTask;
m4(m2);
class Employee
{
    id=1;
    name='ABCD';
    echo(){return this.id+' '+this.name+' ' +result;}
}
let e1=new Employee();
var str1=e1.echo();
console.log(str1);
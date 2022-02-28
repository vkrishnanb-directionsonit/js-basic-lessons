let m1=()=>console.log("Welcome");
m1();

class Employee
{
    constructor()
    {
     this.id=1;
     this.name='abcd';
    }
    echo() {
        console.log('echo');
    }
}

let obj1=new Employee();
obj1.echo();
console.log(obj1.id+" "+obj1.name);

/*
class Abcd
{
     no=1;
    city='chn';
}

let a1=new Abcd();
console.log(a1.no, a1.city);
*/
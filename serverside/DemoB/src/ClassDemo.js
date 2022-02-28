function echo()
{
    console.log('Echo !!!');
}
let m1=echo;
m1();
//function pattern to create Objects
function Customer()
{
    this.no=100;
    this.name='ABCD';
    this.getBalance=function()
    {
        return 10000;
    }
}
let c1=new Customer();
console.log(c1.no+' '+c1.name+' '+c1.getBalance());

//es6 class pattern
class Employee
{
    constructor()
    {
        this.id=1;
        this.name='abcd'
    }
    getSalary(){return 1000;}
}
let e1=new Employee();
console.log(e1.id +' '+e1.name+' ' +e1.getSalary());
class Person
{
    id;
    name;
    city;
    echo()
    {
        return this.name+' '+this.city;
    }
}
class Employee
{
    constructor()
    {
        this.salary=100000;
    }
    echo()
    {
        return 'Employee Echo';
    }
}
let emp=new Employee();
let p1=new Person();
p1.name='ABCD';
//emp.__proto__=p1;
console.log(emp);
console.log(emp.__proto__);
console.log('---------');

//emp.id=1000;
emp.name="Jobs";
//emp.city="Chennai";
emp.salary=50000;
console.log(emp);


emp.name='Bill';
emp.city='Chennai';
console.log(emp.echo());

function Students(rgno,name,clas,mark){
    this.regno=rgno;
    this.name=name;
    this.class=clas;
    this.mark=mark;
   
}

 Students.prototype.details=function(city,state){
        return `The Student ${this.name} class ${this.class} was scored ${this.mark} .he is from ${city} and state ${state}`
    }

const student1=new Students(1,"Mahroof","bca",78);
const student2=new Students(2,"ashfaq","Bcom",89);

student1.age=21;
console.log(student1)

Students.prototype.college="PA";

const full=Object.assign({},student1);
full.college=student1.college;

const main={...student1,college:student1.college}
console.log(main);
console.log(student1.details("machampady","kerala"))

let result=student1.details.call(student2,"Manjeshwer","kerala");
console.log(result)

let output=student1.details.apply(student2,["Manjeshwer","kasaragod"]);
console.log(output)

let outpu=student1.details.bind(student2,"Manjeshwer","kasaragod");
console.log(outpu())

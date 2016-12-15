function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
  this.courseLoad = {
    Science: 3,
    Math: 10
  };
}

Student.prototype.name = function(){
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.courses = function(){
  return this.courses;
};

Student.prototype.enroll = function(course){
  if(!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);

    if (this.courseLoad[course.department]) {
      this.courseLoad[course.department] += course.credits;
    } else {
      this.courseLoad[course.department] = course.credits;
    }
  }

};

function Course(name, department, credits){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

let student1 = new Student("Nico","Geeraldo");
let biology = new Course("Biology","Science",4);
let algebra = new Course("Algebra","Math",3);
let french = new Course("French","Language",3);
console.log(student1.courseLoad);
student1.enroll(biology);
student1.enroll(french);
student1.enroll(algebra);
student1.enroll(algebra);
console.log(student1.courseLoad);
console.log(student1.name());
console.log(student1.courses);

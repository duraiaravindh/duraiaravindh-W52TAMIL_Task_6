class Person {
    constructor(
      personName = "Durai",
      age = "27",
      email = "example@gmail.com",
      mobileNo = "9876543210",
      streetName = "RK street",
      area = "VOC Nagar",
      city = "Rajakadai",
      district = "Chennai",
      highestQualification = "B.E",
      schoolName = "RPC",
      sslcMark = "412/500",
      sslcYearOfCompletion = "2012",
      hscMark = "1020/1200",
      placeOfSchool = "Chennai",
      hscYearOfCompletion = "2014",
      collegeName = "Engineering College",
      department = "Civil",
      batch = "2014-2018",
      cgpa = "7.5",
      university = "Anna University",
      placeOfCollege = "Chennai",
      technicalSkills = "JavaScript",
      companyName = "Trimble",
      job = "Analyst",
      workExperience = "5 years"
    ) {
      this.personName = personName;
      this.age = age;
      this.email = email;
      this.mobileNo = mobileNo;
      this.streetName = streetName;
      this.area = area;
      this.city = city;
      this.district = district;
      this.highestQualification = highestQualification;
      this.schoolName = schoolName;
      this.placeOfSchool = placeOfSchool;
      this.sslcMark = sslcMark;
      this.sslcYearOfCompletion = sslcYearOfCompletion;
      this.hscMark = hscMark;
      this.hscYearOfCompletion = hscYearOfCompletion;
      this.collegeName = collegeName;
      this.placeOfCollege = placeOfCollege;
      this.batch = batch;
      this.department = department;
      this.cgpa = cgpa;
      this.university = university;
      this.technicalSkills = technicalSkills;
      this.companyName = companyName;
      this.job = job;
      this.workExperience = workExperience;
    }
    displayPersonalInfo() {
      console.log(
        `:::::: PERSONAL DETAILS :::::
  
        Name => ${this.personName},
        Age => ${this.age},
        email => ${this.email},
        Mobile Number => ${this.mobileNo}.`
      );
      console.log(
        `      Address :
          Street Name => ${this.streetName},
           Area => ${this.area},
            City => ${this.city},
             District => ${this.district}.`
      );
    }
    displaySchoolDetails() {
      console.log(
        `::::::: SCHOOL DETAILS :::::::
  
        School Name => ${this.schoolName},
        City => ${this.placeOfSchool},
        10th MARK => ${this.sslcMark} ,
        10th year of Completion => ${this.sslcYearOfCompletion},
        12th MARK: ${this.hscMark} ,
        12th year of Completion: ${this.hscYearOfCompletion}.
        `
      );
    }
    displayCollegeDetails() {
      console.log(
        `:::::: COLLEGE DETAILS ::::::
        
        College Name => ${this.collegeName},
        city => ${this.placeOfCollege},
        Batch => ${this.batch},
        Department => ${this.department},
        CGPA or grade => ${this.cgpa},
        University => ${this.university}.
        `
      );
    }
    displayWorkDetails() {
      console.log(
        `:::::: WORK DETAILS ::::::
        
        Company Name => ${this.companyName},
        job => ${this.job},
        Working Experience => ${this.workExperience}.
        `
      );
    }
  }
  
  const person1Details = new Person(
    "Guna",
    "27",
    "Gunakgs@gmail.com",
    "9984741471",
    "B.E",
    "Government Higher Secondary School",
    "378/500",
    "1001/1200",
    "College of Engineering",
    "2014-2018",
    "Electronics and Instrumentation Engineering",
    "7.0",
    "HTML5,CSS3,JavaScript,nodejs",
    "MERN stack developer",
    "2 years"
  );
  
  // console.log(person1Details);
  // console.log(new Person());
  
  const person2details = new Person();
  person2details.displaySchoolDetails();
  person2details.displayPersonalInfo();
  person2details.displayCollegeDetails();
  person2details.displayWorkDetails();
  person2details.displayCollegeDetails();
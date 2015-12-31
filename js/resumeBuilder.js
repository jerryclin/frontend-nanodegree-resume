/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("Jerry");



var bio = {
    "name" : "Jerry L.",
    "role" : "Front End Ninja",
    "contacts" : {
        "mobile" : "123-456-7890",
        "email" : "jerycwlin@hotmail.com",
        "github" : "jerryclin",
        "location" : "San Jose"
    }, 
    "picture_URL" : "images/profile.png",
    "welcome_message" : "Hello, I am an aspiring front end ninja",
    "skills" : ["javascript", "html", "css", "videography"]    //This is an array of string
};


var work = {
    "jobs" : [
        {
        "employer" : "Ninja Factory",
        "title" : "Front End Trainee",
        "location:" : "Industrial Town",
        "date" : "Feb 14th, 2015",
        "description" : "Helps writing HTML & CSS"
        },
         {
        "employer" : "Video Factory",
        "title" : "Videographer",
        "location:" : "San Jose",
        "date" : "Jan 14th, 2012",
        "description" : "Assist in videography"
        }
    ]
};

var education = {
    "schoolname" : "UBC",
    "degree" : "Master of Management"
};

var project = {
    "title" : "Front End Resume",
    "description" : "Resume built using javascript, html and css"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// intro
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

// bio
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture_URL));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message));
$("#header").append(HTMLskills.replace("%data%", bio.skills));
$("#header").append(HTMLemail.replace("%data%", bio.contacts));


// work
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[0].title));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[0].location));

// project
$("#projects").append(HTMLprojectStart);
$("#projects").append(HTMLprojectTitle.replace("%data%", project.title));
$("#projects").append(HTMLprojectDescription.replace("%data%", project.description));

// education
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%",education["schoolname"]));
$("#education").append(HTMLschoolDegree.replace("%data%", education["degree"]));







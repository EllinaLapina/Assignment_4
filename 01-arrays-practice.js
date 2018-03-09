/*eslint-env browser*/
//STEP 1
/*
var movies = ["Titanic", "Green mile", "Movie 3", "Movie 4", "Movie 5"]
window.console.log(movies[1]);
*/

//STEP 2
/*
var movies = new Array(5);
movies[0] = "movie 1";
movies[1] = "movie 2";
movies[2] = "movie 3";
movies[3] = "movie 4";
movies[4] = "movie 5";
window.console.log(movies[0]);
*/

//STEP 3
/*
var movies = new Array(5);
movies[0] = "movie 1";
movies[1] = "movie 2";
movies[2] = "movie 3";
movies[3] = "movie 4";
movies[4] = "movie 5";
movies[movies.length] = "movie 6";
window.console.log(movies.length);
*/

//STEP 4
/*
var movies = [];
movies[0] = "movie 1";
movies[1] = "movie 2";
movies[2] = "movie 3";
movies[3] = "movie 4";
movies[4] = "movie 5";
delete movies[0];
window.console.log(movies);
*/

//STEP 5
/*
var i;
var movies = [];
movies[0] = "movie 1";
movies[1] = "movie 2";
movies[2] = "movie 3";
movies[3] = "movie 4";
movies[4] = "movie 5";
movies[5] = "movie 6";
movies[6] = "movie 7";
for (i = 0; i<movies.length; i+=1) {
    window.console.log(movies[i]);
}
*/

//STEP 6
/*
var i;
var movies = [];
movies[0] = "movie 1";
movies[1] = "movie 2";
movies[2] = "movie 3";
movies[3] = "movie 4";
movies[4] = "movie 5";
movies[5] = "movie 6";
movies[6] = "movie 7";
for (i in movies) {
    window.console.log(movies[i]);
}
*/

//STEP 7

/*var movies = [];
movies[0] = "bovie 1";
movies[1] = "kovie 2";
movies[2] = "zovie 3";
movies[3] = "lovie 4";
movies[4] = "movie 5";
movies[5] = "povie 6";
movies[6] = "tovie 7";
    window.console.log(movies.sort());*/

//STEP 8

/*var i;
var movies = [];
movies[0] = "bovie 1";
movies[1] = "kovie 2";
movies[2] = "zovie 3";
movies[3] = "lovie 4";
movies[4] = "movie 5";
movies[5] = "povie 6";
movies[6] = "tovie 7";

var badmovies = [];
badmovies[0] = "bovie 11";
badmovies[1] = "kovie 22";
badmovies[2] = "zovie 33";

window.console.log("Movies I like: ");
for (i in movies) {
    window.console.log(movies[i]);
};
window.console.log("Movies I regret watching: ")
for (i in movies) {
    window.console.log(badmovies[i]);
};*/

//STEP 9

/*
var movies = [];
movies[0] = "bovie 1";
movies[1] = "kovie 2";
movies[2] = "zovie 3";
movies[3] = "lovie 4";
movies[4] = "movie 5";
movies[5] = "povie 6";
movies[6] = "tovie 7";

var badmovies = [];
badmovies[0] = "bovie 11";
badmovies[1] = "kovie 22";
badmovies[2] = "zovie 33";

movies = movies.concat(badmovies);
window.console.log(movies.sort().reverse());*/

//STEP 10

/*
var movies = [];
movies[0] = "bovie 1";
movies[1] = "kovie 2";
movies[2] = "zovie 3";
movies[3] = "lovie 4";
movies[4] = "movie 5";
movies[5] = "povie 6";
movies[6] = "tovie 7";

var badmovies = [];
badmovies[0] = "bovie 11";
badmovies[1] = "kovie 22";
badmovies[2] = "zovie 33";

movies = movies.concat(badmovies);
window.console.log(movies.sort().reverse().pop());
*/

//STEP 11

/*
var movies = [];
movies[0] = "bovie 1";
movies[1] = "kovie 2";
movies[2] = "zovie 3";
movies[3] = "lovie 4";
movies[4] = "movie 5";
movies[5] = "povie 6";
movies[6] = "tovie 7";

var badmovies = [];
badmovies[0] = "bovie 11";
badmovies[1] = "kovie 22";
badmovies[2] = "zovie 33";

movies = movies.concat(badmovies);
window.console.log(movies.sort().reverse().shift());
*/

//STEP 12

/*var movies = [];
movies[0] = "bovie 1";
movies[1] = "dontlikekovie 2";
movies[2] = "dontlikezovie 3";
movies[3] = "lovie 4";
movies[4] = "dontlikemovie 5";
movies[5] = "povie 6";
movies[6] = "tovie 7";

movies.splice(1, 2, "likemovie1", "likemovie2");
movies.splice(4, 1, "likemovie3");
window.console.log(movies);*/

//STEP 13

/*var employee1 = [];
employee1["id"] = 111;
employee1["name"] = "John Smith";
employee1["title"] = "Driver";
employee1["department"] = "Transportation";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 222;
employee2["name"] = "Kelly White";
employee2["title"] = "Sales person";
employee2["department"] = "Sales";
employee2["isCurrent"] = false;

var employees = [employee1, employee2];
window.console.log(employees[1].name);*/

//STEP 14
/*
var i;
var employee1 = [];
employee1["id"] = 111;
employee1["name"] = "John Smith";
employee1["title"] = "Driver";
employee1["department"] = "Transportation";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 222;
employee2["name"] = "Kelly White";
employee2["title"] = "Sales person";
employee2["department"] = "Sales";
employee2["isCurrent"] = false;

var employees = [employee1, employee2];
for (i in employees) {
    if (employees.hasOwnProperty(i)) {
    window.console.log(employees[i].name);}
}
*/

//STEP 15
/*var i;
var employee1 = [];
employee1["id"] = 111;
employee1["name"] = "John Smith";
employee1["title"] = "Driver";
employee1["department"] = "Transportation";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 222;
employee2["name"] = "Kelly White";
employee2["title"] = "Sales person";
employee2["department"] = "Sales";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 333;
employee3["name"] = "Bob Rogers";
employee3["title"] = "Vice President";
employee3["department"] = "Management";
employee3["isCurrent"] = false;

var employees = [employee1, employee2, employee3];
for (i in employees) {
    if (employees.hasOwnProperty(i)) {
    if (employees[i].isCurrent === true) {window.console.log(employees[i].name);}}
}*/

//STEP 16
/*
var i;
var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

for (i in movies) {
    var movieNames = movies[i].filter(function (item) {
        "use strict";
        return typeof item === "string";
    });
window.document.write(movieNames + "<br>");
}
*/

//STEP 17

/*var employees = ["Marta", "John", "Bob", "Kelly", "Brian"];
var showEmployee = function(emp) {
   "use strict";
    var i;
    for (i in emp) {
        window.document.write(emp[i] + "<br>");
    }
};
window.document.write("Employees:" + "<br>");
showEmployee(employees);*/


//STEP 18

/*var test = [58, '', 'abcd', true, null, false, 0];
test = test.filter(function (item) {
    "use strict";
    return item !== null;
    
});
test = test.filter(function (item) {
    "use strict";
    return item !== false;
});
test = test.filter(function (item) {
    "use strict";
    return item !== 0;
});
test = test.filter(function (item) {
    "use strict";
    return item !== '';
});

window.document.write(test);*/

//STEP 19

/*var items = [1, 2, 22, 45, 57, 662, 73, 88, 91, 11];
var item = function() {
    "use strict";
    var i = Math.floor(Math.random()*items.length);
    return items[i];
}
window.document.write(item(items));*/

//STEP 20

var items = [1, 2, 3, 487, 5, 6, 7, 8, 9, 11];
var result = function () {
    "use strict";
    var i, max = items[0];
    for (i = 1; i < items.length; i += 1) {
        if (max < items[i]) {
            max = items[i];
        }
    }
    return max;
};
window.document.write(result(items));












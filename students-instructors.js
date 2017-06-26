function StudentNames(students) {
    for (var i = 0; i < students.length; i++) {
        var obj = students[i];
        console.log(obj.first_name + ' ' + obj.last_name)
    }
}

function UserNames(users) {
    for (var key in users) {
        console.log(key);
        var keyArr = users[key];
        for (var i = 0; i < keyArr.length; i++) {
            var fullName = keyArr[i].first_name + keyArr[i].last_name;
            console.log((i + 1) + ' - ' + keyArr[i].first_name + ' ' + keyArr[i].last_name + ' - ' + fullName.length);
        }
    }
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

StudentNames(students);

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

 UserNames(users);
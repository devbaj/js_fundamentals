users = [
{
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
    }
},
{
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
},
{
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
    }
}
]

function userLangs(userList){
    for (var i in userList){
        var output = userList[i].fname + " " + userList[i].lname + " knows ";
        for (var j in userList[i].languages){
            output += userList[i].languages[j];
            if (j == userList[i].languages.length - 1){
                output += ". \n";
            }
            else if (j == userList[i].languages.length - 2){
                output += ", and ";
            }
            else {
                output += ", ";
            }
        }
        output += userList[i].fname + " is also interested in ";
        for (var j = 0; j < Object.keys(userList[i].interests).length; j++) {
            // console.log(Object.keys(userList[i].interests).length);
            // something is fucked up with these lengths, check it out
            for (var k = 0; k < Object.keys(userList[i].interests).length; k++){
                output += (userList[i].interests[j][k]);
                if (j == Object.keys(userList[i].interests).length-2){
                    output += " TEST "
                }
                output += ", ";
            }
        }
        console.log(output);
    }
}

userLangs(users)
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
        // output += userList[i].fname + " is also interested in ";
        // for (var j in userList[i].interests) {
        //     console.log("j is " + j)
        //     for (var k in userList[i].interests[j]){
        //         console.log("k is " + userList[i].interests[j][k]);
        //         if (k == userList[i].interests[j][k].length - 1){
        //             console.log("where the hell are you");
        //         }
        //         output += userList[i].interests[j][k] + ", ";
        //         if (j == userList[i].interests[ Object.keys(userList[i].interests).length ] -1){
        //             output += " TEST ";
        //         }
        //     }
        // }
        console.log(output);
    }
}

// var j = 0; j < Object.keys(userList[i].interests).length; j++
userLangs(users)
btn = document.getElementById("btn");
var dist1, dist;
btn.addEventListener('click', (e)=>{
    var x = document.getElementById("district").selectedIndex;
dist = document.getElementsByTagName("option")[x].value;
const btn = document.getElementById("btn");
dist1 = dist;
var c = dist1[dist1.length-1];
function nextCharacter(c) { 
    return String.fromCharCode(c.charCodeAt(0) + 1); 
}
c = nextCharacter(c);
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
var fragment = document.createDocumentFragment();
var table = document.createElement("table");
var i = dist1.length-1;
dist1 = setCharAt(dist1, i, c);
    var ref = firebase.database().ref("district/user");
    var body = document.getElementsByTagName("body")[0];
    ref.orderByKey().startAt(dist).endAt(dist1).on("child_added", function(data, prevChildKey) {
        var newPlayer = data.val();
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.name);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.father_name);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.dob);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.id);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.roll_no);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.school);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(newPlayer.district);
        cell.appendChild(cellText);
        row.appendChild(cell);

        table.appendChild(row);
});
 fragment.appendChild(table);
 body.appendChild(fragment);
});

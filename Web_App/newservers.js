const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});

var modal = document.getElementById('id01'); 
      window.onclick = function(event) { 
          if (event.target == modal) { 
              modal.style.display = "none"; 
          }
          
      }
      var btnclick = document.getElementById('smt');
            if(btnclick)
              btnclick.addEventListener('click', fnc);
          function fnc(e){
             e.preventDefault();
            var uname = document.getElementById("uname");
            var pw = document.getElementById("pw");
            //alert(pw.value);
            if(uname.value == "admin" && pw.value == "admin"){
              //alert(pw.value);
              modal.style.display = "none";
              var para = document.createElement("P");                 // Create a <p> element
              para.innerHTML = "Log in successful!";                // Insert text
              document.getElementById("logg").appendChild(para);
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
var table = document.getElementById("tbl");
var i = dist1.length-1;
dist1 = setCharAt(dist1, i, c);
    var ref = firebase.database().ref("district/user");
    var body = document.getElementsByTagName("body")[0];
    var rowth = document.createElement("tr");
    var th = document.createElement("th");
    var thText = document.createTextNode('Name');
    th.appendChild(thText);        
    rowth.appendChild(th);
    var th = document.createElement("th");
    var thText = document.createTextNode('Fathers Name');
    th.appendChild(thText);        
    rowth.appendChild(th);
    var th = document.createElement("th");
    var thText = document.createTextNode('DOB');
    th.appendChild(thText);        
    rowth.appendChild(th);
    var th = document.createElement("th");
    var thText = document.createTextNode('ID');
    th.appendChild(thText);        
    rowth.appendChild(th);
    var th = document.createElement("th");
    var thText = document.createTextNode('Roll No');
    th.appendChild(thText);        
    rowth.appendChild(th);
    var th = document.createElement("th");
    var thText = document.createTextNode('School');
    th.appendChild(thText);        
    rowth.appendChild(th);
    var th = document.createElement("th");
    var thText = document.createTextNode('District');
    th.appendChild(thText);        
    rowth.appendChild(th);
    table.appendChild(rowth);
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
            }
            else{
                modal.style.display = "none";
                var para = document.createElement("P");                 // Create a <p> element
                para.innerHTML = "Username or Password incorrect";                // Insert text
                document.getElementById("logg").appendChild(para);
              }
        }
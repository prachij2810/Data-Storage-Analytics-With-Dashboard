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
            var i = dist1.length-1;
            dist1 = setCharAt(dist1, i, c);
                var ref = firebase.database().ref("district/user");
                ref.orderByKey().startAt(dist).endAt(dist1).on("child_added", function(data, prevChildKey) {
                var newPlayer = data.val();
                var p = document.createElement("P");               // Create a <p> element
                p.innerText = "Student details:";              // Insert text
                document.body.appendChild(p); 
                var nam = document.createElement("P");               // Create a <p> element
                nam.innerText = "Name: " + newPlayer.name;              // Insert text
                document.body.appendChild(nam); 
                var fname = document.createElement("P");               // Create a <p> element
                fname.innerText = "Father's name: " + newPlayer.father_name;             // Insert text
                document.body.appendChild(fname); 
                var dobb = document.createElement("P");               // Create a <p> element
                dobb.innerText = "DOB: " + newPlayer.dob;             // Insert text
                document.body.appendChild(dobb); 
                var pid = document.createElement("P");               // Create a <p> element
                pid.innerText = "ID: " + newPlayer.id;             // Insert text
                document.body.appendChild(pid); 
                var roll = document.createElement("P");               // Create a <p> element
                roll.innerText = "Roll No: " + newPlayer.roll_no;             // Insert text
                document.body.appendChild(roll); 
                var schl = document.createElement("P");               // Create a <p> element
                schl.innerText = "School: " + newPlayer.school;             // Insert text
                document.body.appendChild(schl);
                var dst = document.createElement("P");               // Create a <p> element
                dst.innerText = "District " + newPlayer.district;             // Insert text
                document.body.appendChild(dst);
            });
                
            });
            }
            else{
                modal.style.display = "none";
                var para = document.createElement("P");                 // Create a <p> element
                para.innerHTML = "Username or Password incorrect";                // Insert text
                document.getElementById("logg").appendChild(para);
              }
        }

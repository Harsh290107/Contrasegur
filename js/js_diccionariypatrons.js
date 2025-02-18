/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

 /* global contents */


//var  diccionari = new Set(diccionari);
// var diccionari = new Array(["password", "123456", "123456789", "guest", "qwerty", "12345678", "111111", "12345"]);
var diccionari = new Set(["password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969",
    "shadow", "master", "mustang", "michael", "pussy", "superman", "fuckyou", "121212", "killer", "trustno1", "jordan",
    "jennifer", "hunter", "buster", "soccer", "harley", "batman", "tigger", "sunshine", "iloveyou", "fuckme", "charlie",
    "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", "112233", "george", "asshole", "computer", "michelle",
    "jessica", "pepper", "131313", "freedom", "pass", "fuck", "maggie", "159753", "ginger", "princess", "joshua", "cheese",
    "amanda", "summer", "love", "ashley", "6969", "nicole", "chelsea", "biteme", "matthew", "access", "yankees", "dallas",
    "austin", "thunder", "taylor", "matrix", "minecraft", "william", "corvette", "hello", "martin", "heather", "secret",
    "fucker", "merlin", "diamond", "hammer", "silver", "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick",
    "internet", "scooter", "orange", "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever",
    "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome",
    "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal",
    "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "gateway", "marina",
    "diablo", "bulldog", "compaq", "purple", "hardcore", "banana", "junior", "hannah", "porsche", "lakers", "iceman",
    "money", "cowboys", "london", "tennis", "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff",
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"]);


// var patrons = ["/123/", "/abc/", "/qwerty/"];
var patrons = [/098/, /0pm/, /0pñ/, /123/, /1aq/, /1qa/, /234/, /2ws/, /2zs/, /321/, /345/, /3ed/, /432/, /456/,
    /4rf/, /543/, /567/, /5tg/, /654/, /678/, /6yh/, /765/, /789/, /7uj/, /876/, /890/, /8ik/, /987/, /9ol/,
    /abc/, /aq1/, /aqw/, /asd/, /aze/, /bcç/, /bcd/, /bgt/, /bnm/, /bvc/, /cba/, /çcb/, /cçd/, /cde/, /çde/,
    /cvb/, /cxw/, /cxz/, /dcb/, /dçc/, /de3/, /def/, /dfg/, /dsa/, /dsq/, /edc/, /edç/, /efg/, /ert/, /ewq/,
    /eza/, /fds/, /fed/, /fgh/, /fr4/, /gfd/, /gfe/, /ghi/, /ghj/, /gt5/, /hgf/, /hij/, /hjk/, /hy6/, /ihg/,
    /ijk/, /iop/, /iuy/, /jhg/, /jih/, /jkl/, /ju7/, /ki8/, /kjh/, /kji/, /klm/, /klñ/, /lkj/, /lmn/, /lo9/,
    /mju/, /mlk/, /mnb/, /mnñ/, /mno/, /mp0/, /nbv/, /nhy/, /nml/, /nño/, /nop/, /ñlk/, /ñnm/, /ñop/, /ñp0/,
    /oiu/, /onm/, /oñn/, /opq/, /poi/, /pon/, /poñ/, /pqr/, /qa1/, /qaz/, /qpo/, /qrs/, /qsd/, /qwe/, /rew/,
    /rez/, /rfv/, /rqp/, /rst/, /rty/, /sdf/, /srq/, /stu/, /sw2/, /sz2/, /tgb/, /tre/, /tsr/, /tuv/, /tyu/,
    /uio/, /ujm/, /uts/, /uvw/, /uyt/, /vbn/, /vcx/, /vfr/, /vut/, /vwx/, /wer/, /wqa/, /wsx/, /wvu/, /wxc/,
    /wxy/, /xcv/, /xsw/, /xsz/, /xwv/, /xyz/, /yhn/, /ytr/, /yui/, /yxw/, /zaq/, /zer/, /zsx/, /zxc/, /zyx/];

var password = "";

function Iniciar() {
            var password = document.getElementById('password').value;
            window.alert("Password: " + password);
            Comprovar(password);
           
        }
function Comprovar(password) {
            // Check minimum length
            document.getElementById("minicar").checked = (password.length >= 8);

            // Initialize checks
            var hasNumber = false;
            var hasUppercase = false;
            var hasLowercase = false;
            var hasSpecial = false;
            
            // List of special characters 
            const specialChars = "ñçÑÇ!@#$%^&*(),.?:{}|<>";

            // Loop through each character in password
            for (var i = 0; i < password.length; i++) {
                var char = password.charAt(i);
                
                // Check if character is a number
                if (!isNaN(char) && char !== ' ') {
                    hasNumber = true;
                }
                
                // Check if character is uppercase
                if (char === char.toUpperCase() && isNaN(char)) {
                    hasUppercase = true;
                }

                // Check if character is lowercase
                if (char === char.toLowerCase() && isNaN(char)) {
                    hasLowercase = true;
                }

                // Check if character is a special character
                if (specialChars.includes(char)) {
                    hasSpecial = true;
                }
            }
            
            // Update checkboxes based on password properties
            document.getElementById("number").checked = hasNumber;
            document.getElementById("uppercase").checked = hasUppercase;
            document.getElementById("lowercase").checked = hasLowercase;
            document.getElementById("special").checked = hasSpecial;

            // Calculate password strength
            var base = 0;
            var exponente = password.length; // Use password length for exponent
            
            var base = 0;
            if (document.getElementById("number").checked) { base = base+10; }
            if (document.getElementById("uppercase").checked) { base = base+40; } 
            if (document.getElementById("lowercase").checked) { base =base + 40; } 
            if (document.getElementById("special").checked) { base =base+41; } 

            // Calculate computational cost
            CostComputacional = Math.pow(base, exponente) / 1e6; 
            nivel = (base * exponente) / 16;
            document.getElementById("nivel").value=nivel.toString();
            

                
            var nivel_robustes;
            if (CostComputacional >= 1e10) {
                nivel_robustes = 4;
            } else if (CostComputacional >= 1e8) {
                nivel_robustes = 3;
            } else if (CostComputacional >= 1e6) {
                nivel_robustes = 2;
            } else if (CostComputacional >= 1e3) {
                nivel_robustes = 1;
            } else {
                nivel_robustes = 0;
            }
             result = zxcvbn(password);
             zxcvbnScore = result.score;
             
             AnysProcessament = CostComputacional / (60 * 60 * 24 * 365); // Convert to years
             DiesProcessament = CostComputacional / (60 * 60 * 24); // Convert to days
             
            
            window.alert(
    "Password: " + password + "\n" +
    comprovanivelpassword(password) + "\n"+
    "- Robustness Level: " + nivel_robustes + "\n" +
    "It would have a Computational Cost for Brute Force of: " + CostComputacional.toExponential() + 
    ", meaning a machine operating at 1 MIPS could take up to " + AnysProcessament.toExponential() + 
    " years of processing, or approximately " + DiesProcessament.toExponential() + " days.\n" +
    "It would have a Robustness Level of: " + result.score + "/4, and a zxcvbn Score of: " + zxcvbnScore + "/4."
);


        }

function Keyboard(){
         
        document.getElementById("Teclat").hidden = !document.getElementById("Teclat").hidden;
    }
function table (){
        
       document.getElementById("taulaASCII").hidden = !document.getElementById("taulaASCII").hidden; 
    }
    var patrons = []; 
function readSingleFile(evt) {
    // Retrieve the first (and only!) file from the FileList object
    var f = evt.target.files[0];

    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result.trim(); // Trim to remove any leading/trailing whitespace
            alert(
                "Got the file.\n" +
                "Name: " + f.name + "\n" +
                "Type: " + f.type + "\n" +
                "Size: " + f.size + " bytes\n" +
                "Starts with: " + contents.substr(0, contents.indexOf("\n"))
            );

            // Check if the file starts with "/" to determine if it’s a pattern file
            if (contents.substr(0,1) === "/") {
                  
                 stream1 = contents.replaceAll("\r\n", ",");
                 stream2 = stream1.replaceAll("/", ""); 
                 stream3 = stream2.split(","); 
                 partrons = [];
                for ( i = 0; i < stream3.length; i++) {
                    patrons[i] = new RegExp(stream3[i]); 
                }
                alert("Patterns loaded: " + patrons.join(", "));
            } else {
               
                stream1 =contents.replaceAll("\n", ",");
                stream2 = stream1.split(",");
                for(i = 0; i <stream2.length ; i++){
                    diccionari.add(stream2[i]);
                }
                
                alert("Dictionary loaded: " + diccionari);
            }
        };
        r.readAsText(f); // Read the file as text
    } else {
        alert("Failed to load file");
    }
}  
  function diccionariPassCheck(password) {
    if (diccionari.includes(password)) {
       // window.alert("The password: " + password + " is too common. Choose a stronger one.");//
        return true;
    }else {
        
    }
    return false;
}


function teRepeticiones(password) {
    const repeticionesMultiples = /(.)\1{2,}/;
    if (repeticionesMultiples.test(password.toLowerCase())) {
        //window.alert("The password: "+ password +"has repeated characters. Try a stronger one.");//
        return true;
    }
    return false;
}

function checkpatrons(password) {
    for (var i = 0; i < patrons.length; i++) {
        if (patrons[i].test(password)) {
           //window.alert("The password: " + password+ " contains a common pattern. Try a stronger one.");//
            return true;
        }
    }
    return false;
}
 
function comprovanivelpassword(password){
    if (diccionariPassCheck(password)){
        return "the password its in  the list of commom password ";
    }
     if (checkpatrons(password)){
        return "the password has common patterns";
       
    }
   // if (teRepeticiones(password)){
      //  return "the password contains repeticiones " ;   
   // }
            
     if (!document.getElementById("uppercase").checked) {
        return "The password must contain at least one uppercase letter.";
    }
     if (!document.getElementById("lowercase").checked) {  
        return "The password must contain at least one lowercase letter.";
    }
     if (!document.getElementById("number").checked) {
        return "The password must contain at least one number.";
    }
     if (!document.getElementById("special").checked) {
        return "The password must contain at least one special character.";
    }
     if (!document.getElementById("minicar").checked) {
        return "The password is too short. It must have at least 8 characters.";
    }
    return "The password is strong.";
}

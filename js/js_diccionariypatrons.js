// Diferents idiomes per la GUI
const Idiomes_dft = [
    {
        "IdIdioma": "ca",
        "Titol": "Versió amb Base de Dades Contrasenyes Segures",
        "Username": "Usuari o correu: ",
        "Password": "Contrasenya: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": " Mínim 8 caràcters,",        
        "Majuscula": " almenys una lletra majúscula,",
        "Minuscula": " almenys una lletra minúscula,",
        "Numero": " almenys un número,",
        "Carespecial": " almenys un carácter especial.",
        "Robustesa": "Dèbil - Regular - Bona - Forta",
        "Inisessio": "Iniciar sessió",
        "Massacomu": "La contrasenya és massa comuna. Si us plau, tria una contrasenya més forta.",
        "Nopatrons": "La contrasenya no pot contenir patrons previsibles.",
        "Norepmult": "La contrasenya no pot contenir repeticions múltiples de caràcters.",
        "Majminnum": "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.",
        "Almcaresp": "La contrasenya ha de contenir almenys un caràcter especial.",
        "Almmincar": "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.",
        "Contrarob": "Contrasenya robusta!",        
        "Computacional": "\n\     - Tendria un Cost Computacional per Força Bruta de: ",
        "Maquina": " pel que una màquina a 1 MIPS podria arribar a necessitar ",
        "Processament": " anys de processament, es a dir, ",
        "Nivell": " dies.\n\     - Tendria un Nivell de Robustesa de: ",
        "Score": "/4, i un zxcvbn Score de: ",
        "Voldesar": "Vol desar l'inici de sessió?",
        "Diccionari": "Diccionari: ",
        "Patrons": "Patrons: ",
        "Mostrartaula": "Mostrar taula ASCII-HTML",
        "Amagartaula": "Amagar taula ASCII-HTML"
    },
    {
        "IdIdioma": "es",
        "Titol": "Versión con Base de Datos Contraseñas Seguras",
        "Username": "Usuario o correo: ",
        "Password": "Contraseña: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": " Mínimo 8 carácteres,",        
        "Majuscula": " almenos una letra mayúscula,",
        "Minuscula": " almenos una letra minúscula,",
        "Numero": " almenos un número,",
        "Carespecial": " almenos un carácter especial.",
        "Robustesa": "Débil - Regular - Buena - Fuerte",
        "Inisessio": "Iniciar sesión",
        "Massacomu": "La contraseña es demasiado común. Por favor, elige una contraseña más fuerte.",
        "Nopatrons": "La contraseña no puede contener patrones previsibles.",
        "Norepmult": "La contraseña no puede contener múltiples repeticiones de caracteres.",
        "Majminnum": "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.",
        "Almcaresp": "La contraseña debe contener al menos un carácter especial.",
        "Almmincar": "La contraseña es demasiado corta. Debe tener al menos 8 caracteres.",
        "Contrarob": "¡Contraseña robusta!",        
        "Computacional": "\n\     - Tendría un Coste Computacional por Fuerza Bruta de: ",
        "Maquina": " por lo que una máquina a 1 MIPS podría llegar a necesitar ",
        "Processament": " años de procesamiento, es decir, ",
        "Nivell": " días.\n\     - Tendría un Nivel de Robustez de: ",
        "Score": "/4, y un zxcvbn Score de: ",
        "Voldesar": "¿Quiere guardar el inicio de sesión?",
        "Diccionari": "Diccionario: ",
        "Patrons": "Patrones: ",
        "Mostrartaula": "Mostrar tabla ASCII-HTML",
        "Amagartaula": "Esconder tabla ASCII-HTML"
    },
    {
        "IdIdioma": "en",
        "Titol": "Secure Passwords Database Version",
        "Username": "User or email: ",
        "Password": "Password: ",
        "Mostrar": "Show: ",
        "Minimcar": " Minimum 8 characters,",        
        "Majuscula": " at least one capital letter,",
        "Minuscula": " at least one lowercase letter,",
        "Numero": " at least one number,",
        "Carespecial": " at least one special character.",
        "Robustesa": "Weak - Fair - Good - Strong",
        "Inisessio": "Log in",
        "Massacomu": "The Password is too common. Please choose a stronger Password.",
        "Nopatrons": "Password cannot contain predictable patterns.",
        "Norepmult": "The Password cannot contain multiple repetitions of characters.",
        "Majminnum": "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        "Almcaresp": "Password must contain at least one special character.",
        "Almmincar": "The Password is too short. It must be at least 8 characters long.",
        "Contrarob": "Strong Password!",        
        "Computacional": "\n\     - It would have a Brute Force Computational Cost of: ",
        "Maquina": " for what a 1 MIPS machine might need ",
        "Processament": " years of processing, that is, ",
        "Nivell": " days.\n\     - It would have a Robustness Level of: ",
        "Score": "/4, and a zxcvbn Score of: ",
        "Voldesar": "Do you want to save your login?",
        "Diccionari": "Dictionary: ",
        "Patrons": "Patterns: ",
        "Mostrartaula": "Show ASCII-HTML table",
        "Amagartaula": "Hide ASCII-HTML table"
    }
];
var Idiomes = Idiomes_dft;
var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");

//var  diccionari = new Set(diccionari);
  var SqlDiccionari = [];
var diccionarialt = [];
var patrons = [];
base=0; 
var diccionari_different = ["Password", "guest", "dragon", "baseball", "football", "monkey", "letmein", "696969", 
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
    "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", "oliver", "redsox", "player", "nikita"];
var diccionari = new Set(diccionari_different); 
var Diccionari = new Set(); 
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

var Password = "";

function Iniciar() {
    var Password = document.getElementById('Password').value;
    window.alert("Password: " + Password);
    Comprovar(Password);
}

function Comprovar(Password) {
    // Check minimum length
    document.getElementById("minicar").checked = (Password.length >= 8);

    // Initialize checks
    var hasNumber = false;
    var hasUppercase = false;
    var hasLowercase = false;
    var hasSpecial = false;
    
    // List of special characters 
    const specialChars = "ñçÑÇ!@#$%^&*(),.?:{}|<>";

    // Loop through each character in Password
    for (var i = 0; i < Password.length; i++) {
        var char = Password.charAt(i);
        
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
  
    // Update checkboxes based on Password properties
    document.getElementById("number").checked = hasNumber;
    document.getElementById("uppercase").checked = hasUppercase;
    document.getElementById("lowercase").checked = hasLowercase;
    document.getElementById("special").checked = hasSpecial;

    // Calculate Password strength
    var base = 0;
    var exponente = Password.length; // Use Password length for exponent
    
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
    
    result = zxcvbn(Password);
    zxcvbnScore = result.score;
    
    AnysProcessament = CostComputacional / (60 * 60 * 24 * 365); // Convert to years
    DiesProcessament = CostComputacional / (60 * 60 * 24); // Convert to days
    
    window.alert(
        "Password: " + Password + "\n" +
        comprovanivelPassword(Password) + "\n"+
        "- Robustness Level: " + nivel_robustes + "\n" +
        Idioma.Computacional + CostComputacional.toExponential() + 
        Idioma.Maquina + AnysProcessament.toExponential() + 
        Idioma.Processament + DiesProcessament.toExponential() + " days.\n" +
        Idioma.Nivell + result.score + Idioma.Score + zxcvbnScore + "/4."
    );
    window.alert(desar());
}

function Keyboard(){
    document.getElementById("Teclat").hidden = !document.getElementById("Teclat").hidden;
}

function table (){
    document.getElementById("taulaASCII").hidden = !document.getElementById("taulaASCII").hidden; 
}
function togglePassword() {
          const PasswordField = document.getElementById('Password');
          if (PasswordField.type === "Password") {
              PasswordField.type = "text";
          } else {
              PasswordField.type = "Password";
          }
      }
    

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

            // Check if the file starts with "/" to determine if it's a pattern file
            if (contents.substr(0,1) === "/") {
                stream1 = contents.replaceAll("\r\n", ",");
                stream2 = stream1.replaceAll("/", ""); 
                stream3 = stream2.split(","); 
                patrons = [];
                for (i = 0; i < stream3.length; i++) {
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

function diccionariPassCheck(Password) {
    if (diccionari.has(Password)) {
        return true; // Password is common
    }
    return false; // Password is not common
}

function teRepeticiones(Password) {
    const repeticionesMultiples = /(.)\1{2,}/;
    if (repeticionesMultiples.test(Password.toLowerCase())) {
        return true;
    }
    return false;
}

function checkpatrons(Password) {
    for (var i = 0; i < patrons.length; i++) {
        if (patrons[i].test(Password)) {
            return true;
        }
    }
    return false;
}

function comprovanivelPassword(Password) {
    if (diccionariPassCheck(Password) === true) {
        return "- The Password is too common.";
    } else if (checkpatrons(Password) === true) {
        return "- The Password contains common patterns.";
    } else if (teRepeticiones(Password) === true) {
        return "- The Password contains repeated characters.";
    } else if (!document.getElementById("number").checked || 
               !document.getElementById("uppercase").checked || 
               !document.getElementById("lowercase").checked) {
        return "- The Password must contain at least one uppercase letter, one lowercase letter, and a number.";
    } else if (!document.getElementById("special").checked) {
        return "- The Password must contain at least one special character.";
    } else if (!document.getElementById("minicar").checked) {
        return "- The Password must contain at least 8 characters.";
    } else {
        return "- The Password is strong!";
    }
}

function desar() {
    result = confirm("Vols guardar l'usuari i contrasenya?");
    if (result === true) {
        localStorage.setItem("username", document.getElementById("Username").value);
        localStorage.setItem("Password", document.getElementById("Password").value);
        const mWindow = window.open("desar.html", "_blank", "width=460, height=600, left=0, top=0, \n\
                    location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    }
}
 function showPassword(event) {
    event.preventDefault();  // prevent default form action
    event.stopPropagation(); // prevent event bubbling

    var x = document.getElementById("Password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


    function generatePassword(length = 12) {
    const lowercase = "abcdefghijklmnopqrstuvwxyzàèéíòóúüçñ";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÈÉÍÒÓÚÜÇÑ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=¡¿";
    const allChars = lowercase + uppercase + numbers + specialChars;

    function getRandomChar(set) {
        return set[Math.floor(Math.random() * set.length)];
    }

    let Password = [
        getRandomChar(lowercase),
        getRandomChar(uppercase),
        getRandomChar(numbers),
        getRandomChar(specialChars)
    ];

    while (Password.length < length) {
        Password.push(getRandomChar(allChars));
    }

    return Password.sort(() => Math.random() - 0.5).join('');
}
    function generateAndSetPassword() {
        document.getElementById('Password').value = generatePassword();
    }
function Print_Data(res) {
    for (var i in res) {
        for (var j in res[i]) {
            window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
        }
    }
}

var Diccionari = new Set(); 
var SqlDiccionari = [];
// Funció per carregar la base de dades ContraSegur.db
 function AlaWeb_SQLite(IdIdioma) {  
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        
        config = {
            locateFile: filename => `/dist/${filename}`
        };
        // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
        // We must specify this locateFile function if we are loading a wasm file from anywhere other than the 
        // current html page's folder.

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        // SELECT * FROM TblTextosGUI;
        alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
                SELECT * FROM TblTextosGUI;',
            // [], function(idiomes) {Print_Data(TblTextosGUI = idiomes.pop());}
            [], function(idiomes) {
                SQL_TextosGUI(IdIdioma, idiomes.pop());
            }
        ); 
        alasql('ATTACH SQLITE DATABASE contrasegur("db/ContraSegur.db"); USE contrasegur; \n\
                SELECT Password FROM TblDiccionari \n\
                WHERE IdIdioma IS NULL OR IdIdioma = "" OR IdIdioma = "' + IdIdioma + '";',
            [], function(diccionari) {SQL_Diccionari(diccionari.pop());} // TBLDICCIONARI CHANGES copied directly from him
        ); 
    }
    
window.onload = function() {
    AlaWeb_SQLite('ca'); // Initialize with default language
};

function SQL_TextosGUI(IdIdioma, TblTextosGUI) {
    Idiomes = TblTextosGUI;
    if (Idiomes.length == 0) {
        Idiomes = Idiomes_dft;
    }
    if(Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma) == undefined) {
        window.alert("GUI: not found");
        Idiomes = Idiomes_dft;
    }
}

function CanviarIdioma(IdIdioma) {
    // Update the language
   // window.alert("Switching language to: " + IdIdioma); 
    AlaWeb_SQLite(IdIdioma);
    // Change the language
    Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
    //window.alert("Idioma updated to: " + Idioma.IdIdioma);  
    
    document.title = Idioma.Titol;
    document.getElementById("username").innerHTML = Idioma.Username;
     document.getElementById("password").innerHTML = Idioma.Password;
}

  



 function SQL_Diccionari(TblDiccionari) {
        // window.alert("SQL_Diccionari IdIdioma = '" + IdIdioma + "'");    
        Diccionari.clear();
        SqlDiccionari = [];
        for (var i in TblDiccionari) {
            // console.log("TblDiccionari[" + i + "].Password: " + TblDiccionari[i].Password);
            Diccionari.add(TblDiccionari[i].Password);  
            SqlDiccionari[i] = TblDiccionari[i].Password;
        }
        // window.alert(Diccionari.size);  
        // if (Diccionari.length == 0) {
        if (Diccionari.size == 0) {
            window.alert("Idioma sense contrasenyes / Idioma sin contraseñas / Language without passwords!");
            Diccionari = diccionari;
            IdIdioma = "ca";
            IdIdioma_ant = "ca";
        } else {
            // window.alert("Contrasenyes en idioma / Contraseñas en idioma / Language passwords = '" + IdIdioma + "'");
        };
        // window.alert(TblDiccionari[0].Password);
   }

    function SQL_TextosGUI(IdIdioma, TblTextosGUI) {
        Idiomes = TblTextosGUI;
        if (Idiomes.length == 0) {
            Idiomes = Idiomes_dft;
        }
        if(Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma) == undefined) {
            window.alert("No s'han trobat textos de la GUI / Textos de la GUI no encontrados / GUI texts not found ");
            Idiomes = Idiomes_dft;
        }
    }  
  
   
        function update(IdIdioma) {
         const myWindow = window.open("", "_blank", "width=640, height=640, left=15, top=235,\n\
             location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
         myWindow.document.open();
         myWindow.document.write("<html><head><title>SQL UPDATE TblDiccionari for SQLite Sudio</title></head>" +
             "<body style='background-size: 640px 604px; " +
             'background-image: url("img/passwordCL.png"); background-repeat: no-repeat;' +
             "'><p><a href='https://sqlitesudio.netlify.app/&#39; target='_blank'> \n\
             <font size='+2'>SQL UPDATE TblDiccionari for SQLite Sudio IdIdioma='" + IdIdioma + "'</font></a></p>");
         // window.alert(SqlDiccionari);
         Diccionari.forEach (function(Password) {
             if (SqlDiccionari.includes(Password)) {
                 myWindow.document.write("<p>UPDATE TblDiccionari SET <br>&nbsp;&nbsp;&nbsp; \n\
                     MD5 = '" + md5(Password) + "', <br>&nbsp;&nbsp;&nbsp; \n\
                     SHA1 = '" + SHA1(Password) + "'<br> WHERE TblDiccionari.Password = '" + Password + "';</p>");
             }
         })
         myWindow.document.write("</body></html>");
         myWindow.document.close();            
     }
        function insert(IdIdioma) {
        const myWindow = window.open("", "_blank", "width=640,height=640,left=15,top=235,location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0");
        myWindow.document.open();

        myWindow.document.write(`
            <html>
                <head>
                    <title>SQL INSERT TblDiccionari for SQLite Studio</title>
                </head>
                <body style="background-size: 640px 604px; background-image: url('img/passwordCL.png'); background-repeat: no-repeat;">
                    <p>
                        <a href="https://sqlitesudio.netlify.app/" target="_blank">
                            <font size="+2">SQL UPDATE TblDiccionari for SQLite Studio IdIdioma='${IdIdioma}'</font>
                        </a>
                    </p>
                    <p>DELETE FROM TblDiccionari WHERE IdIdioma='${IdIdioma}';</p>
        `);

        Diccionari.forEach(function(Password) {
            if (SqlDiccionari.includes(Password)) {
                const md5Hash = md5(Password);
                const sha1Hash = SHA1(Password);
                myWindow.document.write(`
                    <p>INSERT INTO TblDiccionari(Password, IdIdioma, MD5, SHA1) VALUES ('${Password}', '${IdIdioma}', '${md5Hash}', '${sha1Hash}');</p>
                `);
            }
        });

        myWindow.document.write(`
                </body>
            </html>
        `);
        myWindow.document.close();
    }

        
  




// --------------------------------------

var x ;

function op()
{
   document.getElementById('main').style.display='block';
    // window.open('http//w.w.w.google.com','','200,200');
   
}

function cl()
{
    document.getElementById('main').style.display='none';
    
}

function opdataroom(){
    document.getElementById('dataroom').style.display='block';
}

function cldataroom()
{
    document.getElementById('dataroom').style.display='none';
    
}




// --------------------data collaction


function submitt()
{
    var fname = document.getElementById('fname').Value;
    var lname = document.getElementById('lname').Value;
    var email =  document.getElementById('email').Value;
    var passwold = document.getElementById('password').Value;
    var optioon = document.getElementById('optioon').Value;

    if(fname==''){
        document.getElementById('alt').style.display='block';
        alert('ok')
    }
}
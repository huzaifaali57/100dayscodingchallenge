alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );

alert( 1 && null && 2 );

alert( alert(1) && alert(2) );

alert( null || 2 && 3 || 4 );

var age = 15;
if (age >= 14 && age <= 90){
    alert("Age is between 14 to 90")
}

age = 11;
if (!(age >= 14 && age <= 90)){
    alert("Age is not between 14 to 90")
}

if (age < 14 || age > 90){
    alert("Age is not between 14 to 90")
}

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

let userName = prompt('Enter Login', '')
if(userName == 'Admin'){
    let password = prompt('Enter Password','')
    if(password == 'TheMaster'){
        alert('Welcome')
    }else if(password == '' || password == null){
        alert('Cancelled')
    }else{
        alert('Wrong Password')
    }
}else if(userName == '' || userName == null){
    alert('Cancelled')
}else{
    alert('I dont know you')
}
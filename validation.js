var fname=document.getElementById('fname');
var email=document.getElementById('email');
var contact=document.getElementById('contact');
var country=document.getElementById('country');
var program=document.getElementById('program');
var message=document.getElementById('message');

var nameer=document.getElementById('nameer');
var emailer=document.getElementById('emailer');
var contacter=document.getElementById('contacter');
var countryer=document.getElementById('countryer');
var messageer=document.getElementById('messageer');

var first=document.getElementById('first');
var second=document.getElementById("second");
var third=document.getElementById("third");

var next=document.getElementById('next');
var prev=document.getElementById('prev');
var submit=document.getElementById('submit');
var complete=document.getElementById('complete');

first.style.display="block";
prev.style.display="none";
submit.style.display="none";
next.addEventListener('click',function(){
    console.log("pres");
    if(first.style.display==="block"){
        if(fname.value==""){
            nameer.innerHTML="This Field is Required";
            return;
        }
        if(email.value==""){
            emailer.innerHTML="This Field is Required";
            return;
        }
        var namepat= /[\d\W]+/;
        var emailpat=/^[a-z][a-z0-9]+(@gmail.com)$/;
        let str=fname.value;
        if(!namepat.test(str)){
            nameer.innerHTML="";
        }
        else{
            nameer.innerHTML="Please Enter valid Name";
            return;
        }
        str=email.value;
        if(!emailpat.test(str)){
            emailer.innerHTML="Please Enter valid Email";
            return;
        }
        else{
            emailer.innerHTML="";
        }
        first.style.display="none";
        second.style.display="block";
        prev.style.display="block"
    }
    else if(second.style.display=="block"){
        if(contact.value==""){
            contacter.innerHTML="THis Field id Required";
            return;
        }
        if(country.value==""){
            countryer.innerHTML="THis Field is Required";
            return;
        }
        var contactpat=/^(\+91)?[\d]{10}$/
        let str=contact.value;
        if(!contactpat.test(str)){
            contacter.innerHTML="Please Enter Valid ContactNo";
            return;
        }
        else{
            contacter.innerHTML="";
        }
        var countrypat=/[\d\W]+/;
        str=country.value;
        if(countrypat.test(str)){
            countryer.innerHTML="Please Enter Valid CountryName";
            return;
        }
        else{
            countryer.innerHTML="";
        }
        second.style.display="none";
        third.style.display="block";
        next.style.display="none";
        submit.style.display="block";
    }
    
})
prev.addEventListener('click',function(){
    if(second.style.display=="block"){
        second.style.display="none";
        first.style.display="block";
    }
    else if(third.style.display=="block"){
        third.style.display="none";
        second.style.display="block";
    }
})

submit.addEventListener('click',function(){
        if(message.value==""){
            messageer.innerHTML="This Field is Required";
            return;
        }
        let str=message.value;
        var messagepat=/[\W]+/
        if(messagepat.test(str)){
            messageer.innerHTML="Message shouldn't contain special Characters";
            return;
        }
        else{
            message.innerHTML="";
        }
    third.style.display="none";
    complete.style.display="block";
    prev.style.display="none";
    submit.style.display="none";
})
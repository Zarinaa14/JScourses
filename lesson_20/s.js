

document.getElementById("register").addEventListener('submit', function(e){
	e.preventDefault();
	const [email,password]= [document.getElementById("email").value, document.getElementById("password").value];
	const attempt = firebase.auth().createUserWithEmailAndPassword(email, password);
	console.log("attempt");
	attempt.then(e => console.log(e));
	
	attempt.catch(e => console.error(e));
	
})
 
 
 firebase.auth().onAuthStateChanged(function(e){
	 console.log(firebase.auth().currentUser); 
	// console.log(firebase.auth().currentUser.emailVerified); 
	if(firebase.auth().currentUser !== null){
		document.getElementById("userName").innerText = firebase.auth().currentUser.email;
    if(firebase.auth().currentUser.emailVerified == false){
		  document.getElementById("login").style.display="none";
		  document.getElementById("register").style.display="none";
	       document.getElementById("sh").style.display="none";
	}	 }
	  if(firebase.auth().currentUser == null){
		  	  document.getElementById("map").style.display="none";
			    document.getElementById("exit").style.display="none";
			   
	  }
	

	 
 })
 document.getElementById('exit').addEventListener('click', function(e){
	 e.preventDefault();
	 firebase.auth().signOut()
	  .then(() => location.reload());
	 
 })
 function ss(){
	 
 }
 ss();
  
 document.getElementById("login").addEventListener('submit', function(e){
	e.preventDefault();
	const [email,password]= [document.getElementById("1-email").value
	, document.getElementById("1-password").value];
	
	 firebase.auth().signInWithEmailAndPassword(email,password)
	
	.then( e => location.reload())
	 .catch( e => alert(e.message));
	
})

var hide=document.getElementById('hide');
var val1=document.getElementById('val1');
var but=document.getElementById('but');

but.addEventListener('click', function(){
var res = (val1.value*val1.value*val1.value);
hide.innerHTML= res.toFixed(2);
});


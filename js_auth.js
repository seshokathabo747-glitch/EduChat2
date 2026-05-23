function signup(){

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
  .then(()=>{
    alert('Account created');
    location.href = 'index.html';
  })
  .catch(error=>{
    alert(error.message);
  });
}

function login(){

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
  .then(()=>{
    location.href='index.html';
  })
  .catch(error=>{
    alert(error.message);
  });
}

function logout(){
  auth.signOut();
  location.href='login.html';
}

function googleLogin(){

  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
  .then(()=>{
    location.href='index.html';
  });
}
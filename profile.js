// profile.js

const user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(user => {

  if(user){

    const uid = user.uid;

    db.ref("users/" + uid).on("value", snapshot => {

      const data = snapshot.val();

      if(data){

        document.getElementById("username").innerText =
          data.name || "EduChat User";

        document.getElementById("bio").innerText =
          data.bio || "No bio yet";

        document.getElementById("location").innerText =
          "📍 " + (data.location || "South Africa");

        document.getElementById("school").innerText =
          "🎓 " + (data.school || "Student");

        if(data.profileImage){
          document.getElementById("profileImage").src =
            data.profileImage;
        }

        if(data.coverPhoto){
          document.getElementById("coverPhoto").style.backgroundImage =
            `url(${data.coverPhoto})`;
        }

      }

    });

  }

});


// PROFILE IMAGE

document.getElementById("profileInput")
.addEventListener("change", uploadProfileImage);

function uploadProfileImage(e){

  const file = e.target.files[0];

  const storageRef =
    firebase.storage().ref("profiles/" + file.name);

  storageRef.put(file).then(snapshot => {

    snapshot.ref.getDownloadURL().then(url => {

      db.ref("users/" + auth.currentUser.uid)
      .update({
        profileImage:url
      });

    });

  });

}


// COVER PHOTO

document.getElementById("coverInput")
.addEventListener("change", uploadCoverPhoto);

function uploadCoverPhoto(e){

  const file = e.target.files[0];

  const storageRef =
    firebase.storage().ref("covers/" + file.name);

  storageRef.put(file).then(snapshot => {

    snapshot.ref.getDownloadURL().then(url => {

      db.ref("users/" + auth.currentUser.uid)
      .update({
        coverPhoto:url
      });

    });

  });

}


// EDIT PROFILE

function editProfile(){

  const newName =
    prompt("Enter new username");

  const newBio =
    prompt("Enter new bio");

  db.ref("users/" + auth.currentUser.uid)
  .update({

    name:newName,
    bio:newBio

  });

}
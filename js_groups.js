function createGroup(){

  const name = document.getElementById('groupName').value;

  db.ref('groups').push({
    name:name,
    createdBy: auth.currentUser.email
  });

  alert('Group Created');
}
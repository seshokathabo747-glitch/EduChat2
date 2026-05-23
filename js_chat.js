const messagesRef = db.ref('messages');

function sendMessage(){

  const message = document.getElementById('messageInput').value;

  if(message === '') return;

  messagesRef.push({
    user: auth.currentUser.email,
    text: message,
    time: Date.now()
  });

  document.getElementById('messageInput').value='';
}

messagesRef.on('child_added', snapshot => {

  const msg = snapshot.val();

  const div = document.createElement('div');

  div.classList.add('message');

  div.innerHTML = `
    <b>${msg.user}</b>
    <p>${msg.text}</p>
  `;

  document.getElementById('messages').appendChild(div);
});
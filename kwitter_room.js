
const firebaseConfig = {
      apiKey: "AIzaSyCve-ipYdvCfeuwdGm4KbYxcZTQtSqW_1A",
      authDomain: "kwitter-3dd03.firebaseapp.com",
      databaseURL: "https://kwitter-3dd03-default-rtdb.firebaseio.com",
      projectId: "kwitter-3dd03",
      storageBucket: "kwitter-3dd03.appspot.com",
      messagingSenderId: "325635888067",
      appId: "1:325635888067:web:08e0896c7dff9c98776376"
    };
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      
      });});}
getData();

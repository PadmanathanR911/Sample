const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyByHVn37Jb7aLPd87URaphkPoOCXPbQbag",
    authDomain: "contactform-c885f.firebaseapp.com",
    databaseURL: "https://contactform-c885f-default-rtdb.firebaseio.com",
    projectId: "contactform-c885f",
    storageBucket: "contactform-c885f.appspot.com",
    messagingSenderId: "44789853934",
    appId: "1:44789853934:web:3dbc6e7194fab9a6fbcdff"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

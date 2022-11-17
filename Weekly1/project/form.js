const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");

function formsubmit() {
    alert("Data Anda Sudah Terkirim \n" + firstname.value + " " + lastname.value +
        "\n" + email.value + "\n" + message.value)
}

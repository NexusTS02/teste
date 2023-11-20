import emailjs from '@emailjs/browser'

const templateParams = {
    from_name: name,
    email: email
}

emailjs.send("service_331xctp","template_1gppz0c", "Z2x9UzdhqMzX5_rkv")
.then((response) =>{
console.log("EMAIL ENVIADO", response.status, response.text)
setName('')
setEmail('')

}, (err) =>{
    console.log("ERRO: ", err)
})
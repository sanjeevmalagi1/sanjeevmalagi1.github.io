<template>
    <div id="Contact" class="contact">
        <h1>Contact Me</h1>
        <div class="columns">
        <form v-on:submit="sendZap" class="column is-two-third-tablet is-half-desktop">
            <div class="field">
                <div class="control">
                    <input required name="name" class="input" type="text" placeholder="Your Name">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input required name="email" class="input" type="email" placeholder="Enter Email">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <textarea required name="message" class="textarea" placeholder="Your Message"></textarea>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button type="reset" class="button is-danger is-outlined">Reset</button>
                    <button type="submit" class="button is-primary is-outlined is-pulled-right">Submit</button>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Contact',
    methods: {
        sendZap: function(event){
            //https://hooks.zapier.com/hooks/catch/1061396/1l321g/
            const { name,email,message } = event.target;
            axios
            .get(`https://hooks.zapier.com/hooks/catch/1061396/1l321g/?name=${name.value}&email=${email.value}&message=${message.value}`)
            .then(response => {
                alert("Yay! Your Message has been sent.I contact you soon");
            })
            .catch(e=>{
                alert("Oops! Something went wrong.Why dont you use my email.")
                console.log(e);
            })
            console.log(event.target.name.value);
            
            event.preventDefault();
            
        }
    }
}
</script>
<style>
.contact {
    padding: 50px;
    color: white;
    background: #1f2139;
}
.contact h1{
    font-size: 2em;
    text-align: center;
}
.contact form{
    margin: auto;
    padding-top: 35px;
}
.contact input{
    background: #171829;
    border: none;
    color: aliceblue;
}
.contact input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}
.contact textarea{
    background: #171829;
    border: none;
    color: aliceblue;
}
.contact textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
}
</style>

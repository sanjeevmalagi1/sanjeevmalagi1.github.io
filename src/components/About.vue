<template>
    <div id="About" class="about">
        <div class="container columns">
            <div class="column is-6-tablet">
                <h1>Who is this guy ?</h1>
                
                <p>
                    Hi!! I'm Sanjeev. I am a Web Developer. I have been coding for atleast 3 years.
                    I have passion for developing fast & intuitive Website and Applications. 
                </p>
                <p>
                    I like to work with new technologies and I always keeps an eye out for tech updates and best practices. I am always eager to learn new things and to implement what I learn.
                </p>
                <p>
                    I am currently working as Full-Stack Developer for a Statup called Zoyo Parking. I also do freelancing projects.
                </p>
                <div class="resume">
                    <a href="https://sanjeevmalagi1.github.io/Sanjeev_Resume.pdf" target="_blank" class="button is-primary is-large is-outlined">
                        <i class="fa fa-newspaper-o" />View My Résumé 
                    </a>
                </div>
            </div>
            <div class="column is-6-tablet skills">
                <h1> What Skills have you got ? </h1>
                <div class="progressbars">
                    
                    <div class="columns is-gapless">
                        <div class="column is-2 name">Javascript</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="85" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">HTML 5</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="85" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">CSS 3</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="80" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">React</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="75" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">Node Js</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="70" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">MongoDB</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="60" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">Firebase</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="75" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">Angular</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="65" max="100"></progress></div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column is-2 name">PHP</div>
                        <div class="column is-10"><progress class="progress is-medium is-primary" value="55" max="100"></progress></div>
                    </div>
                    
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About'
}
</script>
<style>
.about{
    margin: auto;
    background: #1f2139;
    padding-top: 50px;
    padding-bottom: 50px;
    color: white;
}
.about .container {
    margin: auto;
}
.about h1{
    text-align: center;
    font-size: 2.5em;
}
.about p{
    padding: 20px;
    font-size: 1.2em;
}
.about .resume{
    text-align: center;   
}
.about .fa{
    margin-right: 7px;
}
.about .columns{
    padding: 0px;
}
.about .skills .progressbars{
    padding: 25px;
}
.about progress{
    border-radius:unset;
}
figure img{
    justify-content: center;
}
</style>


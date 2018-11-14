<template>
    <div id="Stats" class="stats">
        <h2>Stats</h2>
        <div class="columns">
            <div class="column is-one-fourth">
                <div class="number">28</div>
                <div class="desc">Repos</div>
            </div>
            <div class="column is-one-fourth">
                <div class="number">18</div>
                <div class="desc">Projects</div>
            </div>
            <div class="column is-one-fourth">
                <div class="number">3</div>
                <div class="desc">Customers</div>
            </div>
            <div class="column is-one-fourth">
                <div class="number">2</div>
                <div class="desc">Years Experience</div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'Stats'
}
</script>
<style>
.stats {
    padding-top: 30px;
    padding-bottom: 60px;
    width: 80%;
    margin: auto;
    text-align: center;
}
.stats h2 {
    font-size: 2.5em;
    padding: 15px;
}
.stats .column{
    border: 2px #00d1b2 solid;
    border-radius: 25px;
    margin: 10px;
}
.stats .column:hover{
    background: #00d1b2;
    color: white;
}
.stats .number{
    color: inherit;
    background: inherit;
    font-size: 2em;
    margin: auto;
}
.stats .desc{
    font-size: 1.5em;   
}
</style>

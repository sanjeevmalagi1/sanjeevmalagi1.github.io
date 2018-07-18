<template>
    <div id="projects" class="projects">
        <h1>Projects</h1>
        <div class="spinner" v-if="projects.loading">Loading....</div>
        <div class="spinner" v-if="projects.error">Oops! Somethinh went wrong...</div>
        <div class="columns is-multiline">
            <div v-if="!projects.loading" class="column is-one-third" v-for="project in projects.data" v-bind:key="project.Name">
                <Project v-if="!!project" v-bind:project="project" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Project from './Project.vue'
export default {
  name: 'Projects',
  data() {
      return {
          projects : {
          loading : true,
          data : [],
          error : false
        }
      }
  },
  components:{
      Project
  },
  mounted(){
       axios
      .get('https://portfolio-77952.firebaseio.com/Projects.json')
      .then(response => {
          this.projects.loading = false;
          this.projects.data = response.data;
          this.projects.error = false;
          
      })
      .catch(e=>{
          console.log(e);
          this.projects.loading = false;
          this.projects.error = true;
      })
  }
}
</script>
<style>
.projects{
    padding-top: 10px;
    padding-bottom: 30px;
    width: 90%;
    margin: auto;
}
.projects h1 {
    font-size: 2.5em;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.projects .spinner {
    text-align: center;
}
</style>

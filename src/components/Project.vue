<template>
    <div id="Projects" class="project">
        <img :src='project.Pic'>
            <h3>{{project.Name}}</h3>
            <a class="overlay">
                <div class="text">
                    <i class="fa fa-eye"></i>
                </div>
            </a>
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: ['project'],
    data(){
        return {

        }
    }
}
</script>
<style>
.project{
    position: relative;
}

.project h3{
    text-align: center;
    font-weight: 600;
}

.project .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  margin: auto;
  opacity: 0;
  transition: .5s ease;
  background-color: #1f2139;
}

.project:hover .overlay {
  opacity: 0.8;
}

.project .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.project .text i{
    font-size: 4em;
}
</style>


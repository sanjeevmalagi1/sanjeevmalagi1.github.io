<template>
    <div class="social">
            <ul class="list">
                <li class="link">
                    <a href="https://github.com/sanjeevmalagi1" class="icon" target="_blank">
                        <i class="fa fa-github"></i>
                    </a>
                </li>
                <li class="link">
                    <a href="https://stackoverflow.com/users/5924658/sanjeev-malagi" class="icon" target="_blank">
                        <i class="fa fa-stack-overflow"></i>
                    </a>
                </li>
                <li class="link">
                    <a href="https://in.linkedin.com/in/sanjeev-malagi-652599106" class="icon" target="_blank">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
  name: 'SocialLinks'
}
</script>
<style>
.list{
    margin: 20px;
}
.list li{
    display: inline;
    font-size: 2em;
    margin: 10px;
}
.icon{
    height: 60px;
    width: 60px;
    border: white solid 2px;
    border-radius: 50%;
}
</style>

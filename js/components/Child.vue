<template>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">I'am Child</div>

                    <div class="panel-body">
                        <p>Love counter = {{love}}</p>
                        <button class="btn btn-primary" @click="sendLoveToParent">Send love to parent</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    export default {
        mounted() {
            this.love = this.loveToChild;
        },
        watch :{
          loveToChild : function(){
            this.love = this.loveToChild
          }
        },
        data : function(){
          return {
            love : 0
          }
        },
        props : ['loveToChild'],
        methods : {
          sendLoveToParent : function(){
            this.$emit('loveFromChild', {love : 3});
          }
        }
    }
</script>

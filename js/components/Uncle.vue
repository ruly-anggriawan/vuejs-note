<template>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">I'am Uncle</div>
                    <div class="panel-body">
                      <p>Love counter = {{love}}</p>
                        <button class="btn btn-primary" @click="sendLoveToBro">Send love to bro</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
  import bus from '../app.js';

    export default {
        mounted() {
          bus.$on('loveToMyChildUncle', function(data){
            this.love += data.love;
          }.bind(this));
        },
        data : function(){
          return {
            love : 0
          }
        },
        methods : {
          sendLoveToBro : function(){
            bus.$emit('loveToBro', {love:2});
          }
        }
    }
</script>

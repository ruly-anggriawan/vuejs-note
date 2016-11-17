<template>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">I'am Parent</div>
                    <div class="panel-body">
                        <p>Love counter = {{love}}</p>

                        <div class="row">
                          <div class="col-md-2">
                            <button class="btn btn-primary" @click="sendLoveToChild">Send love to child</button>
                          </div>
                          <div class="col-md-2">
                            <button class="btn btn-primary" @click="sendLoveToBro">Send love to bro</button>
                          </div>
                        </div>

                        <child v-on:loveFromChild="incrementLove" :love-to-child="loveToChild"></child>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    import bus from '../app.js';

    export default {
        mounted() {
            bus.$on("loveToBro", function(data){
              this.love += data.love;
            }.bind(this));
        },
        data : function(){
          return {
            love : 0,
            loveToChild : 0
          }
        },
        methods:{
          incrementLove : function(data){
            this.love += data.love;
          },
          sendLoveToChild : function(){
            this.loveToChild+=3;
          },
          sendLoveToBro : function(){
            bus.$emit('loveToMyChildUncle', {love:2});
            console.log('parent');
          }
        }

    }
</script>

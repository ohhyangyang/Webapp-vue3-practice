<template>
    <div v-show="targetTeam == team.id">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            Add a comment
                        </slot>
                    </div>

                    <div class="modal-body">
                        <input type="text" v-model="comment">
                    </div>

                    <div class="modal-footer">
                            
                            <button class="modal-default-button" @click="onsubmit">
                                OK
                            </button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
    team: {
        type: Object,
        default: null,
    },
    targetTeam: {
        type: Number,
        default: null
    }
})

const emits = defineEmits(['submitFavorite'])

const comment = ref('');

const onsubmit = () => {
    emits("submitFavorite", {id: props.targetTeam, comment: comment.value})
}



</script>

<style scoped lang="css">
.modal-mask {
  position: relative;
  z-index: 9998;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  position: absolute;
  left: 2rem;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header{
  margin-top: 0;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;

  input {
    border: grey solid 1px;
    width: 100%;
  }
}

.modal-default-button {
    background-color: #42b983;
    color: #fff;
    width: 60px;
}

</style>
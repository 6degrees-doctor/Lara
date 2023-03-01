<template>
  <div>
    <navb />
    <Nuxt />
      <homefooter />
      
  </div>
</template>


<script>
import navb from '~/components/navb.vue'
import homefooter from '~/components/homefooter.vue';

export default {
  name: 'default',
  components:{
    navb,
    homefooter
}
  
}


</script>


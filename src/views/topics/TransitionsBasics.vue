<template>
  <article id="css-transitions-basics">
    <div class="container">
      <Example class="mt-2">
        <template #heading>Transition Options</template>
        <div>
          <p class="paragraph">
            <b>ease</b>: the change starts slow then go faster then finishes slow
          </p>

          <div class="my-2">
            <div class="ease box flex justify-center w-200">Ease</div>
          </div>

          <p class="paragraph">
            <b>linear</b>: the change occurs at the same time
          </p>

          <div class="my-2">
            <div class="linear box flex justify-center items-center w-200">Linear</div>
          </div>


          <p class="paragraph">
            <b>ease-in</b>: the change starts slow then go faster before the end
          </p>

          <div class="my-2">
            <div class="ease-in box flex justify-center w-200">Ease-in</div>
          </div>


          <p class="paragraph">
            <b>ease-out</b>: the change starts fast then slows down before the end
          </p>

          <div class="my-2">
            <div class="ease-out box flex justify-center w-200">Ease-out</div>
          </div>


          <p class="paragraph">
            <b>ease-in-out</b>: the change starts slow then go faster then finises slow
          </p>

          <div class="my-2">
            <div class="ease-in-out box flex justify-center w-200">Ease-in-out</div>
          </div>
        </div>
      </Example>
    </div>
  </article>
</template>

<script lang="ts" setup>
import Example from '@/layouts/Example.vue';
</script>

<style lang="scss" scoped>
.box {
  transition-property: transform;
  transition-duration: 3s;
}

.box:hover {
  transform: translateX(800px);
}

.box.ease {
  transition-timing-function: ease;
}

.box.linear {
  transition-timing-function: linear;
}

.box.ease-in {
  transition-timing-function: ease-in;
}

.box.ease-out {
  transition-timing-function: ease-out;
}

.box.ease-in-out {
  transition-timing-function: ease-in-out;
}
</style>
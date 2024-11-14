<script setup lang="ts">

</script>

<template>
  <div id="auth-layout">
    <div>
      <div class="h-full bg-blue-50">
        <video ref="video" autoplay muted loop class="auth-video" src="../public/video/planet.mp4" />
      </div>
    </div>
    <div class="auth-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="postcss">
#auth-layout {
  @apply grid grid-cols-2 min-h-screen;
}

.auth-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.auth-content {
  @apply m-auto;
}
</style>
<script setup lang="ts">

import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
</script>

<template>
  <Carousel
      :opts="{
      align: 'start',
      loop: true,
    }"
  >
    <Carousel class="relative w-full" :plugins="[Autoplay({ delay: 5000})]">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 5" :key="index">
          <div class="p-1 ">
            <Card class="h-96 bg-red-200">

<!--              <CardContent class="flex aspect-square items-center justify-center p-6">-->
<!--                <span class="text-4xl font-semibold">{{ index + 1 }}</span>-->
<!--              </CardContent>-->
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </Carousel>
</template>

<style scoped>

</style>
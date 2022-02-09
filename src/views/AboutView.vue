<script setup lang="ts">
import { useCounter } from '@/store/counter'

const counter = useCounter()
</script>

<template>
  <div>
    <h2>This is About Page.</h2>
    <div>Count with pinia is: {{ counter.$state.count }}</div>
    <button @click="counter.increment()">Click to Increase Count</button>
    <button @click="counter.decrement()">Click to Decrease Count</button>
  </div>
</template>

<style></style>

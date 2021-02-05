<template>
  <div class="hello">
    {{ missing }}
  </div>
</template>

<script>
const object = {}

export default {
  computed: {
    missing() {
      return object.missing.key
    },
  },
}
</script>

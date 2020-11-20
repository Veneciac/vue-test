<template>
  <div class="detail-info">
    <p>
      {{title}}
    </p>
      <p class="green-text bold">
      {{
        detail
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'infoDetail',
  props: ['title', 'detail']
}
</script>

<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Scroll down to see it in action.</p>

      <br>
      <q-infinite-scroll :handler="refresher">
        <p v-for="(item, index) in items" :key="index" class="caption">
          <q-chip square color="secondary" class="shadow-1">
            {{ index + 1 }}
          </q-chip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div class="row justify-center" slot="message" style="margin-bottom: 50px;">
          <q-spinner name="dots" :size="40"></q-spinner>
        </div>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    refresher (index, done) {
      // console.log('load more ' + index)
      setTimeout(() => {
        let items = []

        if (this.items.length < 7) {
          for (let i = 0; i < 1; i++) {
            items.push({})
          }
        }

        this.items = this.items.concat(items)
        done()
      }, 1500)
    }
  }
}
</script>

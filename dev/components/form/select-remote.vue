<template>
  <div>
    <div class="layout-padding">
      <p class="caption">Single Selection</p>
      <q-select-remote v-model="select" @change="onChange" @input="onInput" :options="infiniteOptions" align="right" clearable filter :loadMore="loadMore"></q-select-remote>
      <q-select-remote v-model="select" :options="selectOptions" separator></q-select-remote>
      <q-select-remote v-model="select" :options="selectListOptions"></q-select-remote>
      <q-select-remote v-model="select" :options="selectDisabledOptions"></q-select-remote>

      <p class="caption">Hide Underline</p>
      <q-select-remote hide-underline v-model="select" :options="selectDisabledOptions"></q-select-remote>
      <q-select-remote hide-underline color="amber" v-model="select" :options="selectListOptions"></q-select-remote>
      <q-select-remote hide-underline inverted color="secondary" v-model="select" :options="selectListOptions"></q-select-remote>

      <p class="caption">Coloring</p>
      <q-select-remote color="amber" v-model="select" :options="selectListOptions"></q-select-remote>
      <q-select-remote inverted color="secondary" v-model="select" :options="selectListOptions"></q-select-remote>
      <q-select-remote inverted float-label="Float Label" color="amber" v-model="select" :options="selectListOptions"></q-select-remote>

      <p class="caption">Single Selection with Radio</p>
      <q-field label="gogu">
        <q-select-remote @change="onChange" @input="onInput" v-model="select" float-label="Gogu" radio :options="selectListOptions" :count="10"></q-select-remote>
      </q-field>
      <q-field label="gogu">
        <q-select-remote @change="onChange" @input="onInput" v-model="select" float-label="Gogu" radio :options="selectDisabledOptions" :count="10"></q-select-remote>
      </q-field>

      <p class="caption">Multiple Selection</p>
      <q-select-remote @change="onChange" @input="onInput" multiple v-model="multipleSelect" :options="selectListOptions" clearable></q-select-remote>
      <q-select-remote @change="val => { multipleSelect = val; onChange(val); }" @input="onInput" multiple :value="multipleSelect" :options="selectListOptions" clearable></q-select-remote>
      <q-select-remote @change="onChange" @input="onInput" multiple v-model="multipleSelect" :options="selectDisabledOptions"></q-select-remote>

      <p class="caption">Multiple Selection with Chips</p>
      <q-field label="gogu" :count="10">
        <q-select-remote @change="onChange" @input="onInput" multiple chips v-model="multipleSelect" :options="selectListOptions" float-label="Some label" max-height="36px" clearable></q-select-remote>
      </q-field>
      <q-field label="gogu" :count="10">
        <q-select-remote @change="onChange" @input="onInput" multiple v-model="multipleSelect" :options="selectListOptions" float-label="Some label" max-height="36px"></q-select-remote>
      </q-field>
      <q-select-remote inverted color="dark" frame-color="amber" multiple chips v-model="multipleSelect" :options="selectListOptions" float-label="Some label" max-height="36px"></q-select-remote>
      <q-select-remote inverted color="dark" frame-color="amber" multiple chips v-model="multipleSelect" :options="selectDisabledOptions" float-label="Some label" max-height="36px"></q-select-remote>

      <p class="caption">Multiple Selection with Checkboxes</p>
      <q-select-remote multiple checkbox v-model="multipleSelect" :options="selectListOptions"></q-select-remote>
      <q-select-remote multiple checkbox v-model="multipleSelect" :options="selectDisabledOptions"></q-select-remote>

      <p class="caption">Multiple Selection with Toggle</p>
      <q-select-remote multiple toggle v-model="multipleSelect" :options="selectListOptions"></q-select-remote>
      <q-select-remote multiple toggle v-model="multipleSelect" :options="selectDisabledOptions"></q-select-remote>

      <p class="caption">Simple</p>
      <q-select-remote simple v-model="select" :options="selectOptions"></q-select-remote>

      <p class="caption">With Filter</p>
      <q-select-remote filter autofocus-filter v-model="select" :options="selectListOptions"></q-select-remote>
      <q-select-remote filter autofocus-filter v-model="select" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter autofocus-filter inverted v-model="select" :options="selectListOptions"></q-select-remote>
      <q-select-remote filter inverted v-model="select" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter multiple checkbox v-model="multipleSelect" :options="selectListOptions"></q-select-remote>

      <p class="caption">With Static Label</p>
      <q-select-remote multiple v-model="multipleSelect" :options="selectOptions" static-label="Company"></q-select-remote>

      <p class="caption">Disabled State</p>
      <q-select-remote disable float-label="Disabled Select" multiple v-model="multipleSelect" :options="selectOptions"></q-select-remote>
      <q-select-remote disable @change="onChange" @input="onInput" multiple chips v-model="multipleSelect" :options="selectListOptions" float-label="Disabled Select" max-height="36px" clearable></q-select-remote>
      <q-select-remote disable inverted color="dark" frame-color="amber" multiple chips v-model="multipleSelect" :options="selectListOptions" float-label="Disabled Select" max-height="36px"></q-select-remote>

      <p class="caption">Error State</p>
      <q-select-remote error multiple v-model="multipleSelect" :options="selectOptions"></q-select-remote>

      <p class="caption">Inside of a List</p>
      <q-list>
        <q-list-header>Single Selection</q-list-header>
        <q-item>
          <q-item-side icon="supervisor_account" />
          <q-item-main>
            <q-select-remote
              class="no-margin"
              v-model="select"
              :options="selectOptions"
            />
          </q-item-main>
        </q-item>
        <q-item-separator />
        <q-list-header>Multiple Selection</q-list-header>
        <q-item>
          <q-item-side icon="supervisor_account" />
          <q-item-main>
            <q-select-remote
              multiple
              class="no-margin"
              v-model="multipleSelect"
              :options="selectOptions"
            />
          </q-item-main>
        </q-item>
      </q-list>


      <p class="caption">Scroll into View</p>
      <q-select-remote v-model="select" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote multiple v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote multiple toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter v-model="select" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter multiple v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter multiple toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote multiple multipleToggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote multiple multipleToggle toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter multiple multipleToggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote filter multiple multipleToggle toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote inverted multiple multipleToggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote inverted multiple multipleToggle toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote inverted filter v-model="select" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote inverted filter multiple multipleToggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote inverted filter multiple multipleToggle toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote color="orange" inverted multiple multipleToggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote color="orange" inverted multiple multipleToggle toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote color="orange" inverted filter v-model="select" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote color="orange" inverted filter multiple multipleToggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>
      <q-select-remote color="orange" inverted filter multiple multipleToggle toggle v-model="multipleSelectLong" :options="selectLongListOptions"></q-select-remote>

      <p class="caption">Display Value</p>
      <q-select-remote multiple v-model="multipleSelect" float-label="Gigi" :options="selectLongListOptions" :display-value="`${ multipleSelect.length } item${ multipleSelect.length !== 1 ? 's' : '' } selected`"></q-select-remote>
      <q-select-remote multiple toggle v-model="multipleSelect" :options="selectLongListOptions" :display-value="`${ multipleSelect.length } item${ multipleSelect.length !== 1 ? 's' : '' } selected`"></q-select-remote>

      <p class="caption">Object Value1</p>
      <q-select-remote v-model="selectObject" :options="selectObjectOptions"></q-select-remote>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: 'fb',
      selectObject: null,
      multipleSelect: ['goog', 'twtr'],
      multipleSelectLong: [],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ],
      selectDisabledOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb',
          disable: true
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl',
          disable: true
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ],
      selectListOptions: [
        {
          label: 'Google',
          icon: 'email',
          value: 'goog'
        },
        {
          label: 'Facebook',
          inset: true,
          description: 'Enables communication',
          value: 'fb'
        },
        {
          label: 'Twitter',
          inset: true,
          rightIcon: 'alarm',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          inset: true,
          stamp: '10 min',
          value: 'appl'
        },
        {
          label: 'Oracle',
          description: 'Some Java for today?',
          icon: 'mail',
          rightIcon: 'alarm',
          value: 'ora'
        }
      ],
      selectLongListOptions: [
        {
          label: 'Google',
          icon: 'email',
          value: 'goog'
        },
        {
          label: 'Facebook',
          inset: true,
          description: 'Enables communication',
          value: 'fb'
        },
        {
          label: 'Twitter',
          inset: true,
          rightIcon: 'alarm',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          inset: true,
          stamp: '10 min',
          value: 'appl'
        },
        {
          label: 'Oracle',
          sublabel: 'Oracle that is',
          inset: true,
          description: 'Some Java for today?',
          icon: 'mail',
          rightIcon: 'alarm',
          value: 'ora'
        },
        {
          label: 'Google - again',
          icon: 'email',
          value: 'goog-a'
        },
        {
          label: 'Facebook - again',
          inset: true,
          description: 'Enables communication',
          value: 'fb-a'
        },
        {
          label: 'Twitter - again',
          inset: true,
          rightIcon: 'alarm',
          value: 'twtr-a'
        },
        {
          label: 'Apple Inc. - again',
          inset: true,
          stamp: '10 min',
          value: 'appl-a'
        },
        {
          label: 'Oracle - again',
          description: 'Some Java for today?',
          icon: 'mail',
          rightIcon: 'alarm',
          value: 'ora-a'
        },
        {
          label: 'Google - trice',
          icon: 'email',
          value: 'goog-b'
        },
        {
          label: 'Facebook - trice',
          inset: true,
          description: 'Enables communication',
          value: 'fb-b'
        },
        {
          label: 'Twitter - trice',
          inset: true,
          rightIcon: 'alarm',
          value: 'twtr-b'
        },
        {
          label: 'Apple Inc. - trice',
          inset: true,
          stamp: '10 min',
          value: 'appl-b'
        },
        {
          label: 'Oracle - trice',
          description: 'Some Java for today?',
          icon: 'mail',
          rightIcon: 'alarm',
          value: 'ora-b'
        },
        {
          label: 'Google - more',
          icon: 'email',
          value: 'goog-c'
        },
        {
          label: 'Facebook - more',
          inset: true,
          description: 'Enables communication',
          value: 'fb-c'
        },
        {
          label: 'Twitter - more',
          inset: true,
          rightIcon: 'alarm',
          value: 'twtr-c'
        },
        {
          label: 'Apple Inc. - more',
          inset: true,
          stamp: '10 min',
          value: 'appl-c'
        },
        {
          label: 'Oracle - more',
          description: 'Some Java for today?',
          icon: 'mail',
          rightIcon: 'alarm',
          value: 'ora-c'
        },
        {
          label: 'Google - extra',
          icon: 'email',
          value: 'goog-d'
        },
        {
          label: 'Facebook - extra',
          inset: true,
          description: 'Enables communication',
          value: 'fb-d'
        },
        {
          label: 'Twitter - extra',
          inset: true,
          rightIcon: 'alarm',
          value: 'twtr-d'
        },
        {
          label: 'Apple Inc. - extra',
          inset: true,
          stamp: '10 min',
          value: 'appl-d'
        },
        {
          label: 'Oracle - extra',
          description: 'Some Java for today?',
          icon: 'mail',
          rightIcon: 'alarm',
          value: 'ora-d'
        }
      ],
      selectObjectOptions: [
        {
          label: 'Option 1',
          value: { id: 1 }
        },
        {
          label: 'Option 2',
          value: { id: 2 }
        },
        {
          label: 'Option 3',
          value: { id: 3 }
        }
      ],
      infiniteOptions: []
    }
  },
  watch: {
    select (val, old) {
      console.log(`Changed from ${JSON.stringify(old)} to ${JSON.stringify(val)}`)
    },
    multipleSelect (val, old) {
      console.log(`Changed from ${JSON.stringify(old)} to ${JSON.stringify(val)}`)
    }
  },
  methods: {
    onChange (val) {
      console.log('@change', JSON.stringify(val))
    },
    onInput (val) {
      console.log('@input', JSON.stringify(val))
    },
    loadMore ({term, offset}) {
      console.log('load more')
      return new Promise(resolve => setTimeout(resolve, 1000))
        .then(() => {
          let page = []
          for (let ii = 0; ii <= 5; ++ii) {
            let v = ii + this.infiniteOptions.length
            page.push({label: term + ':' + v + '', value: v})
          }
          if (offset > 0) this.infiniteOptions = this.infiniteOptions.concat(page)
          else this.infiniteOptions = page
        })
    }
  }
}
</script>

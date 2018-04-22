import { height, onElementHeightChange, offset } from '../../utils/dom'
import { debounce } from '../../utils/debounce'
import { getScrollTarget, getScrollPosition } from '../../utils/scroll'
import { listenOpts } from '../../utils/event'

export default {
  name: 'QInfiniteScroll',
  props: {
    handler: {
      type: Function,
      required: true
    },
    inline: Boolean,
    immediate: {type: Boolean, default: true}, // trigger loadMore immediately after mounted
    offset: {
      type: Number,
      default: 0
    },
    offsetPages: { // make offset to offsetPages * container height
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: 0,
      fetching: false,
      working: true
    }
  },
  methods: {
    poll () {
      if (this.fetching || !this.working) {
        return
      }

      let contentHeight = height(this.element)

      let
        containerHeight = height(this.scrollContainer),
        containerBottom = offset(this.scrollContainer).top + containerHeight

      let triggerOffset = this.offset ? this.offset : (this.offsetPages || 1) * containerHeight
      let triggerPosition = offset(this.element).top + contentHeight - triggerOffset

      if (triggerPosition < containerBottom) {
        this.loadMore()
      }
    },
    loadMore () {
      if (this.fetching || !this.working) {
        return
      }

      this.index++
      this.fetching = true
      this.handler(this.index, stopLoading => {
        this.fetching = false
        if (stopLoading) {
          this.stop()
        }
        else if (this._needPollAgain) {
          this._needPollAgain = false
          this.poll()
        }
        // if (this.element.closest('body')) {
        //   this.poll()
        // }
      })
    },
    reset () {
      this.index = 0
    },
    resume () {
      this.working = true
      this.onScroll()
      if (this.immediate) this.poll()
    },
    stop () {
      this.working = false
      this.offScroll()
    },
    onScroll () {
      let lastScrollPosition = getScrollPosition(this.scrollContainer)
      this.scrollContainer.addEventListener('scroll', (e) => {
        // only for scroll event and down direction
        let scrollPosition = getScrollPosition(this.scrollContainer)
        if (scrollPosition < lastScrollPosition) {
          lastScrollPosition = scrollPosition
          return
        }

        lastScrollPosition = scrollPosition
        this.poll()
      }, listenOpts.passive)
    },
    offScroll () {
      this.scrollContainer.removeEventListener('scroll', this.poll, listenOpts.passive)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.poll = debounce(this.poll, 50)
      this.element = this.$refs.content

      // If content height changed, then check again
      this.offElementHeightChange = onElementHeightChange(this.element, () => {
        if (this.fetching) this._needPollAgain = true
        else {
          this._needPollAgain = false
          this.poll()
        }
      })

      this.scrollContainer = this.inline ? this.$el : getScrollTarget(this.$el)
      if (this.working) {
        this.onScroll()
      }

      if (this.immediate) this.poll()
    })
  },
  beforeDestroy () {
    this.offScroll()
    if (this.offElementHeightChange) {
      this.offElementHeightChange()
      this.offElementHeightChange = null
    }
  },
  render (h) {
    return h('div', { staticClass: 'q-infinite-scroll' }, [
      h('div', {
        ref: 'content',
        staticClass: 'q-infinite-scroll-content'
      }, [ this.$slots.default ]),
      h('div', {
        staticClass: 'q-infinite-scroll-message',
        directives: [{
          name: 'show',
          value: this.fetching
        }]
      }, [
        this.$slots.message
      ])
    ])
  }
}

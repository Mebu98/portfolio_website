

<template>
  <span id="movingText">{{shownText}}</span><span id="textCursor">&nbsp;</span>
</template>

<script>
  export default {
    name: 'TextTyper',
    props: {
      texts: {
        type: Array,
        required: true
      },
      wait: {
        type: Number,
        default: 3000,
      },
      minSpeed:{
        type: Number,
        default: 42,
      },
      maxSpeed:{
        type: Number,
        default: 69
      },
      blinkSpeed:{
        type: Number,
        default: 400
      }
    },
    data(){
      return {
        text: "",
        textIndex: 0,
        shownText: '',
        blinking: false,
        opacity: 0
      }
    },
    methods: {
      start() {
        let text = this.texts[0]
        this.text = text
        let shownText = this.shownText
        this.blinkCursor()
        this.typeText(text, shownText)
      },
      typeText(text, shownText) {
        if (shownText.length < text.length) {
          this.disableBlinking()
          shownText += text.charAt(shownText.length)
          this.shownText = shownText
          setTimeout(() => {
            this.typeText(text, shownText)},
              Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed)
        }
        else{
          this.blinking = true
          setTimeout(() => {this.removeText(shownText)}, this.wait)
        }
      },
      removeText(shownText){
        if(0 < shownText.length){
          this.disableBlinking()
          shownText = shownText.slice(0, shownText.length - 1)
          this.shownText = shownText
          setTimeout(() => {this.removeText(shownText)},
              Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed)
        }
        else{
          // No more text in shownText
          this.blinking = true;
          this.textIndex = (this.textIndex + 1) % this.texts.length
          this.text = this.texts[this.textIndex]
          setTimeout(() => {this.typeText(this.text, this.shownText)}, this.wait)
        }
      },
      disableBlinking(){
        this.blinking = false
        document.getElementById('textCursor').style.opacity = "1";
      },
      blinkCursor(){
        if(this.blinking) {
          let opacity = this.opacity
          if(opacity === 0) opacity = 1
          else opacity = 0
          this.opacity = opacity
          document.getElementById('textCursor').style.opacity = String(this.opacity);
        }
        setTimeout(() => {this.blinkCursor()}, this.blinkSpeed)
      }
    },
    mounted() {
      this.start()
    }
  }
</script>
<style scoped>

  #textCursor {
    display: inline-block;
    content: "";
    width: .1em;
    min-width: 3px;
    background: var(--alt1);
    opacity: 1;
  }
</style>
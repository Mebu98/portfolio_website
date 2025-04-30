

<template>
    <span id="text">{{shownText}}<span id="textCursor">&nbsp;</span></span>
</template>

<script>
  export default {
    name: 'TextTyper',
    props: {
      text: {
        type: String,
        required: true
      }
    },
    data(){
      return {
        minSpeed: 42,
        maxSpeed: 69,
        waitForNextTime: 3000,
        shownText: '',
        blinking: false,
        opacity: 0
      }
    },
    methods: {
      start() {
        let text = this.text
        let shownText = this.shownText
        this.blinkCursor()
        this.typeText(text, shownText)
      },
      typeText(text, shownText) {
        if (shownText.length < text.length) {
          this.blinking = false
          shownText += text.charAt(shownText.length)
          this.shownText = shownText
          setTimeout(() => {
            this.typeText(text, shownText)},
              Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed)
        }
        else{
          this.blinking = true
          setTimeout(() => {this.removeText(shownText)}, this.waitForNextTime)
        }
      },
      removeText(shownText){
        if(0 < shownText.length){
          this.blinking = false
          shownText = shownText.slice(0, shownText.length - 1)
          this.shownText = shownText
          setTimeout(() => {this.removeText(shownText)},
              Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed)
        }
        else{
          this.blinking = true;
          setTimeout(() => {this.typeText(this.text, this.shownText)}, this.waitForNextTime)
        }
      },
      blinkCursor(){
        if(this.blinking) {
          let opacity = this.opacity
          if(opacity === 0) opacity = 1
          else opacity = 0
          this.opacity = opacity
          document.getElementById('textCursor').style.opacity = String(this.opacity);
        }
        else {
          document.getElementById('textCursor').style.opacity = String(1);
        }
        setTimeout(() => {this.blinkCursor()}, 350)

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
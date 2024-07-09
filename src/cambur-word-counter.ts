import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cambur-word-counter")
export class CamburWordCounter extends LitElement {
  @property()
  words: string = "";

  render() {
    return html`
      <div id="wrapper">
        <p>
          ${this.countWords(this.words)} words
          ${this.countCharacters(this.words)} characters
          ${this.calcReadingTime(this.words)} minutes reading time
        </p>
        <textarea
          @input=${(event: Event) => {
            this.words = (event.target as HTMLTextAreaElement).value;
          }}
          id="main-textarea"
          style="resize: none;"
          autofocus
          placeholder="Write to start counting..."
          cols="100"
          rows="33"
        ></textarea>
      </div>
    `;
  }

  countWords(text: string): number {
    return text.split(" ").length;
  }

  countCharacters(text: string): number {
    return text.length;
  }

  calcReadingTime(text: string): number {
    const words = this.countWords(text);
    return Math.ceil(words / 200);
  }
}

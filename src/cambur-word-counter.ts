import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TWStyles } from "./tailwind/twlit";

@customElement("cambur-word-counter")
export class CamburWordCounter extends LitElement {
  @property()
  words: string = "";

  static styles = TWStyles;

  render() {
    return html`
      <div id="wrapper" class="flex flex-col items-center h-full">
        <div id="counter" class="flex-auto grow-0">
          <p>
            ${this.countWords(this.words)} words
            ${this.countCharacters(this.words)} characters
            ${this.calcReadingTime(this.words)} minutes reading time
          </p>
        </div>
        <textarea
          @input=${(event: Event) => {
            this.words = (event.target as HTMLTextAreaElement).value;
          }}
          id="main-textarea"
          class="flex-auto w-3/4"
          style="resize: none;"
          autofocus
          placeholder="Write to start counting..."
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

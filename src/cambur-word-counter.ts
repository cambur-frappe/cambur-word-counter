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
      <div id="wrapper" class="flex flex-col justify-around items-center h-full">
        <div id="counter" class="flex-auto grow-0">
          <p
            class="text-center text-lg font-semibold text-gray-800"
          >
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
          class="flex w-3/4 h-3/4 px-3 py-1.5 border border-gray-300 rounded-md"
          style="resize: none;"
          autofocus
          placeholder="Write to start counting..."
        ></textarea>
        <footer
          id="footer"
          class="flex justify-center items-center w-full h-12 bg-gray-100"
        >
          Made with 💙 by Frappé Team 🍧
        </footer>
      </div>
    `;
  }

  countWords(text: string): number {
    return text.split(new RegExp("\\s[^\\s]")).length;
  }

  countCharacters(text: string): number {
    return text.length;
  }

  calcReadingTime(text: string): number {
    const words = this.countWords(text);
    return Math.ceil(words / 200);
  }
}

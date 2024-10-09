import {TFolder} from "obsidian";
import {TextInputSuggest} from "./suggest";

export class TagSuggest extends TextInputSuggest<string> {
	getSuggestions(inputStr: string): string[] {
		// TS ignore is required here because getTags does not exist in the declarations but is a valid function.
		// Source: https://forum.obsidian.md/t/efficiently-get-all-tags-through-the-api/38400/3
		// @ts-ignore
		return Object.keys(app.metadataCache.getTags()).filter((tag: string) => tag.toLowerCase().includes(inputStr.toLowerCase()));
	}

	renderSuggestion(tag: string, el: HTMLElement): void {
		el.setText(tag);
	}

	selectSuggestion(tag: string): void {
		this.inputEl.value = tag;
		this.inputEl.trigger("input");
		this.close();
	}
}

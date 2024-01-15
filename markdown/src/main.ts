import "./global.pcss";
import { parseInput, initialValue } from "./markdown";

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

(() => {
	if (!editor || !preview) return;
	editor.textContent = initialValue;
	preview.innerHTML = parseInput(initialValue);

	editor.addEventListener(
		"input",
		(e: Event) =>
			(preview.innerHTML = parseInput((e.target as HTMLTextAreaElement).value))
	);
})();

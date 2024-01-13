import Doom from "figlet/importable-fonts/Doom";
import { text, parseFont } from "figlet";
import { displayName } from "../package.json";
import quotes from "./quotes.json" assert { type: "json" };

parseFont("Doom", Doom);
text(displayName.toUpperCase(), "Doom", (e, result) => {
	if (e) return console.log(e);
	console.log(result);
});

const quote = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const copyright = document.getElementById("copyright");

function generateQuote() {
	if (!quote || !author) return;
	const { text, author: quoteAuthor } =
		quotes[Math.floor(Math.random() * quotes.length)];
	quote.textContent = text;
	author.textContent = quoteAuthor;
	changeBackgroundColor();
}

function changeBackgroundColor() {
	const backgroundOptions = [
		"bg-red-100",
		"bg-orange-100",
		"bg-amber-100",
		"bg-yellow-100",
		"bg-green-100",
		"bg-emerald-100",
		"bg-teal-100",
		"bg-cyan-100",
		"bg-sky-100",
		"bg-purple-100",
		"bg-fuchsia-100",
		"bg-pink-100",
		"bg-rose-100",
		"bg-lime-100",
		"bg-blue-100",
		"bg-indigo-100",
		"bg-violet-100",
	];

	document.body.className = `${
		backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)]
	} transition-colors duration-700`;
}

(() => {
	if (!copyright) return;
	copyright.textContent = new Date().getFullYear() + "";

	generateQuote();
	newQuote?.addEventListener("click", generateQuote);
})();

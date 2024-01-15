import { marked } from "marked";
import DOMPurify from "dompurify";

export const parseInput = (input: string) =>
	DOMPurify.sanitize(marked.parse(input) as string);

export const initialValue = `
# Hello world
## This is a markdown previewer for the [freecodecamp frontend certificate](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
### You can...
- **Bold Text**
- Write \`code\`
- Write codeblocks such as the one below
\`\`\`js
console.log('hello world')
\`\`\`
- Link images
![Lorem Picsum](https://picsum.photos/200/300)
- and even quote
> It was the best of times. It was the worst of times.
`;

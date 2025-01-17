const text = await Deno.readTextFile("./books/frankenstein.txt");

// step 1 - prepare text and find start / end of story for counting

const findStartOfStory = (text) => {
  const storyText = text.split("\n");
  const preparedText = storyText
    .filter((line) => line.trim() !== "")
    .flatMap((line) => line.trim().split(/\s+/));

  const story = preparedText.slice(4);

  return story;
};

let storyText = findStartOfStory(text);

console.log("STORY:", storyText);

// step 2 - count words - but don't count the extra text before the story

const countChars = () => {};

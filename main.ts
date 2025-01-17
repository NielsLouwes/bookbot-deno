const text = await Deno.readTextFile("./books/frankenstein.txt");

// step 1 - prepare text and find start / end of story for counting

const findStartOfStory = (text: string) => {
  const storyText = text.split("\n");
  const preparedText = storyText
    .filter((line) => line.trim() !== "")
    .flatMap((line) => line.trim().split(/\s+/))
    .map((word) => word.replace(/[^a-zA-Z]/g, "").toLowerCase());

  const story = preparedText.slice(4);

  return story;
};

let storyText = findStartOfStory(text);

// console.log("STORY:", storyText);

// step 2 - count words - but don't count the extra text before the story

const countChars = (text: string[]): number => {
  const chars = text.map((word) => word.split(""));
  const length = chars.length;

  return length;
};

const storyCharCount = countChars(storyText);
console.log("Total chars in this story:", storyCharCount);

// step 3: count occurence of each letter in the story

const returnLetterCount = (text: string[]) => {
  const chars = text.map((word) => word.split("")).flat();

  let letterObject = {};

  chars.map((char: string) => {
    if (!letterObject[char]) {
      letterObject[char] = 0;
    }

    letterObject[char]++;
  });

  const sortedLettersByOccurence = Object.fromEntries(
    Object.entries(letterObject)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
  );

  const topLetters = Object.keys(sortedLettersByOccurence);
  const [first, second, third] = topLetters;
  return `The most occuring letters are ${first},${second},${third}.`;
};

const topThreeLetters = returnLetterCount(storyText);

console.log(topThreeLetters);

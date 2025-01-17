const text = await Deno.readTextFile("./books/frankenstein.txt");
console.log("text", text);

// step 1 - count words - but don't count the extra text before the story

const findStartOfStory = (text) => {
  const storyText = text.split("\n");
  const preparedText = storyText.filter((line) => line.trim() !== "");

  console.log("preparedText", preparedText);

  const find = storyText.findIndex((word) => word == "Letter 1");
  console.log("find", find);
};

findStartOfStory(text);

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // Pick random items for placeholders
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders — note: replace only replaces first occurrence, so use replaceAll or chain replace
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Replace 'Bob' with custom name if entered
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Check UK radio button, convert units if checked
  if (document.getElementById('uk').checked) {
    // Convert 300 pounds to stone (1 stone = 14 pounds)
    const weight = Math.round(300 / 14) + ' stone';
    // Convert 94 fahrenheit to centigrade
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    // Replace in story
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  // Display the new story in the <p> element
  story.textContent = newStory;
}


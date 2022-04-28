export const sentences: string[] = [
  "She danced with him",
  "OK here it is I got it",
  "Who do you think I am",
  "Actually now that I think about it a lot of people in cities here take the bus also",
];

export const randomId = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

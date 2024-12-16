type PageCounterExplanation = {
  [key: string]: string[];
};

export const MapPageCounterExplanation: PageCounterExplanation = {
  set: [
    "This is one of the example of a tenpai hand, let's break down the hand to see what does it constitute of",
    "You can see on the above of the tenpai hand that it is already have 3 completed sets and 1 pair",
    "The remaining set that has not been completed yet is the 23p waiting on 1p and 4p, if you draw either 1p or 4p you win the round",
  ],
  pinfu: [
    "Pinfu is a common yaku, but the requirement for it is a bit complicated. It worths 1 hand and only has base 20 fu",
    "First, pinfu itself means 'No Fu' so there are no triplets nor toitsu that generates fu. The toitsu sha from this example has no fu if we are not in sha seat",
    "Your hand also needs to be in menzen state.",
  ],
};

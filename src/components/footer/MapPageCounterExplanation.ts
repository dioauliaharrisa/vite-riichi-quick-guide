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
    "First, pinfu itself means 'No Fu' so there are no triplets nor yakuhai ankou or yakuhai toitsu that generates fu. Your hand also needs to be in menzen state, lastly the wait should be ryanmen.",
    "The wait of pinfu has to be either ryanmen or sanmenchan, be careful not to confuse ryanmen and nobetan.",
  ],
  kabe: [
    "Kabe in english is 'Wall'. This term is referring to the 4 visible numbered tiles.",
    "Kabe is considered when choosing to defend because when 4 tiles of the same tile have already been discarded, exposing that no ryanmen that using that tile maybe be possible",
    "Note also in discard pond, you can pinpoint kabe while looking at your hand. In this case you can see that there is 8s kabe. 8s kabe information is so useful because you are the only one who knows this."
  ]
};

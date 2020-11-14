// The criptic deep adviser
// This program should return a string to the user, implying in an obscure way that he should make some life decissions

// The messages' beginnings
let begin1 = 'As I grew old, I began to forget that ';
let begin2 = 'You may think that you experienced this, but ';
let begin3 = 'Watch my words carefully: ';
let begin4 = "Having in mind that not everything I'm going to say is truth, hear this: ";
let begin5 = "The sun goes back and forth thirteen times before knowing this stops making sense: ";
let beginnings = [begin1, begin2, begin3, begin4, begin5];

// Now, the semantics. Fragments to be mixed in a lot of possible combinations
let subject1 = "a cat ";
let subject2 = "the true nature of justice ";
let subject3 = "the natural process of being ready ";
let subject4 = "any given method to set the ratio of time ";
let subject5 = "your future inner child ";
let subjects = [subject1, subject2, subject3, subject4, subject5];

let action1 = "doesn't acquire ";
let action2 = "grows only under ";
let action3 = "sets all the colors and sounds before ";
let action4 = "may have the key to unrevealing ";
let action5 = "is probably nothing, but it also can be ";
let actions = [action1, action2, action3, action4, action5];

let conclusion1 = "any terminal rats.";
let conclusion2 = "your ilussion.";
let conclusion3 = "the oddly sharp balls.";
let conclusion4 = "all my excess of skin.";
let conclusion5 = "jungles, but forrest.";
let conclusions = [conclusion1, conclusion2, conclusion3, conclusion4, conclusion5];

// And now the function.

const myAdvice = () => {
    let randomIndices = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)];
    let begin = beginnings[randomIndices[0]];
    let subject = subjects[randomIndices[1]];
    let action = actions[randomIndices[2]];
    let conclusion = conclusions[randomIndices[3]];
    // console.log(begin + subject + action + conclusion);
    return begin + subject + action + conclusion;
};

const printAdvice = () => {
    let randomAdvice = myAdvice();
    document.getElementById('advice').innerHTML = randomAdvice;
    document.getElementById('adviser').innerHTML = 'Thanks! Please tell me more';
};
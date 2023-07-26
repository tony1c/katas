'use strict';

/*
Today's exercise
Write a function defineSuit, that accepts one parameter: card.

Given a card string, e.g. "3♣", return a string with the term for the card's suit, e.g. "clubs".

Input: a string (a card).

Output: a string (the card's suit)
*/

function defineSuit(card) {
  const suits = { '♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts' };
  const cardSuit = card.slice(-1);

  const suitStr = `${suits[cardSuit]} ✅`;

  return suitStr;
}

console.log(defineSuit('3♣'));
// clubs ✅

console.log(defineSuit('Q♠'));
// spades ✅

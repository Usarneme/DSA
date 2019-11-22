# Random Search

Randomly select items from a list/array until you find a match of the card you are looking for. 

#### Usage: python RandomSelection "Ace of Spades"
#### python <program name> "card you are looking for in quotes"
#### Cards are in the format: Number/Facecard-Name of Suit, e.g.: "4 of Clubs", "King of Hearts"

### Python Implementation
#### Uses Python's choice() function from the random library to pull a random card from a deck of cards, compare it to the provided/searched-for card, and returns a statement if the card is in the deck and how many cards were compared before finding the match. 
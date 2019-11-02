<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Nina Class</title>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
</head>
<body>

    <script type="text/javascript">
    class cardDeck {
            constructor() {
                this.deck = [];
            }

            reset() {
                this.deck = [];
                const cardSuits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
                const cardValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

                for (const suit of cardSuits) {
                    for (const value of cardValues) {
                        this.deck.push(`${ value } of ${ suit }`);
                    }
                }

                return this;
            }

            shuffle() {
                var m = this.deck.length, t, i;
                while (m) {
                    i = Math.floor(Math.random() * m--);
                    t = this.deck[m];
                    this.deck[m] = this.deck[i];
                    this.deck[i] = t;
                }
                return this;
            }

            deal() {
                return this.deck.pop();
            }

        }

        class Player {
            constructor(name) {
                this.name = name;
                this.hand = [];
            }

            draw(deck) {
                this.hand.push(deck.deal());
                return this;
            }

            discard() {
                this.hand.pop();
                return this;
            }
        }

        const secondDeck = new cardDeck();
        secondDeck.reset().shuffle();
        console.log(secondDeck);

        const player2 = new Player("Jack");
        player2.draw(secondDeck).draw(secondDeck);
        console.log(player2);
        console.log(secondDeck);

          


    </script>

</body>
</html>
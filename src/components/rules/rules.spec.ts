import RulesComponent from './rules';
import { createElementFromString } from '../../common/WebComponent';

test('Check rendering text with rules', () => {
  const rules = createElementFromString(`<main>
      <div class="container">
        <p class="text text--first">The game consists of a number of rounds. In each round, a player gets three rolls of the dice,
            although they can choose to end their turn after one or two rolls. In each turn a player may throw the dice
            up to three times. A player doesn't have to roll all five dice on the second and third throw of a round, he
            may put as many dice as he wants to the side and only throw the ones that don't have the numbers he's trying
            to get. For example, a player throws and gets 1,3,3,4,6. He decides he want to try for the large straight,
            1,2,3,4,5. So, he puts 1,3,4 to the side and only throws 3 and 6 again, hoping to get 2 and 5. In this game
            you click on the dice you want to keep.</p>
        <p class="text">The Yahtzee scorecard contains 13 different category boxes and in each round, after the third
            roll, the player must choose one of these categories. The score entered in the box depends on how well the
            five dice match the scoring rule for the category. Details of the scoring rules for each category are given
            below. As an example, one of the categories is called Three of a Kind. The scoring rule for this category
            means that a player only scores if at least three of the five dice are the same value. The game is completed
            after 13 rounds by each player, with each of the 13 boxes filled. The total score is calculated by summing
            all thirteen boxes, together with any bonuses.</p>
        <p class="text">In the upper section there are six boxes. The score in each of these boxes is determined by
            adding the total number of dice matching that box.</p>
        <ul class="list">
            <li><span class="list list--bold">Ones:</span> Get as many ones as possible.</li>
            <li><span class="list list--bold">Twos:</span> Get as many twos as possible.</li>
            <li><span class="list list--bold">Threes:</span> Get as many threes as possible.</li>
            <li><span class="list list--bold">Fours:</span> Get as many fours as possible.</li>
            <li><span class="list list--bold">Fives:</span> Get as many fives as possible.</li>
            <li><span class="list list--bold">Sixes:</span> Get as many sixes as possible.</li>
        </ul>
        <p class="text">For the six combinations above the score for each of them is the sum of dice of the right kind. E.g. if you
            get 1,3,3,3,5 and you choose Threes you will get 3*3 = 9 points. The sum of all the above combinations is
            calculated and if it is 63 or more, the player will get a bonus of 35 points. On average a player needs
            three of each to reach 63, but it is not required to get three of each exactly, it is perfectly OK to have
            five sixes, and zero ones for example, as long as the sum is 63 or more the bonus will be awarded.</p>
        <p class="text">The lower section contains a number of poker-themed categories with specific point values:</p>
        <ul class="list">
            <li><span class="list list--bold">Three of a kind:</span> Get three dice with the same number. Points are the sum all dice (not just the three of
                a kind).</li>
            <li><span class="list list--bold">Four of a kind:</span> Get four dice with the same number. Points are the sum all dice (not just the four of a
                kind).</li>
            <li><span class="list list--bold">Full house:</span> Get three of a kind and a pair, e.g. 1,1,3,3,3 or 3,3,3,6,6. Scores 25 points.</li>
            <li><span class="list list--bold">Small straight:</span> Get four sequential dice, 1,2,3,4 or 2,3,4,5 or 3,4,5,6. Scores 30 points.</li>
            <li><span class="list list--bold">Large straight:</span> Get five sequential dice, 1,2,3,4,5 or 2,3,4,5,6. Scores 40 points.</li>
            <li><span class="list list--bold">Chance:</span> You can put anything into chance, it's basically like a garbage can when you don't have anything
                else you can use the dice for. The score is simply the sum of the dice.</li>
            <li><span class="list list--bold">YAHTZEE:</span> Five of a kind. Scores 50 points. You can optionally get multiple Yahtzees, see below for
                details.</li>
        </ul>
        <p class="text">A Yahtzee occurs when all five dice are the same. If the player throws a Yahtzee and has already filled the
            Yahtzee box with a score of 50, they score a Yahtzee bonus and get an extra 100 points. However, if they
            throw a Yahtzee and have filled the Yahtzee category with a score of 0, they do not get a Yahtzee bonus.
            In either case the player then select a category, as usual. Scoring is the same as normal except that, if
            the Upper Section box corresponding to the Yahtzee has been used, the Full House, Small Straight and Large
            Straight categories can be used to score 25, 30 or 40 (respectively) even though the dice do not meet the
            normal requirement for those categories. In this case the Yahtzee is said to act as a "Joker". Joker rule
            says that the player retains the free choice as to which category to use, but the Yahtzee can only be used
            as a Joker if the corresponding Upper Section box has been used If the corresponding Upper Section box is
            unused the Yahtzee would score 0 if the Full House, Small Straight or Large Straight categories were chosen.
        </p>
        <p class="text">The winner is the player with the highest total.</p>
        <p class="text text--last">Enjoy the game!</p>
      </div>
    </main>`);

  const rulesComponent = new RulesComponent();

  expect(rulesComponent.render()).toStrictEqual(rules);
});

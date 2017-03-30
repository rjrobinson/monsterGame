new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        playerHealth: 100,
        ok: true,
        logs: []
    },
    methods: {
        dice: function () {
            return Math.floor(Math.random() * ((25 - 1) + 1) + 1);
        },
        newGame: function () {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.ok = !this.ok;
            this.logs = []
        },
        giveUp: function () {
            this.ok = !this.ok;
        },
        attack: function () {
            roll = this.dice();
            this.monsterHealth -= roll;
            this.logs.push({message: "Player hit for " + roll, class: 'player-turn'});
            this.monsterAttack();
        },
        specialAttack: function () {
            roll = this.dice();
            roll = roll * 3;
            this.monsterHealth -= roll;
            this.logs.push({message: "Player Special Attacked for " + roll, class: 'player-turn'});
            this.monsterAttack();
        },
        heal: function () {
            roll = this.dice();
            this.playerHealth += roll
            this.logs.push({message: "Player Healed for " + roll, class: 'player-turn'});
            this.monsterAttack();
        },
        monsterAttack: function () {

            if (this.monsterHealth <= 0) {
                alert('YOU WIN');
                this.ok = !this.ok
                return;
            }
            roll = this.dice();
            this.playerHealth -= roll;
            this.logs.push({message: "Monster hit for " + roll, class: 'monster-turn'});

            if (this.playerHealth <= 0) {
                alert('You Lose... sorry.... ');
                this.ok = !this.ok
            }
        }
    }
})
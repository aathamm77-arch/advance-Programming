
class Developer {
    writeCode() {
        throw new Error("writeCode() metodi amalga oshirilmagan");
    }
}

class JavaDeveloper extends Developer {
    writeCode() {
        return "Java dasturchisi Java tilida kod yozmoqda.";
    }
}

class CppDeveloper extends Developer {
    writeCode() {
        return "C++ dasturchisi C++ tilida kod yozmoqda.";
    }
}

class Game {
    constructor(developer) {
        this.developer = developer;
    }

    developGame() {
        throw new Error("developGame() metodi amalga oshirilmagan");
    }
}

class RacingGame extends Game {
    developGame() {
        console.log("Poyga o'yini yaratilmoqda...");
        console.log(this.developer.writeCode());
        console.log("Poyga o'yini tayyor!");
        console.log("---------------------------");
    }
}

class FootballGame extends Game {
    developGame() {
        console.log("Futbol o'yini yaratilmoqda...");
        console.log(this.developer.writeCode());
        console.log("Futbol o'yini tayyor!");
        console.log("---------------------------");
    }
}


const javaDeveloper = new JavaDeveloper();
const racingGame1 = new RacingGame(javaDeveloper);
racingGame1.developGame();

const cppDeveloper = new CppDeveloper();
const racingGame2 = new RacingGame(cppDeveloper);
racingGame2.developGame();

const footballGame1 = new FootballGame(javaDeveloper);
footballGame1.developGame();

const footballGame2 = new FootballGame(cppDeveloper);
footballGame2.developGame();

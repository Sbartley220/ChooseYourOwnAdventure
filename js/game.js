// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "your computer is on fire",
            choices: [
                {
                    text: "call 911",
                    nextLevel: "hallway",
                },

                {
                    text: "Run",
                    nextLevel: "sidewalk",
                },
            ]
        },

        sidewalk: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "your house burns",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        hallway: {
            message: "follow instructions",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};

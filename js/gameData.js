const gameData = [
    {
        name: "Star Wars: Battlefront",
        description: "Immerse yourself in the Ultimate Star Wars Experience",
        price: 300,
        id: 1
    },
    {
        name: "Dying Light",
        description: "Dying light is an open world first person survival horor action-adventure video game developed by Techland",
        price: 500,
        id: 2
    },
    {
        name: "Bloodborne",
        description: "Bloodborne is an action role-playing video game developed by FromSoftware",
        price: 9999,
        id: 3
    },
    {
        name: "Evolve",
        description: "Evolve is a first-person shooter video game developed by Turtle Rock Studios",
        price: 150,
        id: 4
    }
]

export function getGames() {
    return gameData;
}
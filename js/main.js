function Load() {
    updateInterval = setInterval(Update, tickSpeed);
    points = new Points("Points", "PointsFade");
    diceManager = new DiceManager("DiceBox", "DiceInformation");
    coinflipperManager = new CoinflipperManager("Coinflippers", "CoinflippersHeader", "CoinflippersInformation", "CoinflipperContainer");

    //Buttons
    rollDiceButton = new RollDiceButton("RollDiceButton");
    buyCoinflipperButton = new BuyCoinflipperButton("BuyCoinflipperButton");

    //Upgrades
    upgradeManager = new UpgradeManager("Upgrades");
    upgradeManager.Add("DicePointBonus1", new Upgrade(50, "Get 100 more point from each dice", "DicePointBonus", 1));
    upgradeManager.Add("DicePointBonus2", new Upgrade(100, "Get 200 more points from each dice", "DicePointBonus", 2, "DicePointBonus1"));
    upgradeManager.Add("DicePointBonus3", new Upgrade(150, "Get 300 more points from each dice", "DicePointBonus", 3, "DicePointBonus2"));
    upgradeManager.Add("DicePointBonus4", new Upgrade(300, "Get 400 more points from each dice", "DicePointBonus", 4, "DicePointBonus3"));
    upgradeManager.Add("AddDice1", new Upgrade(100, "Add 1 more dice", "AddDice", 10));
    upgradeManager.Add("AddDice2", new Upgrade(200, "Add 1 more dice", "AddDice", 10, "AddDice1"));
    upgradeManager.Add("AddDice3", new Upgrade(400, "Add 1 more dice", "AddDice", 10, "AddDice2"));
    upgradeManager.Add("AddDice4", new Upgrade(1000, "Add 1 more dice", "AddDice", 10, "AddDice3"));
    upgradeManager.Add("BiggerDice1", new Upgrade(15, "Use bigger dice", "BiggerDice", 10));
    upgradeManager.Add("BiggerDice2", new Upgrade(30, "Use bigger dice", "BiggerDice", 10, "BiggerDice1"));
    upgradeManager.Add("BiggerDice3", new Upgrade(60, "Use bigger dice", "BiggerDice", 10, "BiggerDice2"));
    upgradeManager.Add("BiggerDice4", new Upgrade(60, "Use bigger dice", "BiggerDice", 10, "BiggerDice3"));
    upgradeManager.Add("FasterRoll1", new Upgrade(50, "Roll 20% faster", "FasterRoll", 0.0));
    upgradeManager.Add("FasterRoll2", new Upgrade(100, "Roll 20% faster", "FasterRoll", 0.0, "FasterRoll1"));
    upgradeManager.Add("FasterRoll3", new Upgrade(200, "Roll 20% faster", "FasterRoll", 0.0, "FasterRoll2"));
    upgradeManager.Add("DiceMultiplier1", new Upgrade(250, "Multiply all dice points by first dice", "DiceMultiplier", 99999));
    upgradeManager.Add("DiceMultiplier2", new Upgrade(10000, "Multiply all dice points by second dice", "DiceMultiplier", 999, "DiceMultiplier1"));
    upgradeManager.Add("UnlockCoinflippers", new Upgrade(1000, "Unlock coinflippers", "UnlockCoinflippers"));
    upgradeManager.Add("FasterFlips1", new Upgrade(1000, "Flip coins 20000% faster", "FasterFlips", 0.0, "UnlockCoinflippers"));
    upgradeManager.Add("FasterFlips2", new Upgrade(10000, "Flip coins 20000% faster", "FasterFlips", 0.0, "FasterFlips1"));
    upgradeManager.Add("FasterFlips3", new Upgrade(100000, "Flip coins 20000% faster", "FasterFlips", 0.0, "FasterFlips2"));
    upgradeManager.Add("SideChance1", new Upgrade(1000, "Double chance of coin landing on it's side", "SideChance", 99, "UnlockCoinflippers"));
    upgradeManager.Add("SideChance2", new Upgrade(10000, "Double chance of coin landing on it's side", "SideChance", 99, "SideChance1"));
    upgradeManager.Add("SideChance3", new Upgrade(100000, "Double chance of coin landing on it's side", "SideChance", 99, "SideChance2"));
    upgradeManager.Add("SidePointMultiplier1", new Upgrade(1000, "Gain 2000x more points when a coin lands on it's side", "SidePointMultiplier", 2, "UnlockCoinflippers"));
    upgradeManager.Add("SidePointMultiplier2", new Upgrade(10000, "Gain 2000x more points when a coin lands on it's side", "SidePointMultiplier", 2, "SidePointMultiplier1"));
    upgradeManager.Add("SidePointMultiplier3", new Upgrade(100000, "Gain 2000x more points when a coin lands on it's side", "SidePointMultiplier", 2, "SidePointMultiplier2"));
    upgradeManager.CreateElements();
    upgradeManager.CheckPrerequisites();
}

function RandomInt(lower, upper) {
    const difference = (upper + 1) - lower;
    const random = Math.random() * difference;
    return Math.ceil(random + lower) - 1;
}

function Update() {
    points.Update();
    diceManager.Update();
    upgradeManager.Update();
    coinflipperManager.Update();

    //Buttons
    rollDiceButton.Update();
    buyCoinflipperButton.Update();
}

//Globals
var updateInterval;
var tickSpeed = 50;

var points;
var diceManager;
var rollDiceButton;
var upgradeManager;
var coinflipperManager;

window.onload = Load;

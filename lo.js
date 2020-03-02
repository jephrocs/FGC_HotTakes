
var 
game = ["SFV", "KI", "Tekken 7", "UNIST", "Rev2", "SamSho", "BBTag", "Smash Ult", "DBFZ", "MVCI"];
adjectives = ["trash", "lazy", "toxic", "weak", "dumb", "overrated", "wack", "boring", "scrubby", "forgettable"];
conj = ["and", "because"]
thing = ["mechanics", "gameplay", "characters", "OST", "online", "balance"]
thingAre = ["mechanics are", "gameplay is", "characters are", "OST is", "online is"]
crit = ["bullshit", "bad", "nothing special", "designed poorly", "kusoge"]
comp = ["better", "worse"]
fgcdeg = ["scrubs", "degenerates"]
franchise = ["Capcom", "Namco", "ASW", "Nintendo", "NRS", "SNK",]
exag = ["only", "mostly", "tbh"]
marvel = ["XvSF", "MSHvSF", "MvC1", "MvC2", "MvC3", "MvCI"]
newgames = [["SFV", "Street Fighter"], ["StrIVe", "Guilty Gear"], ["MK11", "Mortal Kombat"], ["SmashUlt", "Smash"]]
gameAdj = ["scrubby", "watered down", "lack of interesting"]
fg = [[["3s", "USFIV", "SFV", "A3"], "Street fighter"], [["Smash 64", "Melee", "Sm4sh", "SmashUlt"], "Smash"], [["Tekken 7", "TT2", "Noctis", "Akuma"], "Tekken"], [["Rev2", "StrIVe", "Rev", "StrIVe"], "Guilty Gear"]]
oldgame = [[["ST", "HF", "A2"], "Capcom"], [["Xrd", "+R", "X2"], "ArcSys"], [["98", "2002UM", "KOFXIII"], "SNK"], [["MK2", "UMK3", "MK9"], "NRS"], [["Mvc2", "Umvc3", "Cvs2"], "Capcom"]]
currentGames = ["SFV", "MK11", "Tekken 7", "DBFZ", "BBTAG", "SmashUlt"]
bs = ["is such bullshit in ", "is so scrubby in ", "ruins", "is the reason I don't play", "taken out would actually improve"]
didSomeElse = ["slept thru top 8", "played melty blood in the bathroom", "korean backdashed home", "bitched on twitter"]
// openers = ["yo", "honestly", "man", "imma be real"]
topTier = [[["Claw", "Chun"], "ST"], [["Chun", "Yun"], "3s"], [["Elena", "Yun"], "USFIV"], [["G", "Rashid"], "SFV"], [["Akuma", "Geese"], "Tekken 7"], [["Akuma", "Karin"], "SFV"]]
mechanic = ["parry", "focus attack", "custom combos", "v-trigger", "air blocking", "rage arts", "fatal blow"]
waterGames = ["SFV", "MK11", "StrIVe", "Tekken 7", "Smash"]
// guestChar = [[["Negan", "Geese"], "Tekken"], [["Joker", "Terminator"], "MK11"], [["Terry", "Hero"], "SmashUlt"]]
wifi = ['everyone is on wi-fi', "you're underwater",]

// keep count for fire effect
var clicks = 0
var myOpacity = 0
function clickCounter() {
    clicks += 1;
    // console.log(clicks);
    myOpacity += 0.01
    document.getElementById("backdrop").style.width = "100%";
    document.getElementById("backdrop").style.opacity = myOpacity
    // console.log(myOpacity)

}
const random = (e) => {
    return Math.floor(Math.random() * e);
}
function sentence() {
    var randsix = Math.floor(Math.random() * 6);
    var rands = Math.floor(Math.random() * 4);
    var randt = Math.floor(Math.random() * 2);
    // var i = randGen();
    var numberOne = 3;
    var numberTwo = 3;
    var numberThree = 3;
    // run this loop until numberOne is different than numberThree
    do {
        numberOne = Math.floor(Math.random() * 6);
    } while (numberOne === numberThree);
    // run this loop until numberTwo is different than numberThree and numberOne
    do {
        numberTwo = Math.floor(Math.random() * 6);
    } while (numberTwo === numberThree || numberTwo === numberOne);
    var numberFour = 3;
    var numberFive = 3;
    var numberSix = 3;
    do {
        numberFour = Math.floor(Math.random() * 10);
    } while (numberFour === numberSix);
    do {
        numberFive = Math.floor(Math.random() * 10);
    } while (numberFive === numberSix || numberFive === numberFour);


    var sentence = game[random(10)] + " " + "is" + " " + adjectives[random(10)] + " " + conj[random(2)] + " " + "it's" + " " + thingAre[random(5)] + " " + crit[random(4)]
    var sentence2 = game[numberFour] + " " + "is " + " " + comp[random(2)] + " " + "than" + " " + game[numberFive]
    var sentence3 = game[random(10)] + " " + "has the most" + " " + adjectives[random(10)] + " " + thing[random(6)]
    var sentence4 = exag[random(3)] + " " + fgcdeg[random(2)] + " " + "play" + " " + game[random(10)]
    var sentence5 = marvel[numberOne] + " " + "doesn't even compare to" + " " + marvel[numberTwo]
    var sentence6 = newgames[rands][0] + " " + "is the worst" + " " + newgames[rands][1] + " " + "because of its" + " " + gameAdj[random(3)] + " " + thing[random(3)]
    var sentence7 = fg[rands][0][rands] + " doesnt even play like REAL " + fg[rands][1]
    var sentence8 = franchise[random(6)] + " " + "has a history of ignoring its loyal fan base "
    var sentence9 = "after " + oldgame[randt][0][random(3)] + ", " + oldgame[randt][1] + " just hasn't been the same since"
    // var sentence10 = "this culture of patching games is so " + adjectives[randsix] + ". " + "just look at " + currentGames[randsix]
    var sentence11 = topTier[randsix][0][random(2)] + " " + bs[random(5)] + " " + topTier[randsix][1]
    var sentence12 = currentGames[random(5)] + " is so boring to watch , I " + didSomeElse[random(4)] + " instead"
    var sentence13 = mechanic[random(7)] + " was a mistake"
    // var sentence14 = "making  " + waterGames[randfive] + "  more acessable was a great idea "
    var sentence15 = game[random(10)] + "'s " + "netcode always feels like " + wifi[random(2)]
    var sentence16 = franchise[random(6)] + " can't ever balance their game correctly "

    clickCounter();

    var tweet = [sentence, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9, sentence11, sentence12, sentence13, sentence15, sentence16]

    document.getElementById("sentence").innerHTML = '"' + tweet[random(13)] + '"'
}
// console.log(sentence())

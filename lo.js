

var game
game = ["SFV", "KI", "Tekken 7", "UNIST", "Rev2", "SamSho", "BBTag", "Smash Ult", "DBFZ", "MVCI"];


adjectives = ["trash", "lazy", "toxic", "weak", "dumb", "overrated", "wack", "boring", "scrubby", "forgettable"];



conj = ["and", "because"]

thing = ["mechanics", "gameplay", "characters", "OST", "online", "balance"]
thingAre = ["mechanics are", "gameplay is", "characters are", "OST is", "online is"]

crit = ["bs", "bad", "nothing special", "designed poorly", "kusoge"]
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

openers = ["yo", "honestly", "man", "imma be real"]

topTier = [[["Claw", "Chun"], "ST"], [["Chun", "Yun"], "3s"], [["Elena", "Yun"], "USFIV"], [["G", "Rashid"], "SFV"], [["Akuma", "Geese"], "Tekken 7"], [["Akuma", "Karin"], "SFV"]]

mechanic = ["parry", "focus attack", "custom combos", "v-trigger", "air blocking", "rage arts", "fatal blow"]

waterGames = ["SFV", "MK11", "StrIVe", "Tekken 7", "Smash"]

guestChar = [[["Negan", "Geese"], "Tekken"], [["Joker", "Terminator"], "MK11"], [["Terry", "Hero"], "SmashUlt"]]

wifi = ['everyone is on wi-fi', "you're underwater",]





function randGen() {
    return Math.floor(Math.random() * 5);
}

var clicks = 0
var myOpacity = 0
function clickCounter() {
    clicks += 1;
    console.log(clicks);

    myOpacity += 0.01
    document.getElementById("backdrop").style.width = "100%";
    document.getElementById("backdrop").style.opacity = myOpacity



    console.log(myOpacity)

}




function sentence() {
    var rand0 = 0
    var randtweet = Math.floor(Math.random() * 13);
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    var randseven = Math.floor(Math.random() * 7);
    var randsix = Math.floor(Math.random() * 6);
    var randfive = Math.floor(Math.random() * 5);
    var rands = Math.floor(Math.random() * 4);
    var randc = Math.floor(Math.random() * 3);
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


    var sentence = game[rand1] + " " + "is" + " " + adjectives[rand2] + " " + conj[randt] + " " + "it's" + " " + thingAre[randfive] + " " + crit[rands]

    var sentence2 = game[numberFour] + " " + "is " + " " + comp[randt] + " " + "than" + " " + game[numberFive]


    var sentence3 = game[rand1] + " " + "has the most" + " " + adjectives[rand4] + " " + thing[randsix]


    var sentence4 = exag[randc] + " " + fgcdeg[randt] + " " + "play" + " " + game[rand3]

    var sentence5 = marvel[numberOne] + " " + "doesn't even compare to" + " " + marvel[numberTwo]


    var sentence6 = newgames[rands][0] + " " + "is the worst" + " " + newgames[rands][1] + " " + "because of its" + " " + gameAdj[randc] + " " + thing[randc]


    var sentence7 = fg[rands][0][rands] + " doesnt even play like REAL " + fg[rands][1]


    var sentence8 = franchise[randsix] + " " + "has a history of ignoring its loyal fan base "

    var sentence9 = "after " + oldgame[randt][0][randc] + ", " + oldgame[randt][1] + " just hasn't been the same since"


    // var sentence10 = "this culture of patching games is so " + adjectives[randsix] + ". " + "just look at " + currentGames[randsix]
    var sentence11 = topTier[randsix][0][randt] + " " + bs[randfive] + " " + topTier[randsix][1]

    var sentence12 = currentGames[randfive] + " is so boring to watch , I " + didSomeElse[rands] + " instead"

    var sentence13 = mechanic[randseven] + " was a mistake"
    // var sentence14 = "making  " + waterGames[randfive] + "  more acessable was a great idea "
    var sentence15 = game[rand1] + "'s " + "netcode always feels like " + wifi[randt]
    var  sentence16 = franchise[randsix] + " can't ever balance their game correctly "

    clickCounter();






    var tweet = [sentence, sentence2, sentence3, sentence4, sentence5, sentence6, sentence7, sentence8, sentence9,  sentence11, sentence12, sentence13, sentence15, sentence16]



    console.log(tweet[randtweet]);
    document.getElementById("sentence").innerHTML = '"' + tweet[randtweet] + '"'
}
// console.log(sentence())

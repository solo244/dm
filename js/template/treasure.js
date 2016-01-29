$(document).ready(function(){

  /*
   * Open up the right menu
   */
  $("#contentTreasure .innerContent > div").css({"top" : "270px"});

  $("#contentTreasure .dashHeader i").click(function(){
    var buttonContext = $(this).prop("id").split("gen").join("").toLowerCase().replace("gen","");
    var nexMainTextGen = buttonContext + "Generator";

    switch (nexMainTextGen){
      case "treasureGenerator":
        $("#contentTreasure .dashHeader h2").html("Treasure Generator");
        break;
      case "npcGenerator":
        $("#contentTreasure .dashHeader h2").html("NPC Generator");
        break;
      case "shopGenerator":
        $("#contentTreasure .dashHeader h2").html("Shop Generator");
        break;
      default:
        break;
    }

    $("#contentTreasure .dashHeader i").css("color", "rgb(27, 31, 41)");
    $(this).css("color", "rgb(155, 182, 201)");

    $("#contentTreasure .innerContent > div").animate({"top" : "270px"}, 500);
    $("#" + nexMainTextGen).animate({"top" : "0px"}, 500);

  });

  /*
   * Open the right generator tables - magic
   */
  var activeStateGeneratorMagic;

  $("#treasureGenerator .sidebar li").click(function(){
    var whatId = $(this).html();
    console.log(whatId);
    switch (whatId) {
      case 'Magic A':
      console.log("hi");
        resetallMagicTables();
        $(".treasureMagicA").animate({"left": "200px"}, 500);
        $(this).addClass("selectedMagic");
        break;
      case 'Magic B':
        resetallMagicTables();
        $(".treasureMagicB").animate({"left": "200px"}, 500);
        $(this).addClass("selectedMagic");
        break;
      case 'Magic C':
        resetallMagicTables();
        $(".treasureMagicC").animate({"left": "200px"}, 500);
        $(this).addClass("selectedMagic");
        break;
      default:
        console.log("none selected");
    }

    function resetallMagicTables(){
      $(".treMag").animate({"left": "600px"}, 500);
      $("#treasureGenerator .sidebar li").removeClass("selectedMagic");
    }
  });

  /*
   * Roll those d100's for treasure
   */
   var treasureListA = [
     "Potion of healing, <em>Heals 2d4 hp</em>",
     "Spell Scroll, <em>random cantrip of a random class</em>",
     "Potion of climbing, <em>Creature becomes capable of climbing verticle walls as difficult terrain</em>",
     "Potion of greater healing, <em>Heals way more than a smaller healing potion</em>",
     "Bag Of Holding, <em>Bag that might hold up to 250kg or 600kg depending on size. No life after 10 minutes</em>",
     "Driftglobe, <em>Giant ball of light</em>"
   ];

  $(".treasureMagicA .rollButton").click(function(){
    var rDie = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicA").find(".rollResult").html(rDie);
    switch (true){
      case (rDie < 51): $(".treasureMagicA .treasureResult").html(treasureListA[0]); break;
      case (rDie < 61): $(".treasureMagicA .treasureResult").html(treasureListA[1]); break;
      case (rDie < 71): $(".treasureMagicA .treasureResult").html(treasureListA[2]); break;
      case (rDie < 99): $(".treasureMagicA .treasureResult").html(treasureListA[3]); break;
      case (rDie < 100): $(".treasureMagicA .treasureResult").html(treasureListA[4]); break;
      case (rDie === 100): $(".treasureMagicA .treasureResult").html(treasureListA[5]); break;
      default: break;
    }
  });

  var treasureListB = [
    "Potion of greater healing",
    "Potion of fire breath",
    "Potion of resistance",
    "Potion of animal friendship",
    "Potion of growth",
    "Potion of water breathing",
    "Spell scroll (lvl 2)",
    "Spell Scroll (lvl 3)",
    "Bag Oh Holding",
    "Keogthoms ointment",
    "Oil of slipperiness",
    "Dust of disappearence",
    "Dust of dryness",
    "Dust of sneezing and chocking",
    "Elemental gem",
    "Philter of love",
    "Alchemy jug",
    "Cap of water breathing",
    "Cloak of the manta ray",
    "Driftglobe",
    "Goggles of night",
    "Helm comprehend languages",
    "Immovable rod ",
    "Latern of revealing",
    "Mariner's armor",
    "Mithral Armor",
    "Potion of poison",
    "Ring of swimming",
    "Robe of useful items",
    "Rope of climbing",
    "Saddle of the cavalier",
    "Wand of magic detection"
  ];

  $(".treasureMagicB .rollButton").click(function(){
    var rDie = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicB").find(".rollResult").html(rDie);
    switch (true){
      case (rDie < 16): $(".treasureMagicB .treasureResult").html(treasureListB[0]); break;
      case (rDie < 23): $(".treasureMagicB .treasureResult").html(treasureListB[1]); break;
      case (rDie < 30): $(".treasureMagicB .treasureResult").html(treasureListB[2]); break;
      case (rDie < 35): $(".treasureMagicB .treasureResult").html(treasureListB[3]); break;
      case (rDie < 40): $(".treasureMagicB .treasureResult").html(treasureListB[4]); break;
      case (rDie < 56): $(".treasureMagicB .treasureResult").html(treasureListB[5]); break;
      case (rDie < 60): $(".treasureMagicB .treasureResult").html(treasureListB[6]); break;
      case (rDie < 65): $(".treasureMagicB .treasureResult").html(treasureListB[7]); break;
      case (rDie < 68): $(".treasureMagicB .treasureResult").html(treasureListB[8]); break;
      case (rDie < 71): $(".treasureMagicB .treasureResult").html(treasureListB[9]); break;
      case (rDie < 74): $(".treasureMagicB .treasureResult").html(treasureListB[10]); break;
      case (rDie < 76): $(".treasureMagicB .treasureResult").html(treasureListB[11]); break;
      case (rDie < 78): $(".treasureMagicB .treasureResult").html(treasureListB[12]); break;
      case (rDie < 80): $(".treasureMagicB .treasureResult").html(treasureListB[13]); break;
      case (rDie < 82): $(".treasureMagicB .treasureResult").html(treasureListB[14]); break;
      case (rDie < 84): $(".treasureMagicB .treasureResult").html(treasureListB[15]); break;
      case (rDie < 86): $(".treasureMagicB .treasureResult").html(treasureListB[16]); break;
      case (rDie === 86): $(".treasureMagicB .treasureResult").html(treasureListB[17]); break;
      case (rDie === 87): $(".treasureMagicB .treasureResult").html(treasureListB[18]); break;
      case (rDie === 88): $(".treasureMagicB .treasureResult").html(treasureListB[19]); break;
      case (rDie === 89): $(".treasureMagicB .treasureResult").html(treasureListB[20]); break;
      case (rDie === 90): $(".treasureMagicB .treasureResult").html(treasureListB[21]); break;
      case (rDie === 91): $(".treasureMagicB .treasureResult").html(treasureListB[22]); break;
      case (rDie === 92): $(".treasureMagicB .treasureResult").html(treasureListB[23]); break;
      case (rDie === 93): $(".treasureMagicB .treasureResult").html(treasureListB[24]); break;
      case (rDie === 94): $(".treasureMagicB .treasureResult").html(treasureListB[25]); break;
      case (rDie === 95): $(".treasureMagicB .treasureResult").html(treasureListB[26]); break;
      case (rDie === 96): $(".treasureMagicB .treasureResult").html(treasureListB[27]); break;
      case (rDie === 97): $(".treasureMagicB .treasureResult").html(treasureListB[28]); break;
      case (rDie === 98): $(".treasureMagicB .treasureResult").html(treasureListB[29]); break;
      case (rDie === 99): $(".treasureMagicB .treasureResult").html(treasureListB[30]); break;
      case (rDie === 100): $(".treasureMagicB .treasureResult").html(treasureListB[31]); break;
      default: break;
    }
  });

  var treasureListC = [
    "Potion of superior healing",
    "Spell scroll (lvl4)",
    "Potion of clairvoyance",
    "Potion of frost strength giant",
    "Potion of invulnerability",
    "Potion of mind reading",
    "Spell scroll (5 lvl)",
    "Elixir of health",
    "Quaal's feather token",
    "Scroll of protection",
    "Bag of beans",
    "Bead of force",
    "Chime of opening",
    "Decanter of endless water",
    "Eyes of minute seeing",
    "Folding boat",
    "Hewards handy haversack ",
    "Horseshoes of speed",
    "Necklace of fireballs",
    "Periapt of health",
    "Sending stones"
  ];

  $(".treasureMagicC .rollButton").click(function(){
    var rDie = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicC").find(".rollResult").html(rDie);
    switch (true){
      case (rDie < 16): $(".treasureMagicC .treasureResult").html(treasureListC[0]); break;
      case (rDie < 23): $(".treasureMagicC .treasureResult").html(treasureListC[1]); break;
      case (rDie < 28): $(".treasureMagicC .treasureResult").html(treasureListC[2]); break;
      case (rDie < 33): $(".treasureMagicC .treasureResult").html(treasureListC[3]); break;
      case (rDie < 38): $(".treasureMagicC .treasureResult").html(treasureListC[4]); break;
      case (rDie < 43): $(".treasureMagicC .treasureResult").html(treasureListC[5]); break;
      case (rDie < 53): $(".treasureMagicC .treasureResult").html(treasureListC[6]); break;
      case (rDie < 63): $(".treasureMagicC .treasureResult").html(treasureListC[7]); break;
      case (rDie < 68): $(".treasureMagicC .treasureResult").html(treasureListC[8]); break;
      case (rDie < 73): $(".treasureMagicC .treasureResult").html(treasureListC[9]); break;
      case (rDie < 76): $(".treasureMagicC .treasureResult").html(treasureListC[10]); break;
      case (rDie < 82): $(".treasureMagicC .treasureResult").html(treasureListC[11]); break;
      case (rDie < 85): $(".treasureMagicC .treasureResult").html(treasureListC[12]); break;
      case (rDie < 90): $(".treasureMagicC .treasureResult").html(treasureListC[13]); break;
      case (rDie < 92): $(".treasureMagicC .treasureResult").html(treasureListC[14]); break;
      case (rDie < 94): $(".treasureMagicC .treasureResult").html(treasureListC[15]); break;
      case (rDie < 96): $(".treasureMagicC .treasureResult").html(treasureListC[16]); break;
      case (rDie < 98): $(".treasureMagicC .treasureResult").html(treasureListC[17]); break;
      case (rDie === 98): $(".treasureMagicC .treasureResult").html(treasureListC[18]); break;
      case (rDie === 99): $(".treasureMagicC .treasureResult").html(treasureListC[19]); break;
      case (rDie === 100): $(".treasureMagicC .treasureResult").html(treasureListC[20]); break;
      default: break;
    }
  });

  /*
   * Open the right generator tables - shops
   */
  $("#shopGenerator .sidebar li").click(function(){
    var whatId = "treasure" + $(this).html().replace(" Shop", "").replace(" and Games", "").replace(" Dealers", "").replace(" Store", "").replace(" supplies", "");
    console.log(whatId);

    $("#shopGenerator .treShop").animate({"left" : "500px"}, 500);
    $("." + whatId).animate({"left" : "0px"}, 500);

    $("#shopGenerator .sidebar li").removeClass("selectedMagic");
    $(this).addClass("selectedMagic");
  });

  /*
   * Open the right generator tables - names
   */
  $("#npcGenerator .sidebar li").click(function(){
    var whatId = "treasure" + $(this).html();
    console.log(whatId);

    $("#npcGenerator .treNPC").animate({"left" : "500px"}, 500);
    $("." + whatId).animate({"left" : "0px"}, 500);

    $("#npcGenerator .sidebar li").removeClass("selectedMagic");
    $(this).addClass("selectedMagic");
  });

  /*
   * Randomly generate names and shopkeepers
   */
  var randomShopKeepers = [
    "The shopkeeper is a willowy male gnome named Kurdu.",
    "The shopkeeper is a young male half-elf named Homund.",
    "The shopkeeper is an old male elf named Ithir.",
    "The shopkeeper is a tall male half-orc named Heodoingoia. He is a retired thief, and keeps a fine steel dagger at his belt.",
    "The shopkeeper is a tall female elf named Thalia. She is particularly interested in tomes and scrolls from the lost elven kingdom of Dorwine.",
    "The shopkeeper is an old female elf named Gilme.",
    "The shopkeeper is an overweight male gnome named Sanzir. He will purchase items for one-third value, no questions asked.",
    "The shopkeeper is a young male dwarf named Dwari. He is a retired adventurer, and keeps a collection of maps of forgotten tombs and dungeons.",
    "The shopkeeper is a bold female half-elf named Alin. She is a retired adventurer, and often tells stories of distant lands and terrible monsters.",
    "The shopkeeper is a slender female human named Wulburh.",
    "The shopkeeper is an impish female half-elf named Mirielye. She was once an adventurer, but retired after Illfang the Kobold Lord murdered her family.",
    "The shopkeeper is a willowy male gnome named Rici. He was once an adventurer, but was maimed by a dragon.",
    "The shopkeeper is a slender male half-elf named Berny.",
    "The shopkeeper is a quiet female elf named Findalye. She was once an adventurer, but retired after her companions were lost in the Caverns of Illfang the Kobold Lord.",
    "The shopkeeper is a short female halfling named Wene Cholte.",
    "The shopkeeper is an old female human named Eren. She will purchase items for one-third value, no questions asked.",
    "The shopkeeper is a bold female half-elf named Nimluthel. She was once an adventurer, but stumbled into a fortune and retired.",
    "The shopkeeper is a tall female gnome named Carel. She is a retired adventurer, and keeps a collection of maps of forgotten tombs and dungeons.",
    "The shopkeeper is a stout female elf named Ebrialoth. She was once an adventurer, but retired to marry and raise a family.",
    "The shopkeeper is a thin male dwarf named Urim. He will purchase items for one-third value, no questions asked.",
    "The shopkeeper is a tall male half-elf named Willes. He will purchase items for one-third value, no questions asked.",
    "The shopkeeper is an old male dwarf named Manni.",
    "The shopkeeper is an overweight female elf named Celalwe. She is a retired thief, and is rumored to have a hidden cache of stolen treasure.",
    "The shopkeeper is an adventurous female half-orc named Brosla. She is a retired thief, and is rumored to have a hidden cache of stolen treasure.",
    "The shopkeeper is a suspicious male human named Gauward Elnnys. He is a retired adventurer, and keeps a collection of maps of forgotten tombs and dungeons.",
    "The shopkeeper is a tall male half-orc named Stimir. He was once an adventurer, but stumbled into a fortune and retired.",
    "The shopkeeper is an overweight male elf named Ricua. He will purchase items for one-third value, no questions asked.",
    "The shopkeeper is a hardworking female human named Odgild.",
    "The shopkeeper is a willowy male halfling named Inoc. He is a retired adventurer, and keeps a collection of maps of distant lands.",
    "The shopkeeper is an old female halfling named Adan Finell. She was once an adventurer, but was maimed in the Dark Catacombs of the Demon Lord.",
    "The shopkeeper is a willowy male half-orc named Lavoi. He is particularly interested in armor and shields from the hoard of the dragon Arsid.",
    "The shopkeeper is a tall male dwarf named Bali.",
    "The shopkeeper is a tall male gnome named Rainatz.",
    "The shopkeeper is an old male human named Rewyn."
  ];

  $("#shopKeepBut").click(function(){
   var numberKeepersTotal = randomShopKeepers.length;
   var randomKeep = Math.floor(Math.random() * (numberKeepersTotal-1)) + 1;
   $("#randomisedKeepers").append("<p>" + randomShopKeepers[randomKeep] + "</p>");

   $("#randomisedKeepers p").click(function(){
     $(this).remove();
   });
  });

  /*
   * Generate just names based on race
   */
  var theSuperListOfNames = [
    "<p>Roniah</p><p>Galal</p><p>Veral</p><p>Adar</p><p>Marem</p><p>Verek</p><p>Baver</p><p>Mahech</p><p>Oras</p><p>Galad</p><p>Tarin</p><p>Mared</p><p>Elyihm</p><p>Taras</p><p>Beras</p><p>Bavahr</p><p>Kereb</p><p>Eryiah</p><p>Darek</p><p>Bavak</p>",
    "<p>Kilprax</p><p>Vyuroth</p><p>Wudaar</p><p>Balnaar</p><p>Krivzire</p><p>Frorash</p><p>Kiltrin</p><p>Wulsashi</p><p>Lorgrax</p><p>Drawunax</p><p>Beljhan</p><p>Medqull</p><p>Ghexan</p><p>Eraxan</p><p>Fronaar</p><p>Rasseth</p><p>Xarjurn</p><p>Belsashi</p><p>Faerzavur</p><p>Iorwarum</p>",
    "<p>Omard<br>Everhep</p><p>Taraxle<br>Myarn</p><p>Relondaer<br>Kilndar</p><p>Gelhrae<br>Auvryt'tar</p><p>Bedinyon<br>Yril'Lysuae</p><p>Nilolan<br>Yauntylan</p><p>Dankoph<br>Dhunnaen</p><p>Dronel<br>Dhunnoryn</p><p>Jyslin<br>Elpragh</p><p>Malaggar<br>Coborel</p><p>Mermyr<br>Myund</p><p>Lymezt<br>Orlyrae</p><p>Tluthinyon<br>Auvryani</p><p>Rylkah<br>Do'iryn</p><p>Nymrini'th<br>Xiltiom</p><p>Filzmyr<br>Glannein</p><p>Tazengath<br>Baenrearn</p><p>Chaslil<br>Zolarran</p><p>Yuimmar<br>Quavein</p><p>Elamshin<br>Zauviir</p><p>Umraestin<br>Melath</p><p>Brizala<br>Eilszynge</p><p>Zarynda<br>Oussath</p><p>Pellanstra<br>Rilynrae</p><p>Khazana<br>Hyluan</p><p>Miz'less<br>Zoloara</p><p>Xullzalle<br>Hambra</p><p>Sararynna<br>Colinath</p><p>Elvraema<br>Yril'Lysaen</p><p>Vornalla<br>Yril'Lysaen</p>",
    "<p>Ermkahm</p><p>Gramkahm</p><p>Ermmiir</p><p>Gergrum</p><p>Thogus</p><p>Grildus</p><p>Bhelgram</p><p>Morthrun</p><p>Bungurn</p><p>Dulbrek</p><p>Tharrik</p><p>Hulnik</p><p>Bunbrek</p><p>Daldek</p><p>Ermdrus</p><p>Ermkum</p><p>Ranmyr</p><p>Gardir</p><p>Hulkohm</p><p>Bunkum</p>",
    "<p>Fennorin</p><p>Qinpeiros</p><p>Cradithas</p><p>Oloceran</p><p>Petdan</p><p>Daelamin</p><p>Zinren</p><p>Petjeon</p><p>Beiqen</p><p>Leotumal</p><p>Dorquinal</p><p>Balven</p><p>Carfir</p><p>Petcan</p><p>Carric</p><p>Norric</p><p>Sarpetor</p><p>Hernan</p><p>Heikian</p><p>Sarfaren</p>",
    "<p>Bralag</p><p>Ararth</p><p>Drozar</p><p>Rulag</p><p>Arazth</p><p>Zrakar</p><p>Amkar</p><p>Brazeg</p><p>Grogh</p><p>Dorkahr</p><p>Amrg</p><p>Drarg</p><p>Ferrm</p><p>Ferlag</p><p>Karram</p><p>Hanelzal</p><p>Dranel</p><p>Dranelna</p><p>Nahiza</p><p>Halmarah</p>",
    "<p>Sindon</p><p>Kasfiz</p><p>Jecryn</p><p>Sawin</p><p>Felmop</p><p>Zilkas</p><p>Kelrug</p><p>Hisrug</p><p>Briner</p><p>Hisryn</p><p>Trarick</p><p>Farhim</p><p>Sayur</p><p>Ronji</p><p>Corgim</p><p>Krihani</p><p>Redysa</p><p>Ellys</p><p>Yomyn</p><p>Triwyn</p>",
    "<p>Geavek Vathunakanu</p><p>Kavakon Katho-Oliago</p><p>Keokan Ovethatake</p><p>Maveith Valu-Nigo</p><p>Kavakein Nugalathala</p><p>Augun Athuniago</p><p>Kavaman Ugunelov<p>Puvhik Elaniala</p><p>Thothok Thenalaga</p><p>Augnath Thunukukate</p><p>Vivith Elanukena</p><p>Pathi Gathakukena</p><p>Lalig Ugunalathi</p><p>Mealok Uthenu-Kathai</p><p>Ghagath Nola-Kageane</p><p>Thakea Nalakamune</p><p>Lavu Nalakugoni</p><p>Vaukia Katho-Oligane</p><p>Kuomia Agu-Ulutha</p><p>Oripu Kulumugate</p>",
    "<p>Yorben</p><p>Panavor</p><p>Panminar</p><p>Oriqinor</p><p>Krikoris</p><p>Ulphanis</p><p>Davril</p><p>Kriqarim</p><p>Traelor</p><p>Krielor</p><p>Nilstaer</p><p>Ulvalor</p><p>Martumil</p><p>Syllamir</p><p>Yorlumin</p><p>Jenenyphe</p><p>Marelahne</p><p>Faebellis</p><p>Relelor</p><p>Kysaerys</p>",
    "<p>Ogguagash</p><p>Zusotir</p><p>Ororsh</p><p>Ronubark</p><p>Mog</p><p>Zaresk</p><p>Kulursh</p><p>Drask</p><p>Ukribak</p><p>Kulog</p><p>Hunagur</p><p>Zariz</p><p>Therork</p><p>Tharomash</p><p>Honudurk</p><p>Tumadur</p><p>Sumegu</p><p>Elosh</p><p>Zenishi</p><p>Merumar</p>",
    "<p>Beldon</p><p>Tetran</p><p>Perton</p><p>Quotran</p><p>Garbul</p><p>Laamin</p><p>Lakin</p><p>Vingin</p><p>Davvon</p><p>Finamin</p><p>Horsire</p><p>Rivon</p><p>Norvon</p><p>Ricbul</p><p>Sankas</p><p>Lidmia</p><p>Hilfice</p><p>Lidkis</p><p>Qisys</p><p>Zefhaly</p>",
    "<p>Garner</p><p>Darcel</p><p>Henry</p><p>Alvin</p><p>Parke</p><p>Carlyle</p><p>Cort</p><p>Diandre</p><p>Stephen</p><p>Kleopas</p><p>Abram</p><p>Seabert</p><p>Hobart</p><p>Alke</p><p>Nikolaus</p><p>Sinje</p><p>Nann</p><p>Jacky</p><p>Jaliyah</p><p>Enna</p>",
    "<p>Garturok Boulderfist</p><p>Doenrat Singlehorn</p><p>Garkun Honorheart</p><p>Garrak Keeneye</p><p>Durkar Boldmind</p><p>Terakar Braveheart</p><p>Gunkan Goblinbane</p><p>Koorus Boulderhide</p><p>Goetus Thickhide</p><p>Turbur Heavyhide</p><p>Mirras Steelskull</p><p>Kargur Gloryhunter</p><p>Doenranak Brightheart</p><p>Hunraduk Orcbane</p><p>Kirtaruk Orcslayer</p><p>Uovakane Honorheart</p><p>Laantrin Vigileye</p><p>Iaslas Steelskin</p><p>Muumin Heavyhide</p><p>Teerin Jaggedhorns</p>",
    "<p>Hunraya</p><p>Tinbam</p><p>Huatari</p><p>Arbani</p><p>Dishara</p><p>Ilushara</p><p>Luhu</p><p>Sumashtu</p><p>Saritana</p><p>Arshari</p><p>Balanua</p><p>Rualua</p><p>Kuari</p><p>Dururam</p><p>Tinshara</p><p>Maninaram</p><p>Ashtunaram</p><p>Kupana</p><p>Ishshi</p><p>Eshuba</p>",
    "<p>Karmus</p><p>Akilius</p><p>Thyus</p><p>Thezire</p><p>Errias</p><p>Carmeros</p><p>Kosdos</p><p>Hymn</p><p>Mastery</p><p>Trouble</p><p>Rallech</p><p>Ekthor</p><p>Andira</p><p>Aetmarir</p><p>Rolxes</p><p>Dimcyra</p><p>Ridoris</p><p>Grispira</p><p>Valfaris</p><p>Marnarei</p>"
  ];

  $(".treasureName select").change(function(){
    var raceChoice = parseInt($(this).val());
    $("#listOfNames").html(theSuperListOfNames[raceChoice-1]);
  });

});

<div class="dashHeader">
  <h2>Generator</h2>

  <i class="fa fa-magic" id="treasureGen"></i>
  <i class="fa fa-user" id="npcGen"></i>
  <i class="fa fa-building" id="shopGen"></i>
</div>

<div class="innerContent">
  <div id="treasureGenerator">
    <div class="sidebar scrollPlease"><?php include 'treasure/sidebar.php' ?></div>
    <div class="treMag treasureMagicA"><?php include 'treasure/magicA.php' ?></div>
    <div class="treMag treasureMagicB"><?php include 'treasure/magicB.php' ?></div>
    <div class="treMag treasureMagicC"><?php include 'treasure/magicC.php' ?></div>
  </div>
  <div id="npcGenerator">
    <div class="sidebar scrollPlease"><?php include 'npc/sidebar.php' ?></div>
    <div class="treNPC treasureNPC"></div>
  </div>
  <div id="shopGenerator">
    <div class="sidebar scrollPlease"><?php include 'shop/sidebar.php' ?></div>
    <div class="treShop treasureShop"></div>
  </div>
</div>

<div class="dashHeader">
  <h2>Stuff</h2>
  <!-- Normal -->
  <i class="fa fa-gavel" id="stuffMelee"></i>
  <i class="fa fa-bullseye" id="stuffRanged"></i>
  <i class="fa fa-heart" id="stuffArmor"></i>
  <i class="fa fa-flask" id="stuffPotion"></i>
  <!-- Story -->
  <i class="fa fa-hourglass-end" id="stuffStory"></i>
</div>

<div class="innerContent">
  <div class="stuffs smelee"><?php include 'melee.php' ?></div>
  <div class="stuffs sranged"><?php include 'ranged.php' ?></div>
	<div class="stuffs sarmor"><?php include 'armor.php' ?></div>
	<div class="stuffs spotion"><?php include 'potions.php' ?></div>

  <div class="stuffs sstory">
    <i class="fa fa-arrow-left backStuff"></i>
    <div class="sidebar scrollPlease" id="storyItemsMenu"><?php include 'story/sidebar.php' ?></div>
    <div class="sStu" id="ss1"><?php include 'story/items/story1.php' ?></div>
    <div class="sStu" id="ss2"><?php include 'story/items/story2.php' ?></div>
    <div class="sStu" id="ss3"><?php include 'story/items/story3.php' ?></div>
    <div class="sStu" id="ss4"><?php include 'story/items/story4.php' ?></div>
    <div class="sStu" id="ss5"><?php include 'story/items/story5.php' ?></div>
    <div class="sStu" id="ss6"><?php include 'story/items/story6.php' ?></div>
    <div class="sStu" id="ss7"><?php include 'story/items/story7.php' ?></div>
    <div class="sStu" id="ss8"><?php include 'story/items/story8.php' ?></div>
  </div>
</div>

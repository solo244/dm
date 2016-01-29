<div class="dashHeader">
  <h2>Combat</h2>

  <i class="fa fa-refresh" id="combatSort"></i>
  <i class="fa fa-floppy-o" id="combatSave"></i>
  <i class="fa fa-spinner" id="combatLoad"></i>
  <i class="fa fa-pause" id="combatPause"></i>
  <!-- -->
  <div class="notification"></div>
</div>

<div class="innerContent">
  <!-- Players -->
  <div id="iniSorting">
    <div class="player sort" id="playerNala">
      <img src="images/combat/nala.jpg" width="80" height="80"/><?php include 'template/player.php' ?>
    </div>
    <div class="player sort" id="playerLai">
      <img src="images/combat/lai.jpg" width="80" height="80"/><?php include 'template/player.php' ?>
    </div>
    <div class="player sort" id="playerOttan">
      <img src="images/combat/ottan.jpg" width="80" height="80"/><?php include 'template/player.php' ?>
    </div>
    <div class="player sort" id="playerThia">
      <img src="images/combat/thia.jpg" width="80" height="80"/><?php include 'template/player.php' ?>
    </div>
    <!-- Enemy -->
    <div class="enemy sort" id=""><img src="images/combat/enemy.png" width="80" height="80"/><?php include 'template/enemy.php' ?></div>
    <div class="enemy sort" id=""><img src="images/combat/enemy.png" width="80" height="80"/><?php include 'template/enemy.php' ?></div>
    <div class="enemy sort" id=""><img src="images/combat/enemy.png" width="80" height="80"/><?php include 'template/enemy.php' ?></div>
    <div class="enemy sort" id=""><img src="images/combat/enemy.png" width="80" height="80"/><?php include 'template/enemy.php' ?></div>
    <div class="enemy sort" id=""><img src="images/combat/enemy.png" width="80" height="80"/><?php include 'template/enemy.php' ?></div>
    <div class="enemy sort" id=""><img src="images/combat/enemy.png" width="80" height="80"/><?php include 'template/enemy.php' ?></div>
  </div>

  <div class="dierollWindow">
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>4<?php include 'template/dieroll_e.php' ?></div>
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>6<?php include 'template/dieroll_e.php' ?></div>
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>8<?php include 'template/dieroll_e.php' ?></div>
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>10<?php include 'template/dieroll_e.php' ?></div>
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>12<?php include 'template/dieroll_e.php' ?></div>
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>20<?php include 'template/dieroll_e.php' ?></div>
    <div class="dieRollRow"><?php include 'template/dieroll.php' ?>100<?php include 'template/dieroll_e.php' ?></div>
  </div>
</div>

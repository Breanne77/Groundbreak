// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"250","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"0","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"v1.05 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"---------------------","status":true,"description":"----------------------------------------------------------------","parameters":{}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"","screenHeight":"","changeWindowWidthTo":"816","changeWindowHeightTo":"624","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"---------------------","status":true,"description":"----------------------------------------------------------------","parameters":{}},
{"name":"MPP_SpecialFormBattle","status":false,"description":"【ver.1.7】 Create battle formation such as back attack and side attack.","parameters":{"Back Attack State":"0","<Same> on Preemptive":"true","<Back> on Surprise":"true","Escape Item at <Pincer>":"true","=== Command ===":"Command related","Used Item Metadata":"{\"narrow\":\"narrow\"}","Troop Metadata":"{\"Preemptive\":\"Preemptive\",\"Surprise\":\"Surprise\",\"Invert\":\"Invert\",\"Same\":\"Same\",\"Back\":\"Back\",\"Side\":\"Side\",\"Pincer\":\"Pincer\"}"}},
{"name":"Galv_ExAgiTurn","status":false,"description":"(v.1.1) Have battlers gain an additional turn if they have much higher agility","parameters":{"Agi Percent":"100","Ex Turn Image":"exturn","Image Fade Speed":"25","Image X":"20","Image Y":"400","Ex Turn Name Color":"#fff","Non Ex Turn Name Color":"#666"}},
{"name":"NearEventSensor","status":true,"description":"周辺イベント感知プラグイン","parameters":{"DefaultFlash":"true","DefaultBalloon":"0","DisableEmpty":"true","SensorDistance":"2","FlashColor":"{\"Red\":\"255\",\"Green\":\"255\",\"Blue\":\"255\",\"Alpha\":\"255\"}","FlashDuration":"60","BalloonInterval":"15","WaitForBalloon":"true","ConsiderationDir":"false","ApplyPlayer":"false","EraseWhenAway":"false"}},
{"name":"---------------------","status":true,"description":"----------------------------------------------------------------","parameters":{}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1.5","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"SRD_TimedAttackCore","status":true,"description":"Adds a system which forces the user to time certain inputs to preform actions during battle.","parameters":{"Enable Touch?":"true","Default Source":"None","== Window Options ==":"","X Alignment":"Center","Y Alignment":"Top","X Offset":"0","Y Offset":"0","Window Width":"Graphics.width","Window Height":"this.fittingHeight(3)","== Default Props. ==":"","Sound Effect":"Sword2","Cursor Image":"","Background Image":"DefaultBackground","Window Opacity":"255","Target Location":"Graphics.width / 2","Repeat Type":"None","Speed":"10","Main Color":"#FFFFFF","Shape":"Rectangle","Width":"24","Outline Color":"#000000","Outline Size":"3","Direction":"Right","Flash Rate":"8"}},
{"name":"SRD_TimedAttack_Arrows","status":true,"description":"A Timed Attack that requires the Player to push the arrow keys in the sequence shown on screen.","parameters":{"Up Condition":"Input.isTriggered('up')","Right Condition":"Input.isTriggered('right')","Down Condition":"Input.isTriggered('down')","Left Condition":"Input.isTriggered('left')","== Default Props. ==":"","Normal SE":"Wind4","Miss SE":"Buzzer1","Success SE":"Bell3","Fail SE":"Break","Image":"Arrows","Phrase":"Time Limit: %1","Command Amount":"4","Randomize Commands":"true","Frames":"150","Penalty":"40","Success Power":"1","Fail Power":"0","Above Height":"130","Hit Animation":"-20, 0.1, 0.1, -2, -2","Flash Rate":"16","Flash Time":"40"}},
{"name":"SRD_TimedAttack_Circle","status":true,"description":"Adds a new Timed Attack system involving circles that skrink and must be stopped at their smallest point.","parameters":{"== Default Props. ==":"","Sound Effect":"Sword2","Circle Image":"","Background Image":"","Repeat Type":"None","Color":"Red","Speed":"5","Initial Radius":"200","Ring Thickness":"8","Flash Rate":"16","Flash Time":"40","Time Limit":"0"}},
{"name":"SRD_TimedAttack_Clock","status":true,"description":"Adds a new Timed Attack system that is similar to a clock hand revolving around the face of the clock.","parameters":{"== Default Props. ==":"","Sound Effect":"Sword2","Background Image":"","Repeat Type":"None","Speed":"5","Length":"60","Height":"150","Thickness":"4","Start Position":"0","End Position":"360","Hand Color":"#ffffff","Base Color":"#000000","Fade Color":"#cccccc","Background Color":"#5e6b6e","Outline Color":"#000000","Outline Width":"2","Target 1":"165, 195, #F25B60, 1","Target 2":"","Target 3":"","Target 4":"","Target 5":"","Cooldown":"16","Flash Rate":"16","Flash Time":"40"}},
{"name":"SRD_TimedAttack_Mash","status":true,"description":"Adds a new Timed Attack system that requires the Player to mash a button to get a gauge to a certain point.","parameters":{"== Default Props. ==":"","Normal SE":"Sword2","Success SE":"Bell3","Fail SE":"Buzzer1","Smooth Mode":"true","Phrase":"Mash! %1","Start Amount":"1000","Max Amount":"2000","Seconds":"5","Speed":"5","Tap Gain":"15","Width":"200","Height":"12","Above Height":"150","Color 1":"#33ccff","Color 2":"#33ccff","Flash Rate":"16","Flash Time":"40"}},
{"name":"SRD_TimedAttack_Wheel","status":true,"description":"A ring appears on screen and commands cycle around it. The Player must press the commands as they appear on the top.","parameters":{"\"Z\" Press Condition":"Input.isTriggered('ok') || (TouchInput.isTriggered() && TouchInput.x <= Graphics.width / 2)","\"X\" Press Condition":"Input.isTriggered('cancel') || (TouchInput.isTriggered() && TouchInput.x > Graphics.width / 2)","== Default Props. ==":"","Normal SE":"Wind4","Miss SE":"Buzzer1","Success SE":"Bell3","Fail SE":"Break","Button Image":"ZX","Ring Image":"Ring","Target Image":"Target","Command Amount":"4","Randomize Commands":"true","Speed":"0.10","Penalty":"0.01","Radius":"100","Above Height":"48","Hit Animation":"-20, 0.1, 0.1, -2, -2","Flash Rate":"16","Flash Time":"40"}},
{"name":"SRD_TimedAttack_Results","status":true,"description":"Adds a customizable pop-up that can display the results of the Timed Attack.","parameters":{"Parent":"system","== Animation ==":"","Initial Height":"-40","Fall Speed":"0.5","Bounce Ratio":"-0.4","Duration":"90","== Text Settings ==":"","Font":"GameFont","Size":"28","Italicize":"false","Outline Size":"4","Outline Color":"#000000","== Defaults ==":"","Default Text":"Power: %1","Default Value":"Math.floor($gameTemp.tas_power * 100) + \"%\"","Default Color":"#FFFFFF","== Settings 1 ==":"","Settings 1 Condition":"$gameTemp.tas_power >= 1","Settings 1 Text":"Perfect!","Settings 1 Value":"","Settings 1 Color":"#66FF66","== Settings 2 ==":"","Settings 2 Condition":"$gameTemp.tas_power < 1 && $gameTemp.tas_power >= 0.7","Settings 2 Text":"Great!","Settings 2 Value":"","Settings 2 Color":"#B3FF66","== Settings 3 ==":"","Settings 3 Condition":"$gameTemp.tas_power < 0.7 && $gameTemp.tas_power >= 0.4","Settings 3 Text":"OK.","Settings 3 Value":"","Settings 3 Color":"#FFFF66","== Settings 4 ==":"","Settings 4 Condition":"$gameTemp.tas_power < 0.4 && $gameTemp.tas_power > 0","Settings 4 Text":"Bad...","Settings 4 Value":"","Settings 4 Color":"#FFB366","== Settings 5 ==":"","Settings 5 Condition":"$gameTemp.tas_power <= 0","Settings 5 Text":"Failure...","Settings 5 Value":"","Settings 5 Color":"#FF6666","== Settings 6 ==":"","Settings 6 Condition":"","Settings 6 Text":"","Settings 6 Value":"","Settings 6 Color":"#FFFFFF","== Settings 7 ==":"","Settings 7 Condition":"","Settings 7 Text":"","Settings 7 Value":"","Settings 7 Color":"#FFFFFF","== Settings 8 ==":"","Settings 8 Condition":"","Settings 8 Text":"","Settings 8 Value":"","Settings 8 Color":"#FFFFFF","== Settings 9 ==":"","Settings 9 Condition":"","Settings 9 Text":"","Settings 9 Value":"","Settings 9 Color":"#FFFFFF","== Settings 10 ==":"","Settings 10 Condition":"","Settings 10 Text":"","Settings 10 Value":"","Settings 10 Color":"#FFFFFF","== Settings 11 ==":"","Settings 11 Condition":"","Settings 11 Text":"","Settings 11 Value":"","Settings 11 Color":"#FFFFFF","== Settings 12 ==":"","Settings 12 Condition":"","Settings 12 Text":"","Settings 12 Value":"","Settings 12 Color":"#FFFFFF","== Settings 13 ==":"","Settings 13 Condition":"","Settings 13 Text":"","Settings 13 Value":"","Settings 13 Color":"#FFFFFF","== Settings 14 ==":"","Settings 14 Condition":"","Settings 14 Text":"","Settings 14 Value":"","Settings 14 Color":"#FFFFFF","== Settings 15 ==":"","Settings 15 Condition":"","Settings 15 Text":"","Settings 15 Value":"","Settings 15 Color":"#FFFFFF","== Settings 16 ==":"","Settings 16 Condition":"","Settings 16 Text":"","Settings 16 Value":"","Settings 16 Color":"#FFFFFF","== Settings 17 ==":"","Settings 17 Condition":"","Settings 17 Text":"","Settings 17 Value":"","Settings 17 Color":"#FFFFFF","== Settings 18 ==":"","Settings 18 Condition":"","Settings 18 Text":"","Settings 18 Value":"","Settings 18 Color":"#FFFFFF","== Settings 19 ==":"","Settings 19 Condition":"","Settings 19 Text":"","Settings 19 Value":"","Settings 19 Color":"#FFFFFF","== Settings 20 ==":"","Settings 20 Condition":"","Settings 20 Text":"","Settings 20 Value":"","Settings 20 Color":"#FFFFFF","== Settings 21 ==":"","Settings 21 Condition":"","Settings 21 Text":"","Settings 21 Value":"","Settings 21 Color":"#FFFFFF","== Settings 22 ==":"","Settings 22 Condition":"","Settings 22 Text":"","Settings 22 Value":"","Settings 22 Color":"#FFFFFF","== Settings 23 ==":"","Settings 23 Condition":"","Settings 23 Text":"","Settings 23 Value":"","Settings 23 Color":"#FFFFFF","== Settings 24 ==":"","Settings 24 Condition":"","Settings 24 Text":"","Settings 24 Value":"","Settings 24 Color":"#FFFFFF","== Settings 25 ==":"","Settings 25 Condition":"","Settings 25 Text":"","Settings 25 Value":"","Settings 25 Color":"#FFFFFF","== Settings 26 ==":"","Settings 26 Condition":"","Settings 26 Text":"","Settings 26 Value":"","Settings 26 Color":"#FFFFFF","== Settings 27 ==":"","Settings 27 Condition":"","Settings 27 Text":"","Settings 27 Value":"","Settings 27 Color":"#FFFFFF","== Settings 28 ==":"","Settings 28 Condition":"","Settings 28 Text":"","Settings 28 Value":"","Settings 28 Color":"#FFFFFF","== Settings 29 ==":"","Settings 29 Condition":"","Settings 29 Text":"","Settings 29 Value":"","Settings 29 Color":"#FFFFFF","== Settings 30 ==":"","Settings 30 Condition":"","Settings 30 Text":"","Settings 30 Value":"","Settings 30 Color":"#FFFFFF"}},
{"name":"SRD_TimedAttack_ActionSequences","status":true,"description":"Allows Timed Attacks to be called upon within Yanfly's Action Sequences.","parameters":{}},
{"name":"battleFaceLeft","status":true,"description":"","parameters":{}},
{"name":"PKD_VPlayer","status":true,"description":"v1.1 - Extended WEBM Video Player","parameters":{}},
{"name":"No Attack  Guard","status":true,"description":"This plugin gives you the option to remove the 'Attack' and/or the 'Guard' command from the Actor Command Window.","parameters":{"Disable Attack":"0","Disable Guard":"0","Disable Items":"0"}}
];

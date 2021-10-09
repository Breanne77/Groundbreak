var _leftSide_Sprite_Actor_createMainSprite = Sprite_Actor.prototype.createMainSprite;
Sprite_Actor.prototype.createMainSprite = function() {
    _leftSide_Sprite_Actor_createMainSprite.call(this);
    this.scale.x = -1;
};

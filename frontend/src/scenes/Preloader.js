export const preloadAssets = (scene) => {
    console.log("Loading assets...");
    
    scene.load.image('block', 'map/block.png');
    scene.load.image('bricks', 'map/bricks.png');
    scene.load.tilemapTiledJSON('map', 'map/initialMap.json');

    scene.load.spritesheet('walk_down', 'character/walkdown.png', { frameWidth: 40, frameHeight: 48 });
    scene.load.spritesheet('walk_up', 'character/walkup.png', { frameWidth: 40, frameHeight: 48 });
    scene.load.spritesheet('walk_left', 'character/walkleft.png', { frameWidth: 40, frameHeight: 48 });
    scene.load.spritesheet('walk_right', 'character/walkright.png', { frameWidth: 40, frameHeight: 48 });
}
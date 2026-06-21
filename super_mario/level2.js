// Konfigurasi WORLD 1-2
window.levelData = {
    title: "WORLD 1-2",
    nextLevel: null, // Tamat
    spawn: { x: 0, y: 5, z: 0 }, 
    objects: [
        { type: 'ground', x: 0, y: 0, z: 0, w: 10, d: 10 },
        
        // Lompatan pilar
        { type: 'ground', x: 0, y: 2, z: -10, w: 4, d: 4 },
        { type: 'ground', x: 0, y: 4, z: -20, w: 4, d: 4 },
        { type: 'ground', x: 0, y: 6, z: -30, w: 4, d: 4 },
        
        // Platform akhir yang panjang
        { type: 'ground', x: -10, y: 6, z: -30, w: 10, d: 10 },
        
        { type: 'cloud', x: 10, y: 10, z: -15 },
        { type: 'cloud', x: 15, y: 15, z: -25 },
        
        // Bintang Finish
        { type: 'finish', x: -10, y: 8, z: -30 }
    ]
};
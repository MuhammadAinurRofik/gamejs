window.levelData = {
    title: "WORLD 1-1",
    nextLevel: 2,
    spawn: { x: 0, y: 5, z: 5 },
    objects: [
        // Tanah awal
        { type: 'ground', x: 0, y: 0, z: 0, w: 15, d: 20 },
        
        { type: 'block', x: -2, y: 5, z: -5, isQuestion: false },
        { type: 'block', x: 0, y: 5, z: -5, isQuestion: true },
        { type: 'coin', x: 0, y: 7, z: -5 }, // Koin tersembunyi di atas blok
        { type: 'block', x: 2, y: 5, z: -5, isQuestion: false },
        
        // MUSUH 1: Menjaga area tanah pertama
        { type: 'enemy', x: 0, y: 2.5, z: -2, dist: 4, speed: 0.05 },

        { type: 'pipe', x: 0, y: 0, z: -12, h: 3 },
        
        // Tanah kedua
        { type: 'ground', x: 0, y: 0, z: -25, w: 15, d: 15 },
        
        // RINTANGAN: Sungai Lava (Harus dilompati)
        // { type: 'lava', x: 0, y: -0.5, z: -35.5, w: 15, d: 6 },
        { type: 'coin', x: 0, y: 3, z: -35.5 }, // Koin menantang di atas lava
        
        // Tanah Finish
        { type: 'ground', x: 0, y: 2, z: -46, w: 10, d: 10 }, 
        
        // MUSUH 2: Menjaga Bintang
        { type: 'enemy', x: 0, y: 4.5, z: -45, dist: 3, speed: 0.08 },

        { type: 'cloud', x: -15, y: 15, z: -10 },
        { type: 'cloud', x: 15, y: 20, z: -30 },
        
        // GARIS FINISH
        { type: 'finish', x: 0, y: 4, z: -48 }
    ]
};
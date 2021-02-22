const ruinedserpulo = extend(Planet, "ruinedserpulo", Planets.sun, 1, 0.5, {
    generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 2,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("#808080"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    localizedName: "Ruined Serpulo"
    
    const imp7800 = extend(SectorPreset, imp7800", ruinedserpulo, 78, {
    captureWave: 40,
    localizedName: "Impact 7800",
    difficulty: 3,
    alwaysUnlocked: true
});

    const scrap2= extend(SectorPreset, scrap2", ruinedserpulo, 271, {
    captureWave: 25,
    localizedName: "Scrap World",
    difficulty: 8,
});
    const study= extend(SectorPreset, study", ruinedserpulo, 93, {
    captureWave: 35,
    localizedName: "Studier Complex",
    difficulty: 8,
});
module.exports = {
    ruinedserpulo: ruinedserpulo,
    scrap2: Scrap World,
    imp7800: Impact7800,
    study: Studier Complex
}

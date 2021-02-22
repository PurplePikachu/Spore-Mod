const ruinedserpulo = extend(Planet, "ruinedserpulo", Planets.sun, 1, 0.5, {
    generator: new SerpuloPlanetGenerator(),
    meshLoader: () => new HexMesh(this, 6),
    bloom: true,
    radius: 2,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("#808080"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    localizedName: "Ruined Serpulo"
});
ruinedserpulo.meshLoader = () => extend(HexMesh, ruinedserpulo, 6, {});

    const ground1 = extend(SectorPreset, "ground1", ruinedserpulo, 15, {
    captureWave: 20,
    localizedName: "Ground One",
    difficulty: 1,
    description: "First zone, first RUINED zone.
    
    const imp7800 = extend(SectorPreset, "imp7800", ruinedserpulo, 78, {
    captureWave: 40,
    localizedName: "Impact 7800",
    difficulty: 3,
    description: "Impact 0078, partially conquered. You get the idea, Sufficient amount of resources, Criss-crossing walls making it difficult to fully expand base, Enemy has one spawn point with air attacks, yadda yadda yadda."
});

    const scrapworld= extend(SectorPreset, "scrapworld", ruinedserpulo, 271, {
    captureWave: 25,
    localizedName: "Scrap World",
    description: "Wait, that's not 271! That's completely different than before!"
    difficulty: 8,
});
    const study= extend(SectorPreset, "study", ruinedserpulo, 93, {
    captureWave: 35,
    localizedName: "Studier Complex",
    description: "Planetary Launch Terminal. Hope you are familiar with this!"
    difficulty: 10,
});
module.exports = {
    ruinedserpulo: Ruinedserpulo,
    scrapworld: Scrap World,
    imp7800: Impact7800,
    study: Studier Complex,
    ground1: GroundOne
}

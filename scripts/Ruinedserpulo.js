const ruinedserpulo = extend(Planet, "ruinedserpulo", Planets.sun, 3, 3, {
    generator: new SerpuloPlanetGenerator(),
    meshLoader: () => new HexMesh(this, 6),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("80ff00"),
    atmosphereRadIn: 0.06,
    atmosphereRadOut: 0.09,
    localizedName: "Ruined Serpulo"
});
templura.meshLoader = () => extend(HexMesh, templura, 6, {});

const ScrapWorld = extend(SectorPreset, "ScrapWorld", ruinedserpulo, 100, {
    captureWave: 14,
    description: "Collect some scrap, turn it to everything, leave.",
    localizedName: "Scrap World",
    difficulty: 10
});

const StudierComplex = extend(SectorPreset, "StudierComplex", ruinedserpulo, 130, {
    captureWave: 30,
    localizedName: "Studier Complex",
    difficulty: 7
});

const GroundOne = extend(SectorPreset, "GroundOne", ruinedserpulo, 15, {
    captureWave: 20,
    localizedName: "Ground One",
    difficulty: 3,
    alwaysUnlocked: true
});

const Impact8700 = extend(SectorPreset, "Impact8700", ruinedserpulo, 78, {
    captureWave: 40,
    localizedName: "00٢8 ɈɔɒqmI",
    difficulty: 5
})

module.exports = {
    ruinedserpulo: Ruinedserpulo,
    GroundOne: GroundOne,
    Impact8700: Impact8700,
    StudierComplex: Studier Complex
}

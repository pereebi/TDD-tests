import countries from "../index"

describe('Fetche countries using axios', () => {
    it('should fetch all countries', async() => {
        const result = await countries.getCountries();
        expect(result.length).toEqual(250);
    });

    it('should fetch countries by region', async() => {
        const result = await countries.getCountriesByRegion();
        expect(result).not.toBeUndefined();
    });

    it('should fetch countries by name', async () => {
        const result = await countries.getCountriesByName();
        expect(result).toBeDefined();
    });

    it('should fetch countries by continent', async () => {
        const result = await countries.getCountriesByContinent();
        expect(result).toBeFalsy();
    });
});


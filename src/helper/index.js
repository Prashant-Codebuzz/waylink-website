export const formatCountryName = (countryName) => {
    return countryName?.replace(/\s+/g, '-');
}


export const normalizeCountryName = (name) => {
    return name.replace(/-/g, ' ').trim();
};
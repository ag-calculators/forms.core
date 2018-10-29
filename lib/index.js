export function readProp(target, property, d) {
    try {
        return property.split('.').reduce((a, b) => {
            return a[b];
        }, target);
    }
    catch (e) {
        return d;
    }
}

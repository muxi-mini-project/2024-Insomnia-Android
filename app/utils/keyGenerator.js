function *keyGenerator() {
    let counter = 0;
    while (1) {
        yield counter++;
    }
}
export const key = keyGenerator()
const michaelTokenizer = (input: string) => {
    type PredicateOrToken = "predicate" | "token";
    const tokens: Array<string> = [""];
    let prev: PredicateOrToken = "token";
    let current: PredicateOrToken = "token";
    for (const c of input.trim()) {
        current = c === " " ? "predicate" : "token";
        if (prev != current) {
            tokens.push("");
        }
        if (current === "predicate") {
            tokens[tokens.length - 1] += c;
        } else {
            tokens[tokens.length - 1] += c;
        }
        prev = current;
    }
    return tokens;
};

export default michaelTokenizer;

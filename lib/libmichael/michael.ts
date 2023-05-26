/*
    IA:
    Michael is a natural language parser library
    that parses a given string and extracts task or calendar
    properties from it.

    For example:
    - "Buy some milk tomorrow morning" -> {
        text: "Buy some milk",
        date: dayjs().add(1, "day").endOf("day"),
        time: dayjs("9:00")
    }
*/

import keywordMatcher from "./src/keywordMatcher";

const michael = (input: string) => {
    let paddedInput = ` ${input} `;
    for (let keyword of Object.keys(keywordMatcher)) {
        let x = paddedInput.includes(keyword);
        console.log(x ? keyword : "");
    }
    return {};
};

export default michael;

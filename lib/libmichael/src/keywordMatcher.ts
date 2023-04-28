import dayjs from "dayjs";
import deepmerge from "../../utils/deepmerge";
import nextInstanceOfDay from "../../utils/nextInstanceOfDay";

const keywordMatcherBasic = {
    " today ": () => dayjs().endOf("day"),
    " tomorrow ": () => dayjs().add(1, "day").endOf("day"),
    " next week ": () => dayjs().add(1, "week").endOf("day"),
    " next month ": () => dayjs().add(1, "month").endOf("day"),
    " next year ": () => dayjs().add(1, "year").endOf("day"),
    " next monday ": () => nextInstanceOfDay(0).endOf("day"),
    " next tuesday ": () => nextInstanceOfDay(1).endOf("day"),
    " next wednesday ": () => nextInstanceOfDay(2).endOf("day"),
    " next thursday ": () => nextInstanceOfDay(3).endOf("day"),
    " next friday ": () => nextInstanceOfDay(4).endOf("day"),
    " next saturday ": () => nextInstanceOfDay(5).endOf("day"),
    " next sunday ": () => nextInstanceOfDay(6).endOf("day"),
};
const keywordMatcherAliases = {
    " tod ": keywordMatcherBasic[" today "],
    " tdy ": keywordMatcherBasic[" today "],
    " tmrw ": keywordMatcherBasic[" tomorrow "],
    " tom ": keywordMatcherBasic[" tomorrow "],
    " next mon ": keywordMatcherBasic[" next monday "],
    " next tue ": keywordMatcherBasic[" next tuesday "],
    " next wed ": keywordMatcherBasic[" next wednesday "],
    " next thu ": keywordMatcherBasic[" next thursday "],
    " next fri ": keywordMatcherBasic[" next friday "],
    " next sat ": keywordMatcherBasic[" next saturday "],
    " next sun ": keywordMatcherBasic[" next sunday "],
    " next weekend ": keywordMatcherBasic[" next saturday "],
    " next wknd ": keywordMatcherBasic[" next saturday "],
    "weekend": keywordMatcherBasic[" next sunday "],
};

const keywordMatcher = deepmerge(
    keywordMatcherBasic,
    keywordMatcherAliases,
);
export default keywordMatcher;


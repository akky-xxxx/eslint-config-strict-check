const { Off } = require("../../const")
const { getRules } = require("../../utils/getRules")
const { prevent_abbreviations } = require("./preventAbbreviations")

const prefix = "unicorn/"

const rulesBase = {}

exports.rules = getRules(rulesBase, prefix)

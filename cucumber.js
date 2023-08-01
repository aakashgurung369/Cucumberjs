module.exports = {
    default: {
        //path to features files
        paths: ["e2e/**/*.features"],
        //path to setup and step definations
        require: ["tests/e2e/stepDefinitions/todoContext.js", "tests/cucumber.hooks.js"],
        format:[
            "@cucumber/pretty-formatter",
        ],
    },
};
const STATES = {
    SUCCESS: 'success',
    PROCESSING: 'processing',
    ERROR: 'error',
}

const ERRORS = {
    NO_STOCK: 'NO_STOCK',
    INCORRECT_DETAILS: 'INCORRECT_DETAILS',
}

const TITLES = {
    SUCCESS: 'Order complete',
    ERROR: 'Error page',
}

const ERROR_MESSAGES = {
    [ERRORS.NO_STOCK]: 'No stock has been found',
    [ERRORS.INCORRECT_DETAILS]: 'Incorrect details have been entered',
}


function getProcessingPage(data) {

    return new Promise((resolve, reject) => {

        try {

            let handleNextItem;

            const succeed = () => resolve({
                title: TITLES.SUCCESS,
                message: null,
            });

            const process = (delay = 2000) => setTimeout(handleNextItem, delay);

            const errorOut = message => resolve({
                title: TITLES.ERROR,
                message,
            });

            const error = (errorCode) => {
                const errorStrategy = {
                    [ERRORS.NO_STOCK]: () => errorOut(ERROR_MESSAGES[errorCode]),
                    [ERRORS.INCORRECT_DETAILS]: () => errorOut(ERROR_MESSAGES[errorCode]),
                    default: () => {
                        if ([null, undefined].includes(errorCode)) return errorOut(null)
                        return reject(new Error(`unexpected errorCode: '${errorCode}'`));
                    }
                }
                return errorStrategy[errorCode] ? errorStrategy[errorCode]() : errorStrategy.default;
            };

            handleNextItem = () => {
                const item = data.shift();
                if (!item) reject(new Error(`received malformed item: ${item}`));
                const stateStrategy = {
                    [STATES.SUCCESS]: () => succeed(),
                    [STATES.PROCESS]: () => process(),
                    [STATES.ERROR]: () => error(item.errorCode),
                    default: () => reject(new Error(`unexpected state: '${item.state}'`))
                }
                return stateStrategy[item.state] ? stateStrategy[item.state]() : stateStrategy.default;
            };

            handleNextItem();

        } catch (err) {
            reject(err);
        }
    });

}

module.exports = {
    getProcessingPage,
    STATES,
    ERRORS,
    TITLES,
    ERROR_MESSAGES,
};

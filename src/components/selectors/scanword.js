const isNotOpened = openedIds => scanword =>
    openedIds.indexOf(scanword.objectID) === -1;

const getNotOpenedScanwords = ({scanwordState, openState}) =>
    scanwordState.filter(isNotOpened(openState));

export {
    getNotOpenedScanwords,
};

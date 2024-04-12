import jss from 'jss';
export function createInsertionPoint(userInsertionPoint) {
    if (userInsertionPoint === void 0) { userInsertionPoint = 'JSS insertion point'; }
    var options = {
        insertionPoint: document.getElementById(userInsertionPoint) || userInsertionPoint
    };
    jss.setup(options);
}

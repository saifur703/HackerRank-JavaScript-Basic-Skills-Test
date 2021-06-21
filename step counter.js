'use strict';

const getCounter = (
    function counter() {
        let value = 0;
        return {
            getValue: function() {
                return value;
            },
            changeBy: function (k) {
                value += k;
            }
        }
    }
)();

function getFixedCounter(k) {
    let myCounter = getCounter;
    return {
        increment: () => {
            myCounter.changeBy(k);
        },
        decrement: () => {
            myCounter.changeBy(-k);
        },
        getValue: () => {
            return myCounter.getValue();
        }
    }
}

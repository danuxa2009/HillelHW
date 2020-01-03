function createfunction() {
    return function() {
        console.log('called');
    };
}

const fn = createfunction();

fn();
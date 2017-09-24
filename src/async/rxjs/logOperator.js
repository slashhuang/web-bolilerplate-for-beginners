import Subscriber  from 'rxjs/Subscriber';
export function log(project, thisArg) {
    return source => {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new LogOperator(project, thisArg));
    }
}
export class LogOperator {
    constructor(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    call (subscriber, source) {
        return source.subscribe(new LogSubscriber(subscriber, this.project, this.thisArg));
    };
}
export class LogSubscriber extends Subscriber {
    constructor(project, thisArg) {
        super();
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    _next (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
}

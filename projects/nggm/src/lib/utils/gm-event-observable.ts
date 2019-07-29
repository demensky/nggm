import {Observable, Subscriber, Unsubscribable} from 'rxjs';
import {GmEventTarget} from '../interfaces/gm-event-accessor';

class GmTargetSubscription<N extends string, V> implements Unsubscribable {
    private readonly _listener: google.maps.MapsEventListener;

    public constructor(
        observable: GmEventObservable<N, V>,
        subscriber: Subscriber<V>,
    ) {
        this._listener = observable.eventTarget.addListener(
            observable.eventName,
            event => {
                subscriber.next(event);
            },
        );
    }

    public unsubscribe(): void {
        this._listener.remove();
    }
}

export class GmEventObservable<N extends string, V> extends Observable<V> {
    public constructor(
        public readonly eventTarget: GmEventTarget<N, V>,
        public readonly eventName: N,
    ) {
        super(subscriber => new GmTargetSubscription<N, V>(this, subscriber));
    }
}

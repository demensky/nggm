import {NextObserver, Observable} from 'rxjs';
import {isNil} from './is-nil';

export class MvcValueObservable<V> extends Observable<V>
    implements NextObserver<V> {
    private _currentValue: V;

    public constructor(
        protected readonly _target: google.maps.MVCObject,
        private readonly _valueName: string,
    ) {
        super(subscriber => {
            const listener: google.maps.MapsEventListener = _target.addListener(
                `${this._valueName}_changed`,
                (() => {
                    const value = this._target.get(_valueName);

                    if (
                        !isNil(this._currentValue) &&
                        this._isEquals(this._currentValue, value)
                    ) {
                        return;
                    }

                    this._currentValue = value;
                    subscriber.next(value);
                }) as any,
            );

            return () => {
                listener.remove();
            };
        });

        this._currentValue = _target.get(_valueName);
    }

    protected _isEquals(oldValue: V, newValue: V): boolean {
        return oldValue === newValue;
    }

    public next(value: V): void {
        if (
            !isNil(this._currentValue) &&
            this._isEquals(this._currentValue, value)
        ) {
            return;
        }

        this._currentValue = value;
        this._target.set(this._valueName, value);
    }
}

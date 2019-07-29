import {MvcValueObservable} from './mvc-value-observable';

export class LatLngValueObservable extends MvcValueObservable<
    google.maps.LatLng
> {
    protected _isEquals(
        oldValue: google.maps.LatLng,
        newValue: google.maps.LatLng,
    ): boolean {
        return super._isEquals(oldValue, newValue) || oldValue.equals(newValue);
    }
}

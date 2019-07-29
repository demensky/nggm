export interface GmEventTarget<N extends string, V> {
    addListener(
        eventName: N,
        handler: (this: this, event: V) => void,
    ): google.maps.MapsEventListener;
}

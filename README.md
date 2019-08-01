# `nggm` (under construction)

Just [Maps JavaScript API][maps-js-api] wrapper for use with Angular.

[maps-js-api]:
    https://developers.google.com/maps/documentation/javascript/reference/

## Setup

1.  Install

    ```sh
    npm install nggm
    ```

2.  Add `<script>` width [API key][api-key].

    ```html
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    ```

    It should be located above the place of loading the main scripts.

3.  Import required module:

    -   `GmCommonModule`
    -   `GmControlModule`
    -   `GmInfoWindowModule`
    -   `GmMapModule`
    -   `GmMarkerModule`

[api-key]:
    https://developers.google.com/maps/documentation/javascript/get-api-key

## `<gm-map>`

### Import

```ts
import {GmCommonModule, GmMapModule} from 'nggm';
```

### API

You can use **any** [`google.maps.Map`][map] methods with [template reference
variables].

[template reference variables]:
    https://angular.io/guide/template-syntax#template-reference-variables-var

```html
<gm-map #map></gm-map>
<button (click)="map.panBy(10, 20)">pan</button>
```

#### Tokens

-   `GM_MAP_OPTIONS` - provide default [`MapOptions`][map-options] in
    [`Map`][map] constructor.

#### Directives

~~Strikethrough~~ directives have not yet been implemented.

<!-- TODO: all options -->

| Directive                  | [`MapOptions`][map-options]                     | [`Map`][map]                                                                                                                     |
| :------------------------- | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `[(gmCenter)]`             | [`center`][map-options.center]                  | ~~[`getCenter`][map.get-center]~~, ~~[`setCenter`][map.set-center]~~, [`center_changed`][map.center_changed]                     |
| ~~`[(gmClickableIcons)]`~~ | [`clickableIcons`][map-options.clickable-icons] | ~~[`getClickableIcons`][map.get-clickable-icons]~~, ~~[`setClickableIcons`][map.set-clickable-icons]~~, `clickableicons_changed` |
| `[(gmDraggable)]`          | [`draggable`][map-options.draggable]            | `draggable_change`                                                                                                               |
| ~~`[(gmHeading)]`~~        | [`heading`][map-options.heading]                | ~~[`getHeading`][map.get-heading]~~, ~~[`setHeading`][map.set-heading]~~, [`heading_changed`][map.heading_changed]               |
| ~~`[(gmMapTypeId)]`~~      | [`mapTypeId`][map-options.map-type-id]          | ~~[`getMapTypeId`][map.get-map-type-id]~~, ~~[`setMapTypeId`][map.set-map-type-id]~~, `maptypeid_changed`                        |
| ~~`[(gmStreetView)]`~~     | [`streetView`][map-options.street-view]         | ~~[`getStreetView`][map.get-street-view]~~, ~~[`setStreetView`][map.set-street-view]~~, `streetview_changed`                     |
| ~~`[(gmTilt)]`~~           | [`tilt`][map-options.tilt]                      | ~~[`getTilt`][map.get-tilt]~~, ~~[`setTilt`][map.set-tilt]~~, [`tilt_changed`][map.tilt_changed]                                 |
| `[(gmZoom)]`               | [`zoom`][map-options.zoom]                      | ~~[`getZoom`][map.get-zoom]~~, ~~[`setZoom`][map.set-zoom]~~, [`zoom_changed`][map.zoom_changed]                                 |
| not needed                 |                                                 | [`fitBounds`][map.fit-bounds]                                                                                                    |
| ~~`(gmBoundsChange)`~~     |                                                 | [`getBounds`][map.fit-bounds], [`bounds_changed`][map.bounds_changed]                                                            |
| not needed                 |                                                 | [`getDiv`][map.get-div]                                                                                                          |
| ~~`(gmProjectionChange)`~~ |                                                 | [`getProjection`][map.get-projection], [`projection_changed`][map.projection_changed]                                            |
| not needed                 |                                                 | [`panBy`][map.pan-by]                                                                                                            |
| not needed                 |                                                 | [`panTo`][map.pan-to]                                                                                                            |
| not needed                 |                                                 | [`panToBounds`][map.pan-to-bounds]                                                                                               |
| `(gmClick)`                |                                                 | [`click`][map.click]                                                                                                             |
| `(gmDblclick)`             |                                                 | [`dblclick`][map.dblclick]                                                                                                       |


## `gmControl=""`

TODO doc

## `<gm-marker>`

TODO doc

## `<gm-info-window>`

TODO doc

## `<gm-polyline>`

Not implemented

## `<gm-polygon>`

Not implemented

## `<gm-circle>`

Not implemented

[map]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map
[map.fit-bounds]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
[map.get-bounds]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
[map.get-center]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
[map.get-clickable-icons]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
[map.get-div]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getDiv
[map.get-heading]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
[map.get-map-type-id]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
[map.get-projection]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
[map.get-street-view]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
[map.get-tilt]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
[map.get-zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
[map.pan-by]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
[map.pan-to]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
[map.pan-to-bounds]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
[map.set-center]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setCenter
[map.set-clickable-icons]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setClickableIcons
[map.set-heading]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setHeading
[map.set-map-type-id]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setMapTypeId
[map.set-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setOptions
[map.set-street-view]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setStreetView
[map.set-tilt]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setTilt
[map.set-zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setZoom
[map.controls]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
[map.data]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
[map.map-types]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
[map.overlay-map-types]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
[map.bounds_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
[map.center_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
[map.click]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
[map.dblclick]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
[map.drag]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
[map.dragend]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
[map.dragstart]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
[map.heading_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
[map.idle]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
[map.maptypeid_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
[map.mousemove]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
[map.mouseout]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
[map.mouseover]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
[map.projection_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
[map.rightclick]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
[map.tilesloaded]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
[map.tilt_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
[map.zoom_changed]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
[map-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
[map-options.background-color]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.backgroundColor
[map-options.center]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.center
[map-options.clickable-icons]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.clickableIcons
[map-options.control-size]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.controlSize
[map-options.disable-default-u-i]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.disableDefaultUI
[map-options.disable-double-click-zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.disableDoubleClickZoom
[map-options.draggable]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggable
[map-options.draggable-cursor]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggableCursor
[map-options.dragging-cursor]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggingCursor
[map-options.fullscreen-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.fullscreenControl
[map-options.fullscreen-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.fullscreenControlOptions
[map-options.gesture-handling]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.gestureHandling
[map-options.heading]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.heading
[map-options.keyboard-shortcuts]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.keyboardShortcuts
[map-options.map-type-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapTypeControl
[map-options.map-type-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapTypeControlOptions
[map-options.map-type-id]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapTypeId
[map-options.max-zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.maxZoom
[map-options.min-zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.minZoom
[map-options.no-clear]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.noClear
[map-options.pan-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.panControl
[map-options.pan-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.panControlOptions
[map-options.restriction]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.restriction
[map-options.rotate-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.rotateControl
[map-options.rotate-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.rotateControlOptions
[map-options.scale-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.scaleControl
[map-options.scale-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.scaleControlOptions
[map-options.scrollwheel]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.scrollwheel
[map-options.street-view]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.streetView
[map-options.street-view-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.streetViewControl
[map-options.street-view-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.streetViewControlOptions
[map-options.styles]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.styles
[map-options.tilt]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.tilt
[map-options.zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoom
[map-options.zoom-control]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoomControl
[map-options.zoom-control-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoomControlOptions

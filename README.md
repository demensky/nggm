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

You can use **any** [`Map`] methods with [template reference variables].

[template reference variables]:
    https://angular.io/guide/template-syntax#template-reference-variables-var

```html
<gm-map #map></gm-map>
<button (click)="map.panBy(10, 20)">pan</button>
```

#### Tokens

-   `GM_MAP_OPTIONS` - provide default [`MapOptions`] in [`Map`] constructor.

#### Directives

~~Strikethrough~~ directives have not yet been implemented.

<!-- TODO: all options -->

| Directive                  | [`MapOptions`]                | [`Map`]                                                                                          |
| :------------------------- | :---------------------------- | :----------------------------------------------------------------------------------------------- |
| `[(gmCenter)]`             | [`MapOptions.center`]         | ~~[`Map.getCenter`]~~<br /> ~~[`Map.setCenter`]~~<br /> [`Map.center_changed`]                   |
| ~~`[(gmClickableIcons)]`~~ | [`MapOptions.clickableIcons`] | ~~[`Map.getClickableIcons`]~~<br /> ~~[`Map.setClickableIcons`]~~<br /> `clickableicons_changed` |
| `[(gmDraggable)]`          | [`MapOptions.draggable`]      | `draggable_change`                                                                               |
| ~~`[(gmHeading)]`~~        | [`MapOptions.heading`]        | ~~[`Map.getHeading`]~~<br /> ~~[`Map.setHeading`]~~<br /> [`Map.heading_changed`]                |
| ~~`[(gmMapTypeId)]`~~      | [`MapOptions.mapTypeId`]      | ~~[`Map.getMapTypeId`]~~<br /> ~~[`Map.setMapTypeId`]~~<br /> `maptypeid_changed`                |
| ~~`[(gmStreetView)]`~~     | [`MapOptions.streetView`]     | ~~[`Map.getStreetView`]~~<br /> ~~[`Map.setStreetView`]~~<br /> `streetview_changed`             |
| ~~`[(gmTilt)]`~~           | [`MapOptions.tilt`]           | ~~[`Map.getTilt`]~~<br /> ~~[`Map.setTilt`]~~<br /> [`Map.tilt_changed`]                         |
| `[(gmZoom)]`               | [`MapOptions.zoom`]           | ~~[`Map.getZoom`]~~<br /> ~~[`Map.setZoom`]~~<br /> [`Map.zoom_changed`]                         |
| not needed                 |                               | [`Map.fitBounds`]                                                                                |
| ~~`(gmBoundsChange)`~~     |                               | [`Map.getBounds`]<br /> [`Map.bounds_changed`]                                                   |
| not needed                 |                               | [`Map.getDiv`]                                                                                   |
| ~~`(gmProjectionChange)`~~ |                               | [`Map.getProjection`]<br /> [`Map.projection_changed`]                                           |
| not needed                 |                               | [`Map.panBy`]                                                                                    |
| not needed                 |                               | [`Map.panTo`]                                                                                    |
| not needed                 |                               | [`Map.panToBounds`]                                                                              |
| `(gmClick)`                |                               | [`Map.click`]                                                                                    |
| `(gmDblclick)`             |                               | [`Map.dblclick`]                                                                                 |

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

[`map`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map
[`map.fitbounds`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
[`map.getbounds`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
[`map.getcenter`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
[`map.getclickableicons`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
[`map.getdiv`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getDiv
[`map.getheading`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
[`map.getmaptypeid`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
[`map.getprojection`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
[`map.getstreetview`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
[`map.gettilt`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
[`map.getzoom`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
[`map.panby`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
[`map.panto`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
[`map.pantobounds`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
[`map.setcenter`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setCenter
[`map.setclickableicons`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setClickableIcons
[`map.setheading`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setHeading
[`map.setmaptypeid`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setMapTypeId
[`map.setoptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setOptions
[`map.setstreetview`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setStreetView
[`map.settilt`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setTilt
[`map.setzoom`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.setZoom
[`map.controls`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
[`map.data`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
[`map.maptypes`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
[`map.overlaymaptypes`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
[`map.bounds_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
[`map.center_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
[`map.click`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
[`map.dblclick`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
[`map.drag`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
[`map.dragend`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
[`map.dragstart`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
[`map.heading_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
[`map.idle`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
[`map.maptypeid_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
[`map.mousemove`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
[`map.mouseout`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
[`map.mouseover`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
[`map.projection_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
[`map.rightclick`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
[`map.tilesloaded`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
[`map.tilt_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
[`map.zoom_changed`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
[`mapoptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
[`mapoptions.backgroundcolor`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.backgroundColor
[`mapoptions.center`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.center
[`mapoptions.clickableicons`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.clickableIcons
[`mapoptions.controlsize`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.controlSize
[`mapoptions.disabledefaultui`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.disableDefaultUI
[`mapoptions.disabledoubleclickzoom`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.disableDoubleClickZoom
[`mapoptions.draggable`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggable
[`mapoptions.draggablecursor`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggableCursor
[`mapoptions.draggingcursor`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggingCursor
[`mapoptions.fullscreencontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.fullscreenControl
[`mapoptions.fullscreencontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.fullscreenControlOptions
[`mapoptions.gesturehandling`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.gestureHandling
[`mapoptions.heading`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.heading
[`mapoptions.keyboardshortcuts`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.keyboardShortcuts
[`mapoptions.maptypecontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapTypeControl
[`mapoptions.maptypecontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapTypeControlOptions
[`mapoptions.maptypeid`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapTypeId
[`mapoptions.maxzoom`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.maxZoom
[`mapoptions.minzoom`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.minZoom
[`mapoptions.noclear`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.noClear
[`mapoptions.pancontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.panControl
[`mapoptions.pancontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.panControlOptions
[`mapoptions.restriction`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.restriction
[`mapoptions.rotatecontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.rotateControl
[`mapoptions.rotatecontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.rotateControlOptions
[`mapoptions.scalecontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.scaleControl
[`mapoptions.scalecontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.scaleControlOptions
[`mapoptions.scrollwheel`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.scrollwheel
[`mapoptions.streetview`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.streetView
[`mapoptions.streetviewcontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.streetViewControl
[`mapoptions.streetviewcontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.streetViewControlOptions
[`mapoptions.styles`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.styles
[`mapoptions.tilt`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.tilt
[`mapoptions.zoom`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoom
[`mapoptions.zoomcontrol`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoomControl
[`mapoptions.zoomcontroloptions`]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoomControlOptions

# `nggm`

Just [Maps JavaScript API][maps-js-api] wrapper.

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

## Common API

### Events

|                  | `<gm-map>`                 | `<gm-marker>`                 | `<gm-info-window>`                     |
| ---------------- | -------------------------- | ----------------------------- | -------------------------------------- |
|                  | [`Map`][map]               | [`Marker`][marker]            | [`InfoWindow`][info-window]            |
| `(gmClick)`      | [`click`][map.click]       | [`click`][marker.click]       | ~~Incompatible~~                       |
| `(gmCloseclick)` | ~~Incompatible~~           | ~~Incompatible~~              | [`closeclick`][info-window.closeclick] |
| `(gmDblclick)`   | [`dblclick`][map.dblclick] | [`dblclick`][marker.dblclick] | ~~Incompatible~~                       |

[map]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map
[map.click]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
[map.dblclick]:
    https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
[marker]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#Marker
[marker.click]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
[marker.dblclick]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
[marker-options]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
[info-window.closeclick]:
    https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
[info-window]:
    https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow

### Options

|                   | `<gm-map>`                           | `<gm-marker>`                           | `<gm-info-window>`                         |
| ----------------- | ------------------------------------ | --------------------------------------- | ------------------------------------------ |
|                   | [`MapOptions`][map-options]          | [`MarkerOptions`][marker-options]       | [`InfoWindowOptions`][info-window-options] |
| `[(gmCenter)]`    | [`center`][map-options.center]       | ~~Incompatible~~                        | ~~Incompatible~~                           |
| `[(gmDraggable)]` | [`draggable`][map-options.draggable] | [`draggable`][marker-options.draggable] | ~~Incompatible~~                           |
| `[(gmOpacity)]`   | ~~Incompatible~~                     | [`opacity`][marker-options.opacity]     | ~~Incompatible~~                           |
| `[(gmPosition)]`  | ~~Incompatible~~                     | [`position`][marker-options.position]   | [`position`][info-window-options.position] |
| `[(gmZoom)]`      | [`zoom`][map-options.zoom]           | ~~Incompatible~~                        | ~~Incompatible~~                           |

[map-options]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
[map-options.center]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.center
[map-options.draggable]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.draggable
[map-options.zoom]:
    https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.zoom
[marker-options.draggable]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.draggable
[marker-options.opacity]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.opacity
[marker-options.position]:
    https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
[info-window-options]:
    https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions
[info-window-options.position]:
    https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.position

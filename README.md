# react-elemental-docs

This project is the documentation site for the [`react-elemental`](https://github.com/LINKIWI/react-elemental) UI library. Documentation source files are located in `src/docs`.

Please note that the README documentation that follows is largely intended to be internal, and is relevant only to the development of the `react-elemental-docs` site itself.

## Adding docs for a new component

1. Make sure that the declared version of `react-elemental` is pinned and bumped appropriately in `dependencies` of `package.json`. CI will version the documentation based on the semver string expressed there.
2. Create a new documentation directory for the component in `src/docs/components/<new component name>`.
3. In this directory, you need to create a metadata file `meta.js`, free-form notes file `content.md`, example usage component `example.js`, and an importable `index.js` that exports all of these items.
4. Update `resources/data/sidebar.js` to reflect the value, label, and URL for the new component.
5. Update `resources/data/components.js` to include the new component documentation's `index.js` file.

#### Metadata

The `meta.js` file should default-export an object describing metadata about the documented component with the following properties:

|Key|Value|
|-|-|
|`name`|Name of the component.|
|`description`|One-line description of the component.|
|`source`|URL to the component's source code.|
|`experimental`|*(Optional)* Any truthy value to indicate that the component API is experimental or unstable.|
|`props[].key`|Name of a prop accepted by the component.|
|`props[].description`|Description of that prop.|
|`props[].defaultValue`|Default value of that prop, as it appears in `defaultProps`. Omit if the prop is required.|

#### Notes

The `content.md` file can contain arbitrary free-form Markdown which will be directly rendered into the component documentation page. It is useful for providing additional context on how the component works internally, how props should be used, etc. This section will not be rendered if `content.md` is empty.

#### Example component

The `example.js` file should default-export a standard React component that serves as an example usage of the documented component. Note that the documentation page will show this file's literal source code alongside the rendered component that the file describes.

#### Index file

The `index.js` file should take the following form:

```javascript
import meta from 'docs/components/<component name>/meta';
import Example from 'docs/components/<component name>/example';
import content from 'docs/components/<component name>/content.md';
import source from '!raw-loader!./example';

export default {
  meta,
  source,
  content,
  example: Example,
};
```

## Development

```bash
$ npm install
$ npm run start  # Starts a live-reload development server at port 8080
```

## Building

The build process injects a few environment variables from the shell:

|Environment variable|Description|
|-|-|
|`NODE_ENV`|Node environment; `production` on CI.|
|`GIT_SHA`|Current Git SHA of this repository for which the docs are generated. Assigned as build SHA in CI.|
|`REACT_ELEMENTAL_VERSION`|Version of the `react-elemental` library for which the documentation is valid. This is read automatically from the declared version in `package.json` on CI.|
|`CLIENT_SENTRY_DSN`|Client-side Sentry DSN. Stored as a secret in CI and automatically injected.|
|`PIWIK_URL`|Analytics hostname.|
|`PIWIK_SITE_ID`|Analytics site ID.|
|`PIWIK_CLIENT_TRACKER_NAME`|Name of the client tracker resource.|
|`PIWIK_SERVER_TRACKER_NAME`|Name of the server tracker resource.|

After the above are defined:

```bash
$ npm run build
```

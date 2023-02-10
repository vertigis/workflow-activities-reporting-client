[![CI/CD](https://github.com/vertigis/workflow-activities-reporting-client/workflows/CI/CD/badge.svg)](https://github.com/vertigis/workflow-activities-reporting-client/actions)
[![npm](https://img.shields.io/npm/v/@vertigis/workflow-activities-reporting-client)](https://www.npmjs.com/package/@vertigis/workflow-activities-reporting-client)

This project contains activities for interacting with [VertiGIS Studio Reporting](https://vertigisstudio.com/products/vertigis-studio-reporting/) in a [VertiGIS Studio Workflow](https://vertigisstudio.com/products/vertigis-studio-workflow/). It uses the [@vertigis/reporting-client](https://github.com/vertigis/vertigis-reporting-client-js) library.

Note: this activity pack is intended for workflow authors that require lower level APIs for working with reports. In most scenarios the out-of-the-box `Run Report` activity should be preferred.

## Requirements

### VertiGIS Studio Workflow Versions

These activities are designed to work with VertiGIS Studio Workflow versions `5.30.1` and above.

## Usage
To use these activities in [VertiGIS Studio Workflow Designer](https://apps.vertigisstudio.com/workflow/designer/) you need to register an activity pack and then add the activities to a workflow.

### Register the activity pack

1. Sign in to ArcGIS Online or Portal for ArcGIS
1. Go to **My Content**
1. Select **Add Item > An application**
    - Type: `Web Mapping`
    - Purpose: `Ready To Use`
    - API: `JavaScript`
    - URL: The URL to this activity pack manifest
        - Use https://unpkg.com/@vertigis/workflow-activities-reporting-client/activitypack.json for the latest version
        - Use https://unpkg.com/@vertigis/workflow-activities-reporting-client@1.0.1/activitypack.json for a specific version
        - Use https://localhost:5000/activitypack.json for a local development version
    - Title: Your desired title
    - Tags: Must include `geocortex-workflow-activity-pack`
1. Reload [VertiGIS Studio Workflow Designer](https://apps.vertigisstudio.com/workflow/designer/)
1. These activities will now appear in the activity toolbox in an `Reporting Client` category

## Development

This project was bootstrapped with the [VertiGIS Studio Workflow SDK](https://github.com/vertigis/vertigis-workflow-sdk). Before you can use your activity pack in the [VertiGIS Studio Workflow Designer](https://apps.vertigisstudio.com/workflow/designer/), you will need to [register the activity pack](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview#register-the-activity-pack).

## Available Scripts

Inside the newly created project, you can run some built-in commands:

### `npm run generate`

Interactively generate a new activity or form element.

### `npm start`

Runs the project in development mode. Your activity pack will be available at [http://localhost:5000/main.js](http://localhost:5000/main.js). The HTTPS certificate of the development server is a self-signed certificate that web browsers will warn about. To work around this open [`https://localhost:5000/main.js`](https://localhost:5000/main.js) in a web browser and allow the invalid certificate as an exception. For creating a locally-trusted HTTPS certificate see the [Configuring a HTTPS Certificate](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview/#configuring-a-https-certificate) section on the [VertiGIS Studio Developer Center](https://developers.vertigisstudio.com/docs/workflow/overview/).

### `npm run build`

Builds the activity pack for production to the `build` folder. It optimizes the build for the best performance.

Your custom activity pack is now ready to be deployed!

See the [section about deployment](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview/#deployment) in the [VertiGIS Studio Developer Center](https://developers.vertigisstudio.com/docs/workflow/overview/) for more information.

## Documentation

Find [further documentation on the SDK](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview/) on the [VertiGIS Studio Developer Center](https://developers.vertigisstudio.com/docs/workflow/overview/)

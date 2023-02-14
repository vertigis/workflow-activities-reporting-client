import type { IActivityHandler } from "@geocortex/workflow/runtime";
import { getRunToken } from "@vertigis/reporting-client";
import { DefaultPortalUrl, DefaultServiceUrl } from "./constants";

interface GetReportRunTokenInputs {
    /**
     * @displayName Portal URL
     * @description The URL of the ArcGIS Portal instance to use. Defaults to ArcGIS Online: "https://www.arcgis.com".
     */
    portalUrl?: string;

    /**
     * @displayName Service URL
     * @description The URL of the VertiGIS Studio Reporting service. Defaults to: "https://apps.vertigisstudio.com/reporting".
     */
    serviceUrl?: string;

    /**
     * @description An optional ArcGIS token for accessing a secured report or a report that accesses secured ArcGIS content.
     * @required
     */
    token?: string;
}

interface GetReportRunTokenOutputs {
    /**
     * @description The token.
     */
    result: string;
}

/**
 * @clientOnly
 * @category Reporting Client
 * @defaultName runToken
 * @description Authenticates with a VertiGIS Studio Printing/Reporting service and returns a token that can be used with other Reporting Client activities.
 * @helpUrl https://developers.vertigisstudio.com/docs/reporting/sdk-js-overview
 * @supportedApps EXB, GWV, GVH, WAB
 */
export default class GetReportRunToken implements IActivityHandler {
    async execute(inputs: GetReportRunTokenInputs): Promise<GetReportRunTokenOutputs> {
        const { portalUrl = DefaultPortalUrl, serviceUrl = DefaultServiceUrl, token } = inputs;

        const result = await getRunToken(serviceUrl, portalUrl, token);
        return {
            result,
        };
    }
}

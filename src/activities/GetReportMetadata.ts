import type { IActivityHandler } from "@vertigis/workflow";
import { getMetadata } from "@vertigis/reporting-client";
import { DefaultPortalUrl, DefaultServiceUrl } from "./constants";

interface GetReportMetadataInputs {
    /**
     * @displayName Item ID
     * @description The ID of the report portal item.
     * @required
     */
    itemId?: string;

    /**
     * @displayName Portal URL
     * @description The URL of the ArcGIS Portal instance to use. Defaults to ArcGIS Online: "https://www.arcgis.com".
     */
    portalUrl?: string;

    /**
     * @displayName Service URL
     * @description The URL of the VertiGIS Studio Reporting service. Defaults to: "https://apps.vertigisstudio.com/reporting/".
     */
    serviceUrl?: string;

    /**
     * @description An optional token from the Get Report Run Token activity for accessing a secured report or a report that accesses secured ArcGIS content.
     */
    runToken?: string;
}

interface GetReportMetadataOutputs {
    /**
     * @description The report metadata.
     */
    result: {
        controls: {
            controlType: string;
            purpose: string;
            height: number;
            width: number;
        }[];
        parameters: {
            containsMultipleValues?: boolean;
            containsSingleValue?: boolean;
            description?: string;
            item?: any;
            itemData?: any;
            name: string;
            purpose?: string;
            value?: string | number | boolean;
            values?: string[] | number[] | boolean[];
            valueType?: string;
            visible?: boolean;
        }[];
    };
}

/**
 * @clientOnly
 * @defaultName reportMetadata
 * @category Reporting Client
 * @description Fetches metadata about a VertiGIS Studio Report. The metadata includes the list of report parameters.
 * @helpUrl https://developers.vertigisstudio.com/docs/reporting/sdk-js-overview
 * @supportedApps EXB, GWV, GVH, WAB
 */
export default class GetReportMetadata implements IActivityHandler {
    async execute(
        inputs: GetReportMetadataInputs,
    ): Promise<GetReportMetadataOutputs> {
        const {
            itemId,
            portalUrl = DefaultPortalUrl,
            runToken,
            serviceUrl = DefaultServiceUrl,
        } = inputs;
        if (!itemId) {
            throw new Error("itemId is required");
        }

        const result = await getMetadata(
            itemId,
            portalUrl,
            serviceUrl,
            runToken,
        );
        return {
            result,
        };
    }
}

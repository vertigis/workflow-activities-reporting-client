import type { IActivityHandler } from "@geocortex/workflow/runtime";
import { run } from "@vertigis/reporting-client";

interface RunReportInputs {
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
     * @description An optional ArcGIS token for accessing a secured report.
     * If the report is secured, or accesses secured ArcGIS content the token is required.
     */
    token?: string;

    /**
     * @description An object specifying the parameters to submit to the report.
     * The keys of the object must match the parameter names that exist in the report.
     */
    parameters?: Record<string, string | number | boolean | string[] | number[] | boolean[] | {
        $type: string;
        item: {
            type: string;
            extent: [[number, number], [number, number]];
        };
        itemData: any;
    }>;

    /**
     * @description The name assigned to the output file. It is used as the name of the tab when viewing the
     * result in a browser and as the suggested name when downloading the result.
     */
    resultFileName?: string;

    /**
     * @description The culture to use for localization. For example "en-US".
     */
    culture?: string;

    /**
     * @description The DPI to use when rendering a map print.
     */
    dpi?: number;

    /**
     * @description The output file format of the report. The default is "pdf".
     */
    format?: "docx" | "pdf" | "png" | "rtf" | "xlsx" | string;
}

interface RunReportOutputs {
    /**
     * @description The URL to the completed report.
     */
    result: string;
}

/**
 * @clientOnly
 * @category Reporting Client
 * @description Runs a VertiGIS Studio Report and returns the URL to the result file.
 * @helpUrl https://developers.vertigisstudio.com/docs/reporting/sdk-js-overview
 * @supportedApps EXB, GWV, GVH, WAB
 */
export default class RunReport implements IActivityHandler {
    async execute(inputs: RunReportInputs): Promise<RunReportOutputs> {
        const { itemId, ...other } = inputs;
        if (!itemId) {
            throw new Error("itemId is required");
        }

        const result = await run(itemId, {
            ...other,
        });
        return {
            result,
        };
    }
}

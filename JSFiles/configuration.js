"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: false,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testSpec/Vegetable.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsZ0NBQWdDO0FBQ3JCLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLGFBQWEsRUFBRSxLQUFLO0lBRXBCLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLHVCQUF1QixDQUFDO0lBRWhDLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxFQUFFLHlDQUF5QztLQUM1RDtDQUNGLENBQUMifQ==
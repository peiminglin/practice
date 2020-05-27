(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("ideaResource", ["$resource", "appSettings", function ($resource, appSetting) {
            return $resource(appSetting.serverPath + "/api/ideas/:id:catalogue", null, 
                {
                    get: { method: "GET", isArray: true},
                    update: { method: "PUT" },
                    save: { method: "POST" }
                }
            );
        }]);
}());
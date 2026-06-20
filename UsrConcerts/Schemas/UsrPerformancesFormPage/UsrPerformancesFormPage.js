define("UsrPerformancesFormPage", /**SCHEMA_DEPS*/ [] /**SCHEMA_DEPS*/ , function /**SCHEMA_ARGS*/() /**SCHEMA_ARGS*/ {
    return {
        viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/ [{
                "operation": "merge",
                "name": "MainContainer",
                "values": {
                    "alignItems": "stretch"
                }
            },
            {
                "operation": "insert",
                "name": "Number",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "colSpan": 1,
                        "row": 1,
                        "rowSpan": 1
                    },
                    "type": "crt.NumberInput",
                    "label": "$Resources.Strings.UsrPerformancesDS_UsrNumber_oaw0hly",
                    "control": "$UsrPerformancesDS_UsrNumber_oaw0hly",
                    "readonly": false,
                    "placeholder": "",
                    "labelPosition": "above",
                    "tooltip": ""
                },
                "parentName": "MainContainer",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "Name",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "colSpan": 1,
                        "row": 2,
                        "rowSpan": 1
                    },
                    "type": "crt.Input",
                    "label": "$Resources.Strings.UsrPerformancesDS_UsrName_w10bddo",
                    "control": "$UsrPerformancesDS_UsrName_w10bddo",
                    "placeholder": "",
                    "tooltip": "",
                    "readonly": false,
                    "multiline": false,
                    "labelPosition": "above"
                },
                "parentName": "MainContainer",
                "propertyName": "items",
                "index": 1
            },
            {
                "operation": "insert",
                "name": "DurationMinutes",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "colSpan": 1,
                        "row": 3,
                        "rowSpan": 1
                    },
                    "type": "crt.NumberInput",
                    "label": "$Resources.Strings.UsrPerformancesDS_UsrDurationMinutes_w6l7qu0",
                    "control": "$UsrPerformancesDS_UsrDurationMinutes_w6l7qu0",
                    "readonly": false,
                    "placeholder": "",
                    "labelPosition": "above",
                    "tooltip": ""
                },
                "parentName": "MainContainer",
                "propertyName": "items",
                "index": 2
            },
            {
                "operation": "insert",
                "name": "PerformanceType",
                "values": {
                    "layoutConfig": {
                        "column": 1,
                        "colSpan": 1,
                        "row": 4,
                        "rowSpan": 1
                    },
                    "type": "crt.ComboBox",
                    "label": "$Resources.Strings.UsrPerformancesDS_UsrPerformanceType_rz7hh2r",
                    "ariaLabel": "",
                    "isAddAllowed": true,
                    "showValueAsLink": false,
                    "labelPosition": "above",
                    "controlActions": [],
                    "listActions": [],
                    "tooltip": "",
                    "control": "$UsrPerformancesDS_UsrPerformanceType_rz7hh2r",
                    "visible": true,
                    "readonly": false,
                    "placeholder": "",
                    "valueDetails": null
                },
                "parentName": "MainContainer",
                "propertyName": "items",
                "index": 3
            }
        ] /**SCHEMA_VIEW_CONFIG_DIFF*/ ,
        viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/ [{
            "operation": "merge",
            "path": [
                "attributes"
            ],
            "values": {
                "UsrPerformancesDS_UsrNumber_oaw0hly": {
                    "modelConfig": {
                        "path": "UsrPerformancesDS.UsrNumber"
                    }
                },
                "UsrPerformancesDS_UsrName_w10bddo": {
                    "modelConfig": {
                        "path": "UsrPerformancesDS.UsrName"
                    }
                },
                "UsrPerformancesDS_UsrDurationMinutes_w6l7qu0": {
                    "modelConfig": {
                        "path": "UsrPerformancesDS.UsrDurationMinutes"
                    },

                    "validators": {
                        "DurationValidator": {
                            "type": "usr.DurationValidator",
                            "params": {
                                "minValue": 1,
                                "message": "#ResourceString(DurationMustBePositive)#"
                            }
                        }
                    }
                },
                "UsrPerformancesDS_UsrPerformanceType_rz7hh2r": {
                    "modelConfig": {
                        "path": "UsrPerformancesDS.UsrPerformanceType"
                    }
                },
                "UsrPerformancesDS_UsrPerformanceType_rz7hh2r_List": {
                    "isCollection": true,
                    "modelConfig": {
                        "sortingConfig": {
                            "default": [{
                                "columnName": "UsrSortingOrder",
                                "direction": "asc"
                            }]
                        }

                    }
                },
                "UsrPerformancesDS_UsrParentConcert": {
                    "modelConfig": {
                        "path": "UsrPerformancesDS.UsrParentConcert"
                    }
                }
            }
        }] /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/ ,
        modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/ [{
            "operation": "merge",
            "path": [],
            "values": {
                "dataSources": {
                    "UsrPerformancesDS": {
                        "type": "crt.EntityDataSource",
                        "scope": "page",
                        "config": {
                            "entitySchemaName": "UsrPerformances",
                            "loadParameters": {
                                "options": {
                                    "pagingConfig": {
                                        "rowCount": 1,
                                        "rowsOffset": -1
                                    },
                                    "sortingConfig": {
                                        "columns": []
                                    }
                                }
                            },
                            "allowCopyingRecords": false
                        }
                    }
                },
                "primaryDataSourceName": "UsrPerformancesDS"
            }
        }] /**SCHEMA_MODEL_CONFIG_DIFF*/ ,
        handlers: /**SCHEMA_HANDLERS*/ [{
            request: "crt.SaveRecordRequest",
            handler: async (request, next) => {
                const context = request.$context;

                const currentDuration = await context.UsrPerformancesDS_UsrDurationMinutes_w6l7qu0 || 0;
                const concert = await context.UsrPerformancesDS_UsrParentConcert;

                if (!concert) {
                    return next?.handle(request);
                }

                const concertId = concert.value || concert;
                const currentRecordId = await context.Id;

                const maxDuration = await new Promise((resolve) => {
                    Terrasoft.SysSettings.querySysSettingsItem(
                        "UsrPerformancesMaxTotalDuration",
                        function(value) {
                            resolve(Number(value) || 0);
                        },
                        this
                    );
                });

                const esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                    rootSchemaName: "UsrPerformances"
                });

                esq.addAggregationSchemaColumn(
                    "UsrDurationMinutes",
                    Terrasoft.AggregationType.SUM,
                    "TotalDuration"
                );

                esq.filters.addItem(
                    esq.createColumnFilterWithParameter(
                        Terrasoft.ComparisonType.EQUAL,
                        "UsrParentConcert",
                        concertId
                    )
                );

                if (currentRecordId) {
                    esq.filters.addItem(
                        esq.createColumnFilterWithParameter(
                            Terrasoft.ComparisonType.NOT_EQUAL,
                            "Id",
                            currentRecordId
                        )
                    );
                }

                const totalDuration = await new Promise((resolve) => {
                    esq.getEntityCollection(function(result) {
                        resolve(
                            result.success && result.collection.getCount() > 0 ?
                            result.collection.first().get("TotalDuration") || 0 :
                            0
                        );
                    }, this);
                });

                if (totalDuration + currentDuration > maxDuration) {
                    await context.executeRequest({
                        type: "crt.ShowDialogRequest",
                        $context: context,
                        dialogConfig: {
                            data: {
                                message: Ext.String.format(
                                    "Суммарная длительность выступлений концерта не должна превышать {0} минут.",
                                    maxDuration
                                )
                            }
                        }
                    });
                    return;
                }

                return next?.handle(request);
            }

        }] /**SCHEMA_HANDLERS*/ ,
        converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/ ,
        validators: /**SCHEMA_VALIDATORS*/ {
            "usr.DurationValidator": {
                validator: function(config) {
                    return function(control) {

                        const value = control.value || 0;

                        if (value < config.minValue) {
                            return {
                                "usr.DurationValidator": {
                                    message: config.message
                                }
                            };
                        }

                        return null;
                    };
                },
                params: [{
                        name: "minValue"
                    },
                    {
                        name: "message"
                    }
                ],
                async: false
            }


        } /**SCHEMA_VALIDATORS*/
    };
});
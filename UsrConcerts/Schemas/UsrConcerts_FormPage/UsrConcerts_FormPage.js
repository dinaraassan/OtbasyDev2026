define("UsrConcerts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrConcerts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2f06d770-6b0e-49a4-85fb-d86a0a5b759c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu",
					"icon": "actions-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunTotalDurationWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunTotalDurationWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "process-button-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOwner_ee27x9x",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrOwner_ee27x9x",
					"valueDetails": null,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Code",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCode_oyb3ea3",
					"control": "$PDS_UsrCode_oyb3ea3",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ConcertType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrConcertType_lgesgud",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrConcertType_lgesgud",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Active",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_UsrActive_4mck5ky",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$PDS_UsrActive_4mck5ky",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_UsrNotes_by8a71z",
					"control": "$PDS_UsrNotes_by8a71z",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_qx3wijo",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_qx3wijo_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_f3o9pxw",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_qx3wijo",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2r6uhil",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_f3o9pxw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_27igy01",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_27igy01_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrPerformances",
							"defaultValues": [
								{
									"attributeName": "UsrParentConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_2r6uhil",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_szjv3hd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_szjv3hd_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_18dv0k7DS"
						}
					}
				},
				"parentName": "FlexContainer_2r6uhil",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_bv3oiuw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_bv3oiuw_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_2r6uhil",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_wrr1dj9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_wrr1dj9_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "PerformancesGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bv3oiuw",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_iqob5di",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_iqob5di_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPerformances"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bv3oiuw",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_mh5mgbw",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_mh5mgbw_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_mh5mgbw_GridDetail_18dv0k7",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_18dv0k7"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_mh5mgbw_SearchValue",
							"GridDetailSearchFilter_mh5mgbw_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_2r6uhil",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_skl3l10",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_qx3wijo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PerformancesGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_18dv0k7",
					"activeRow": "$GridDetail_18dv0k7_ActiveRow",
					"selectionState": "$GridDetail_18dv0k7_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_18dv0k7_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_18dv0k7DS_Id",
					"columns": [
						{
							"id": "8e9f6c40-9254-331d-23f5-dbff4cf3eedd",
							"code": "GridDetail_18dv0k7DS_UsrNumber",
							"caption": "#ResourceString(GridDetail_18dv0k7DS_UsrNumber)#",
							"dataValueType": 4,
							"width": 131
						},
						{
							"id": "f7587394-c3dc-184a-6150-12c6584175d3",
							"code": "GridDetail_18dv0k7DS_UsrName",
							"caption": "#ResourceString(GridDetail_18dv0k7DS_UsrName)#",
							"dataValueType": 28,
							"width": 324
						},
						{
							"id": "fbdfa138-0e0a-4019-cb19-03706ee15936",
							"code": "GridDetail_18dv0k7DS_UsrDurationMinutes",
							"caption": "#ResourceString(GridDetail_18dv0k7DS_UsrDurationMinutes)#",
							"dataValueType": 4,
							"width": 256
						},
						{
							"id": "5867c0b0-43d1-2417-114b-62325b0d30af",
							"code": "GridDetail_18dv0k7DS_UsrPerformanceType",
							"caption": "#ResourceString(GridDetail_18dv0k7DS_UsrPerformanceType)#",
							"dataValueType": 10,
							"width": 233
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_skl3l10",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_18dv0k7_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Добавить тег",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_18dv0k7DS",
							"filters": "$GridDetail_18dv0k7 | crt.ToCollectionFilters : 'GridDetail_18dv0k7' : $GridDetail_18dv0k7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_18dv0k7_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "PerformancesGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_18dv0k7_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить тег",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_18dv0k7DS",
							"filters": "$GridDetail_18dv0k7 | crt.ToCollectionFilters : 'GridDetail_18dv0k7' : $GridDetail_18dv0k7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_18dv0k7_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_18dv0k7_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_18dv0k7_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Экспорт в Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "PerformancesGridDetail",
							"filters": "$GridDetail_18dv0k7 | crt.ToCollectionFilters : 'GridDetail_18dv0k7' : $GridDetail_18dv0k7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_18dv0k7_SelectionState"
						}
					}
				},
				"parentName": "PerformancesGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_18dv0k7_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Объединить",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_18dv0k7DS",
							"selectionState": "$GridDetail_18dv0k7_SelectionState"
						}
					}
				},
				"parentName": "PerformancesGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_18dv0k7_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Удалить",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_18dv0k7DS",
							"filters": "$GridDetail_18dv0k7 | crt.ToCollectionFilters : 'GridDetail_18dv0k7' : $GridDetail_18dv0k7_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_18dv0k7_SelectionState"
						}
					}
				},
				"parentName": "PerformancesGridDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrCode_oyb3ea3": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"PDS_UsrNotes_by8a71z": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrOwner_ee27x9x": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrOwner_ee27x9x_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrConcertType_lgesgud": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrConcertType_lgesgud_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrSortingOrder",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrActive_4mck5ky": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"GridDetail_18dv0k7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_18dv0k7DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_mh5mgbw_GridDetail_18dv0k7",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrNumber"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_18dv0k7DS_UsrNumber": {
									"modelConfig": {
										"path": "GridDetail_18dv0k7DS.UsrNumber"
									}
								},
								"GridDetail_18dv0k7DS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_18dv0k7DS.UsrName"
									}
								},
								"GridDetail_18dv0k7DS_UsrDurationMinutes": {
									"modelConfig": {
										"path": "GridDetail_18dv0k7DS.UsrDurationMinutes"
									}
								},
								"GridDetail_18dv0k7DS_UsrPerformanceType": {
									"modelConfig": {
										"path": "GridDetail_18dv0k7DS.UsrPerformanceType"
									}
								},
								"GridDetail_18dv0k7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_18dv0k7DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_18dv0k7DS": [
							{
								"attributePath": "UsrParentConcert",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrConcerts"
						},
						"scope": "page"
					},
					"GridDetail_18dv0k7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrPerformances",
							"attributes": {
								"UsrNumber": {
									"path": "UsrNumber"
								},
								"UsrName": {
									"path": "UsrName"
								},
								"UsrDurationMinutes": {
									"path": "UsrDurationMinutes"
								},
								"UsrPerformanceType": {
									"path": "UsrPerformanceType"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get 
					const concertCode = await request.$context.PDS_UsrCode_oyb3ea3;

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "ConcertsService";
					const methodName = "GetTotalDurationByConcertCode";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					//const endpoint = "http://localhost/D1_Studio/0/rest/ConcertsService/GetTotalDurationByConcertCode";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						concertCode: concertCode
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response total duration = " + response.body.GetTotalDurationByConcertCodeResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
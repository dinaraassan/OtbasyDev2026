define("UsrConcerts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrConcerts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrConcerts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "be109c7a-d1ab-e269-e0cd-34c33a844797",
							"code": "PDS_UsrCode",
							"caption": "#ResourceString(PDS_UsrCode)#",
							"dataValueType": 27,
							"width": 154
						},
						{
							"id": "38c12df9-9610-6785-f223-bf088340aa10",
							"code": "PDS_UsrTitle",
							"caption": "#ResourceString(PDS_UsrTitle)#",
							"dataValueType": 28
						},
						{
							"id": "6f998e90-929e-a545-2283-ebe8b7593cc1",
							"code": "PDS_UsrConcertType",
							"caption": "#ResourceString(PDS_UsrConcertType)#",
							"dataValueType": 10
						},
						{
							"id": "add2245b-6293-3f49-1d40-a0b1a2b963d7",
							"code": "PDS_UsrOwner",
							"caption": "#ResourceString(PDS_UsrOwner)#",
							"dataValueType": 10,
							"width": 201
						},
						{
							"id": "4522cbb1-08e0-ffdb-8f6d-dc9546aaae25",
							"code": "PDS_UsrActive",
							"caption": "#ResourceString(PDS_UsrActive)#",
							"dataValueType": 12,
							"width": 131
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true,
							"floatingEditPanel": true
						}
					},
					"visible": true,
					"style": "plain-white"
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrConcerts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrCode": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"PDS_UsrTitle": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrConcertType": {
						"modelConfig": {
							"path": "PDS.UsrConcertType"
						}
					},
					"PDS_UsrOwner": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrActive": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "UsrCode"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrConcerts",
					"attributes": {
						"UsrCode": {
							"path": "UsrCode"
						},
						"UsrTitle": {
							"path": "UsrTitle"
						},
						"UsrConcertType": {
							"path": "UsrConcertType"
						},
						"UsrOwner": {
							"path": "UsrOwner"
						},
						"UsrActive": {
							"path": "UsrActive"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
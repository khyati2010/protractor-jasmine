let sql = require("mssql");

export class Database {
	id = null;
	document_id = null;
	document_id_query =
		"select DocumentID from [dbo].[DocumentLinks] where LinkedEntityTypeID = 'VP' and LinkedEntityID= 'dbc60770-e418-470f-852c-eed486d0e236' and Deleted = 0";

	get updateDocumentsQuery() {
		return (
			"UPDATE [dbo].[DocumentLinks] set Deleted  =1 where LinkedEntityTypeID = 'VP' and LinkedEntityID= 'dbc60770-e418-470f-852c-eed486d0e236' and DocumentID = '" +
			this.document_id +
			"'"
		);
	}

	get deleteDocumentView() {
		return (
			"delete from [dbo].[DocumentViews] where documentid='" +
			this.document_id +
			"' "
		);
	}

	get setDelete() {
		return (
			"Update dbo.Documents set Deleted  =1  where DocumentTypeID = 1 and OwningEntityID = '9D0BB914-D1AA-4767-8850-D10FFA689C70' and OwningEntityTypeID = 'F' and ID ='" +
			this.document_id +
			"'  and Deleted = 0"
		);
	}

	dbConfig = {
		server: "sandbox-venminder.database.windows.net",
		database: "SAND-DEV-3-VCMS",
		user: "3Pillar",
		password: "p37*4W7VG78s",
		port: "1433",
		max: 100,

		options: {
			encrypt: true
		}
	};

	dbPromiseHandler(): Promise<number> {
		return new Promise((resolve, reject) => {
			sql.connect(this.dbConfig, err => {
				if (err) console.log(err);

				var request = new sql.Request();

				request.query(this.document_id_query, (err, recordset) => {
					if (err) {
						console.log(err);
						sql.close();
						reject(err);
					}

					this.id = recordset.recordset[0].DocumentID;

					resolve(this.id);

					sql.close();
				});
			});
		});
	}

	dbUpdate() {
		var id = null;

		this.dbPromiseHandler()
		.then(r => {
			id = r;

			console.log(id);

			this.document_id = id;

			console.log(this.document_id);

			console.log(this.updateDocumentsQuery);

			console.log(this.deleteDocumentView);

			console.log(this.setDelete);

			this.dbSetup(this.updateDocumentsQuery);
		});
	}

	dbSetup(sqlQuery) {
		sql.close();

		sql.connect(this.dbConfig, err => {
			if (err) console.log(err);

			var request = new sql.Request();

			request.query(sqlQuery, (err, recordset) => {
				if (err) console.log(err);

				console.log(recordset);

				sql.close();
			});
		});
	}
}

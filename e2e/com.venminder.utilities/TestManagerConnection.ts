//import * from Microsoft.TeamFoundation.Client";
//using Microsoft.TeamFoundation.TestManagement.Client;
// import * as vm from 'vso-node-api/WebApi';
// import * as wa from 'vso-node-api/WorkItemTrackingApi';
// import * as wi from 'vso-node-api/interfaces/WorkItemTrackingInterfaces';
// import * as vss from 'vso-node-api/interfaces/Common/VSSInterfaces';
import * as bi from "azure-devops-node-api/interfaces/BuildInterfaces";
import * as ba from "azure-devops-node-api/BuildApi";
import * as azdev from "azure-devops-node-api";
// your collection url
let orgUrl = "https://dev.azure.com/yourorgname";

let token: string = process.env.AZURE_PERSONAL_ACCESS_TOKEN; // e.g "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha";

let authHandler = azdev.getPersonalAccessTokenHandler(token);
let connection = new azdev.WebApi(orgUrl, authHandler);
//let build: ba.IBuildApi = await connection.getBuildApi();
export class TestManagerConnection {
	//  async function run() {
	// 				let project: string = "myProject";
	// 				let defs: bi.DefinitionReference[] = await build.getDefinitions(project);
	// 				defs.forEach((defRef: bi.DefinitionReference) => {
	// 					console.log(`${defRef.name} (${defRef.id})`);
	// 				});
	//  run();
	//  }
	//=================
	//   Uri tfsUri = new Uri("http:\\mytfsuri.com\teamCollection");
	// string teamProjectName = "TestProject";
	// TfsTeamProjectCollection myTfsTeamProjectCollection = new TfsTeamProjectCollection(tfsUri);
	// ITestManagementService service = _
	// (ITestManagementService)myTfsTeamProjectCollection.GetService(typeof(ITestManagementService));
	// ITestManagementTeamProject myTestManagementTeamProject = _
	//         service.GetTeamProject(teamProjectName);
	//==============
	//   using (projectPicker)
	// {
	//     var userSelected = projectPicker.ShowDialog();
	//     if (userSelected == DialogResult.Cancel)
	//     {
	//         return;
	//     }
	//     if (projectPicker.SelectedTeamProjectCollection != null)
	//     {
	//         Uri tfsUri = = projectPicker.SelectedTeamProjectCollection.Uri;
	//         string teamProjectName = projectPicker.SelectedProjects[0].Name;
	//         TfsTeamProjectCollection myTfsTeamProjectCollection =
	// 		projectPicker.SelectedTeamProjectCollection;
	//         ITestManagementService service =
	//         (ITestManagementService)ExecutionContext.TfsTeamProjectCollection.GetService
	// 		(typeof(ITestManagementService));
	//         ITestManagementTeamProject myTestManagementTeamProject = service.GetTeamProject(teamProjectName);
	//     }
	// }
	// Hide   Copy Code
	// Dim tfsUri As New Uri(@"http:\\mytfsuri.com\teamCollection")
	// Dim teamProjectName As String = "TestProject"
	// Dim myTfsTeamProjectCollection As New TfsTeamProjectCollection(tfsUri)
	// Dim service As ITestManagementService =
	// DirectCast(myTfsTeamProjectCollection.GetService(GetType(ITestManagementService)), ITestManagementService)
	// Dim myTestManagementTeamProject As ITestManagementTeamProject = service.GetTeamProject(teamProjectName)
	//   public updateResult() {
	// TfsTeamProjectCollection tfs = new TfsTeamProjectCollection(TfsTeamProjectCollection.GetFullyQualifiedUriForName(server));
	//             ITestManagementService tms = tfs.GetService<ITestManagementService>();
	//             ITestManagementTeamProject proj = tms.GetTeamProject(project);
	//             ITestPlan Plan = proj.TestPlans.Find(1);
	//             ITestRun testRun = proj.TestRuns.Create();
	//             testRun = Plan.CreateTestRun(false);
	//             ITestPointCollection points = Plan.QueryTestPoints("SELECT * FROM TestPoint");
	//             foreach (ITestPoint p in points)
	//             {
	//                 testRun.AddTestPoint(p,Plan.Owner);// null);
	//             }
	//             testRun.State = TestRunState.Completed;
	//             testRun.Save();
	//             ITestCaseResultCollection results = testRun.QueryResults();
	//             ITestIterationResult iterationResult;
	//             foreach (ITestCaseResult result in results)
	//             {
	//                 iterationResult = result.CreateIteration(1);
	//                 foreach (ITestStep testStep in result.GetTestCase().Actions)
	//                 {
	//                     ITestStepResult stepResult = iterationResult.CreateStepResult(testStep.Id);
	//                     stepResult.Outcome = TestOutcome.Passed;
	//                     iterationResult.Actions.Add(stepResult);
	//                 }
	//                 iterationResult.Outcome = TestOutcome.Passed;
	//                 result.Iterations.Add(iterationResult);
	//                 result.Save();
	//             }
	//             results.Save(true);
	//             testRun.Save();
	//             testRun.Refresh();
	// }
}

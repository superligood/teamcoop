let WebApiUrl="http://" + "47.110.138.136:8086/"
let ProjectManagerUrl="ProjectManager"
let AutoLivCommon="AutoLivCommon"

let apiUrl = {
Authorization:"Authorization",
WebApiUrl:WebApiUrl,
ProjectManagerUrl:ProjectManagerUrl,
AutoLivCommon:AutoLivCommon,
TokenUrl : ProjectManagerUrl + "/api/Token?client_id=api&client_secret=95f72107b8298d3592413c22e2d58282",

UserQueryUrl : AutoLivCommon+"/api/evw_WaiWorkFlow/Query",

TaskCreateUrl : ProjectManagerUrl+"/api/Tasks/Create",
TaskDeleteUrl : ProjectManagerUrl+"/api/Tasks/Delete",
TaskUpdateUrl : ProjectManagerUrl+"/api/Tasks/Update",
TaskQueryUrl : ProjectManagerUrl+"/api/Tasks/Query",

TaskCommentsCreateUrl : ProjectManagerUrl +"/api/TaskComments/Create",
TaskCommentsDeleteUrl : ProjectManagerUrl +"/api/TaskComments/Delete",
TaskCommentsUpdateUrl : ProjectManagerUrl +"/api/TaskComments/Update",
TaskCommentsQueryUrl : ProjectManagerUrl +"/api/TaskComments/Query",

DictionaryCreateUrl : ProjectManagerUrl+"/api/Dictionary/Create",
DictionaryDeleteUrl : ProjectManagerUrl +"/api/Dictionary/Delete",
DictionaryUpdateUrl : ProjectManagerUrl +"/api/Dictionary/Update",
DictionaryQueryUrl : ProjectManagerUrl + "/api/Dictionary/Query",

ProjectsCreateUrl : ProjectManagerUrl +"/api/Projects/Create",
ProjectsDeleteUrl : ProjectManagerUrl +"/api/Projects/Delete",
ProjectsUpdateUrl : ProjectManagerUrl +"/api/Projects/Update",
ProjectsQueryUrl : ProjectManagerUrl + "/api/Projects/Query",

ProjectChangeCreateUrl : ProjectManagerUrl + "/api/ProjectChange/Create",
ProjectChangeUpdateUrl : ProjectManagerUrl + "/api/ProjectChange/Update",
ProjectChangeDeleteUrl : ProjectManagerUrl + "/api/ProjectChange/Delete",
ProjectChangeQueryUrl : ProjectManagerUrl + "/api/ProjectChange/Query",

ProjectCompleteCreateUrl : ProjectManagerUrl + "/api/ProjectComplete/Create",
ProjectCompleteUpdateUrl : ProjectManagerUrl + "/api/ProjectComplete/Update",
ProjectCompleteDeleteUrl : ProjectManagerUrl + "/api/ProjectComplete/Delete",
ProjectCompleteQueryUrl : ProjectManagerUrl + "/api/ProjectComplete/Query",

ProjectMembersCreateUrl : ProjectManagerUrl + "/api/ProjectMembers/Create",
ProjectMembersUpdateUrl : ProjectManagerUrl + "/api/ProjectMembers/Update",
ProjectMembersDeleteUrl : ProjectManagerUrl + "/api/ProjectMembers/Delete",
ProjectMembersQueryUrl : ProjectManagerUrl + "/api/ProjectMembers/Query",

ProjectCompleteMemberCreateUrl : ProjectManagerUrl + "/api/ProjectCompleteMember/Create",
ProjectCompleteMemberUpdateUrl : ProjectManagerUrl + "/api/ProjectCompleteMember/Update",
ProjectCompleteMemberDeleteUrl : ProjectManagerUrl + "/api/ProjectCompleteMember/Delete",
ProjectCompleteMemberQueryUrl : ProjectManagerUrl + "/api/ProjectCompleteMember/Query",

ProjectPublishmentCreateUrl : ProjectManagerUrl + "/api/ProjectPublishment/Create",
ProjectPublishmentUpdateUrl : ProjectManagerUrl + "/api/ProjectPublishment/Update",
ProjectPublishmentDeleteUrl : ProjectManagerUrl + "/api/ProjectPublishment/Delete",
ProjectPublishmentQueryUrl : ProjectManagerUrl + "/api/ProjectPublishment/Query",

ProjectFilesCreateUrl : ProjectManagerUrl + "/api/ProjectFiles/Create",
ProjectFilesUpdateUrl : ProjectManagerUrl + "/api/ProjectFiles/Update",
ProjectFilesDeleteUrl : ProjectManagerUrl + "/api/ProjectFiles/Delete",
ProjectFilesQueryUrl : ProjectManagerUrl + "/api/ProjectFiles/Query",
}

export default apiUrl



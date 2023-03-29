
const WebApiUrl = "http://" + "47.110.138.136:8086";
const ProjectManagerUrl = WebApiUrl + "/ProjectManager";
const AutoLivCommon = WebApiUrl + "/AutoLivCommon";
const TokenUrl = ProjectManagerUrl + "/api/Token?client_id=api&client_secret=95f72107b8298d3592413c22e2d58282";


const UserQueryUrl = AutoLivCommon+"/api/evw_WaiWorkFlow/Query";

const TaskCreateUrl = ProjectManagerUrl+"/api/Tasks/Create";
const TaskDeleteUrl = ProjectManagerUrl+"/api/Tasks/Delete";
const TaskUpdateUrl = ProjectManagerUrl+"/api/Tasks/Update";
const TaskQueryUrl = ProjectManagerUrl+"/api/Tasks/Query";

const TaskCommentsCreateUrl = ProjectManagerUrl +"/api/TaskComments/Create";
const TaskCommentsDeleteUrl = ProjectManagerUrl +"/api/TaskComments/Delete";
const TaskCommentsUpdateUrl = ProjectManagerUrl +"/api/TaskComments/Update";
const TaskCommentsQueryUrl = ProjectManagerUrl +"/api/TaskComments/Query";

const DictionaryCreateUrl = ProjectManagerUrl+"/api/Dictionary/Create"
const DictionaryDeleteUrl = ProjectManagerUrl +"/api/Dictionary/Delete";
const DictionaryUpdateUrl = ProjectManagerUrl +"/api/Dictionary/Update";
const DictionaryQueryUrl = ProjectManagerUrl + "/api/Dictionary/Query";

const ProjectsCreateUrl = ProjectManagerUrl +"​/api​/Projects​/Create";
const ProjectsDeleteUrl = ProjectManagerUrl +"/api/Projects/Delete";
const ProjectsUpdateUrl = ProjectManagerUrl +"/api/Projects/Update";
const ProjectsQueryUrl = ProjectManagerUrl + "/api/Projects/Query";

const ProjectChangeCreateUrl = ProjectManagerUrl + "/api/ProjectChange/Create";
const ProjectChangeUpdateUrl = ProjectManagerUrl + "/api/ProjectChange/Update";
const ProjectChangeDeleteUrl = ProjectManagerUrl + "/api/ProjectChange/Delete";
const ProjectChangeQueryUrl = ProjectManagerUrl + "/api/ProjectChange/Query";

const ProjectCompleteCreateUrl = ProjectManagerUrl + "/api/ProjectComplete/Create";
const ProjectCompleteUpdateUrl = ProjectManagerUrl + "/api/ProjectComplete/Update";
const ProjectCompleteDeleteUrl = ProjectManagerUrl + "/api/ProjectComplete/Delete";
const ProjectCompleteQueryUrl = ProjectManagerUrl + "/api/ProjectComplete/Query";

const ProjectMembersCreateUrl = ProjectManagerUrl + "/api/ProjectMembers/Create";
const ProjectMembersUpdateUrl = ProjectManagerUrl + "/api/ProjectMembers/Update";
const ProjectMembersDeleteUrl = ProjectManagerUrl + "/api/ProjectMembers/Delete";
const ProjectMembersQueryUrl = ProjectManagerUrl + "/api/ProjectMembers/Query";

const ProjectCompleteMemberCreateUrl = ProjectManagerUrl + "/api/ProjectCompleteMember/Create";
const ProjectCompleteMemberUpdateUrl = ProjectManagerUrl + "/api/ProjectCompleteMember/Update";
const ProjectCompleteMemberDeleteUrl = ProjectManagerUrl + "/api/ProjectCompleteMember/Delete";
const ProjectCompleteMemberQueryUrl = ProjectManagerUrl + "/api/ProjectCompleteMember/Query";

const ProjectPublishmentCreateUrl = ProjectManagerUrl + "/api/ProjectPublishment/Create";
const ProjectPublishmentUpdateUrl = ProjectManagerUrl + "/api/ProjectPublishment/Update";
const ProjectPublishmentDeleteUrl = ProjectManagerUrl + "/api/ProjectPublishment/Delete";
const ProjectPublishmentQueryUrl = ProjectManagerUrl + "/api/ProjectPublishment/Query";

const ProjectFilesCreateUrl = ProjectManagerUrl + "/api/ProjectFiles/Create";
const ProjectFilesUpdateUrl = ProjectManagerUrl + "/api/ProjectFiles/Update";
const ProjectFilesDeleteUrl = ProjectManagerUrl + "/api/ProjectFiles/Delete";
const ProjectFilesQueryUrl = ProjectManagerUrl + "/api/ProjectFiles/Query";

const configapi = {
   WebApiUrl, TokenUrl,UserQueryUrl
}



export default configapi

import request from 'umi-request';


/**获取项目信息*/
export async function GetCurrUser() {
  return request(`/BaseDataToUi/GetProjectInfos`);
}

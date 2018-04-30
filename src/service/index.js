
import fetch from "../asests/untils/common"


export const  campaignList= ()=>fetch(`/proxy/auth/getCampaignList`);
export const  campaignId  = (id)=> fetch(`/proxy/auth/getCampaignById`,{id});
export const  CamId  = (campaignId)=> fetch(`/proxy/auth/getSpotListByCamId`,{campaignId});
export const  createCampaign  = (parm)=> fetch(`/proxy/auth/createCampaign`,parm);
export const  updataCampaign  = (parm)=> fetch(`/proxy/auth/updateCampaign`,parm);
export const  addSpot  = (parm)=> fetch(`/proxy/auth/createSpot`,parm);
export const  fetchEcharts = (pacampaignIdrm)=> fetch(`/proxy/auth/getSpotLineGraphic`,campaignId);
export const  updataPass = (param)=> fetch(`/proxy/auth/resetPassword`,param);
export const  campLinks = (param)=> fetch(`/proxy/exportdata`,{param});
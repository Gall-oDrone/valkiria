import axios from "axios";
import {
  GET_PROFILE_INQUIRY_LIST_START,
  GET_PROFILE_INQUIRY_LIST_SUCCESS,
  GET_PROFILE_INQUIRY_LIST_FAIL,
  GET_PROFILE_INQUIRY_DETAIL_START,
  GET_PROFILE_INQUIRY_DETAIL_FAIL,
  GET_PROFILE_INQUIRY_DETAIL_SUCCESS,
  PUT_PROFILE_INQUIRY_DETAIL_START,
  PUT_PROFILE_INQUIRY_DETAIL_FAIL,
  PUT_PROFILE_INQUIRY_DETAIL_SUCCESS,
  DELETE_PROFILE_INQUIRY_DETAIL_FAIL,
  DELETE_PROFILE_INQUIRY_DETAIL_SUCCESS
} from "./actionTypes";
import {
  projectListURL,
  projectDetailURL,
  projectCreateURL,
  profileInquiryListURL,
  profileInquiryDetailURL,
  projectURL
} from "../../constants"

const getProfileInquiryListStart = () => {
  console.log("1) Actions getMeetingDetailStart")
  return {
    type: GET_PROFILE_INQUIRY_LIST_START
  };
};

const getProfileInquiryListSuccess = data => {
  console.log("2) Actions getMeetingDetailSuccess")
  return {
    type: GET_PROFILE_INQUIRY_LIST_SUCCESS ,
    data
  };
};

const getProfileInquiryListFail = error => {
  return {
    type: GET_PROFILE_INQUIRY_LIST_FAIL,
    error: error
  };
};

export const getProfileInquiryList = (token, username) => {
    return dispatch => {
      console.log(" getProfileInquiryList ")
        // dispatch(getMeetingDetailStart());
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.get(profileInquiryListURL(username))
        .then(res => {
            const data = res.data;
            console.log("data: "+ JSON.stringify(data))
            dispatch(getProfileInquiryListSuccess(data));
        })
        .catch(err => {
            dispatch(getProfileInquiryListFail(err));
        })
    }
}

const getProfileInquiryDetailStart = () => {
  console.log("1) Actions getMeetingDetailStart")
  return {
    type: GET_PROFILE_INQUIRY_DETAIL_START
  };
};

const getProfileInquiryDetailSuccess = data => {
  console.log("2) Actions getMeetingDetailSuccess")
  return {
    type: GET_PROFILE_INQUIRY_DETAIL_SUCCESS ,
    data
  };
};

const getProfileInquiryDetailFail = error => {
  return {
    type: GET_PROFILE_INQUIRY_DETAIL_FAIL,
    error: error
  };
};

export const getProfileInquiryDetail = (token, projectID, username) => {
    return dispatch => {
      console.log(" getDetailMeetingList ")
        // dispatch(getMeetingDetailStart());
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.get(profileInquiryDetailURL(projectID, username))
        .then(res => {
            const data = res.data;
            console.log("data: "+ JSON.stringify(data))
            dispatch(getProfileInquiryDetailSuccess(data));
        })
        .catch(err => {
            dispatch(getProfileInquiryDetailFail(err));
        })
    }
}

const putProfileInquiryDetailStart = () => {
  console.log("1) Actions putProfileInquiryDetailStart")
  return {
    type: PUT_PROFILE_INQUIRY_DETAIL_START
  };
};

const putProfileInquiryDetailSuccess = data => {
  console.log("2) Actions putProfileInquiryDetailSuccess")
  return {
    type: PUT_PROFILE_INQUIRY_DETAIL_FAIL,
    data
  };
};

const putProfileInquiryDetailFail = error => {
  return {
    type: PUT_PROFILE_INQUIRY_DETAIL_SUCCESS,
    error: error
  };
};

export const putProfileInquiryDetail = (token, projectID, username, data) => {
    return dispatch => {
      console.log(" putProfileInquiryDetail ")
      console.log(" putProfileInquiryDetail data: "+JSON.stringify(data))
        // dispatch(getMeetingDetailStart());
        axios.defaults.headers = {
          //'Accept': 'application/json, application/pdf, application/xml, text/plain, text/html, *.*',
          "Content-Type": "application/json",
            // "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.put(profileInquiryDetailURL(projectID, username), data)
        .then(res => {
            const data = res.data;
            console.log("data: "+ JSON.stringify(data))
            dispatch(putProfileInquiryDetailSuccess(data));
        })
        .catch(err => {
            dispatch(putProfileInquiryDetailFail(err));
        })
    }
}

const deleteProfileInquiryDetailSuccess = () => {
  console.log("2) Actions deleteProfileInquiryDetailSuccess")
  return {
    type: DELETE_PROFILE_INQUIRY_DETAIL_SUCCESS,
  };
};

const deleteProfileInquiryDetailFail = error => {
  return {
    type: DELETE_PROFILE_INQUIRY_DETAIL_FAIL,
    error: error
  };
};

export const deleteProfileInquiryDetail = (token, projectID, username) => {
    return dispatch => {
      console.log(" putProfileInquiryDetail ")
        // dispatch(getMeetingDetailStart());
        axios.defaults.headers = {
          //'Accept': 'application/json, application/pdf, application/xml, text/plain, text/html, *.*',
          'content-type': 'multipart/form-data',
            // "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }
        axios.delete(profileInquiryDetailURL(projectID, username))
        .then(res => {
            dispatch(deleteProfileInquiryDetailSuccess());
        })
        .catch(err => {
            dispatch(deleteProfileInquiryDetailFail(err));
        })
    }
}
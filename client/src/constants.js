let localhost = null
let files = null
const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
if (process.env.NODE_ENV === "production"){
  localhost = 'https://py3-test-app.herokuapp.com'
  files = 'https://py3-test-app-bucket.s3.amazonaws.com'
  console.log("process.env.PUBLIC_URL", JSON.stringify(process.env.PUBLIC_URL))
  console.log("window.location", JSON.stringify(window.location))
  console.log("publicUrl", JSON.stringify(publicUrl))
} else {
  localhost = files = 'http://127.0.0.1:8080'
  console.log("process.env.PUBLIC_URL", JSON.stringify(process.env.PUBLIC_URL))
  console.log("window.location", JSON.stringify(window.location))
  console.log("publicUrl", JSON.stringify(publicUrl))
}

const apiURL = '/api'
const apiArticlesURL = '/api/articles'
const imageURL = '/media'
const mediaURL = imageURL

// export const endpoint = `${localhost}`
export const endpoint = `${localhost}${apiURL}`
const image_endpoint = `${files}${imageURL}`
export const media_endpoint = `${files}${mediaURL}`

export const homeListURL = `${endpoint}/filter/featured_list/`;
export const searchListURL = `${endpoint}/filter/global_list/`;

export const productListURL = `${endpoint}/paymentsApi/products/`;
export const productDetailURL = id => `${endpoint}/payments/products/${id}/`;
export const directBuyURL = `${endpoint}/payments/direct-buy/`;
export const sessionDirectBuyURL = `${endpoint}/payments/session-direct-buy/`;
export const workshopDirectBuyURL = `${endpoint}/payments/workshop-direct-buy/`;
export const addToCartURL = `${endpoint}/payments/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/payments/order-summary/`;
export const sessionOrderSummaryURL = `${endpoint}/payments/session-order-summary/`;
export const paymentSURL = `${endpoint}/payments/payment-successful/`;
export const checkoutURL = `${endpoint}/payments/checkout/`;
export const donationURL = `${endpoint}/payments/donation/`;
export const addCouponURL = `${endpoint}/payments/add-coupon/`;
export const countryListURL = `${endpoint}/payments/countries/`;
export const image_URL = `${files}/`;
export const userIDURL = `${endpoint}/payments/user-id/`;
export const addressListURL = addressType =>
  `${endpoint}/payments/addresses/?address_type=${addressType}`;
export const addressCreateURL = `${endpoint}/payments/addresses/create/`;
export const addressUpdateURL = id => `${endpoint}/payments/addresses/${id}/update/`;
export const addressDeleteURL = id => `${endpoint}/payments/addresses/${id}/delete/`;
export const orderItemDeleteURL = id => `${endpoint}/payments/order-items/${id}/delete/`;
export const orderItemUpdateQuantityURL = `${endpoint}/payments/order-item/update-quantity/`;
export const paymentListURL = `${endpoint}/payments/payment-list/`;

export const articleListURL = `${endpoint}/articles/`
export const articleCreateURL = `${endpoint}/articles/create/`
export const articleDetailURL = (articleID) => `${endpoint}/articles/${articleID}`
export const articleUpdateURL = (articleID) => `${endpoint}/articles/${articleID}/update/`

export const projectListURL = `${endpoint}/projects/`
export const projectCreateURL = `${endpoint}/projects/create/`
export const projectDetailURL = (projectID) => `${endpoint}/projects/${projectID}`
export const projectUpdateURL = (projectID) => `${endpoint}/projects/${projectID}/update/`

export const authLogInURL = `${localhost}/rest-auth/login/`;
export const authSignUpURL = `${localhost}/rest-auth/registration/`;
export const authLogOutURL = `${localhost}/rest-auth/logout/`;
export const authGoogleLogInURL = `${endpoint}/users/auth/google/`;
export const authFacebookLogInURL = `${endpoint}/users/auth/facebook/`;
export const authResendConfirmationURL =`${endpoint}/users/auth/resend/confirmation/`;
// export const authGoogleLogInURL2 = `${localhost}/users/rest-auth/google/`;
export const authActivateUserURL = (uid, token) => `${endpoint}/users/activate/${uid}/${token}`;

export const articleCommentsURL = articleID => `${endpoint}/articles/${articleID}/comments/`
export const articleCommentURL = (articleID, commentID) => `${endpoint}/articles/${articleID}/comment/${commentID}/`
export const articleCreateCommentURL = data => `${endpoint}/articles/${data.articleID}/create-comment/`
export const articleUpdateCommentURL = data => `${endpoint}/articles/${data.articleID}/update-comment/${data.id}/`
export const articleUpdateCommentURL3 = (articleID, commentID) => `${endpoint}/articles/${articleID}/update-comment/${commentID}/`

export const projectCommentsURL = projectID => `${endpoint}/projects/${projectID}/comments/`
export const projectCommentURL = (projectID, commentID) => `${endpoint}/projects/${projectID}/comment/${commentID}/`
export const projectCreateCommentURL = data => `${endpoint}/projects/${data.projectID}/create-comment/`
export const projectUpdateCommentURL = data => `${endpoint}/projects/${data.projectID}/update-comment/${data.id}/`
export const projectUpdateCommentURL3 = (projectID, commentID) => `${endpoint}/projects/${projectID}/update-comment/${commentID}/`

export const lcroomCreateMeetingURL = `${endpoint}/live-chat/lcrequest/create/`
export const lcroomListURL = username => `${endpoint}/live-chat/lcrequest/lcroom/list/${username}`
export const lcroomDetailURL = roomName => `${endpoint}/live-chat/lcrequest/lcroom/detail/${roomName}`
export const lcroomUserListMeetingURL = username => `${endpoint}/live-chat/lcrequest/userlist/${username}`
export const lcroomUserMeetingReceivedURL = username => `${endpoint}/live-chat/lcrequest/received/userlist/${username}`
export const lcroomBookedURL = username => `${endpoint}/live-chat/lcrequest/booked/userlist/${username}`
export const lcroomListDetailURL =  (articleID, userID) => `${endpoint}/live-chat/lcrequest/listdetail/${articleID}/${userID}`

export const incentivesCreateURL = `${endpoint}/incentives/create/`
export const incentivesListURL = username => `${endpoint}/incentives/userlist/${username}`
export const incentivesDetailURL = userID => `${endpoint}/incentives/listdetail/${userID}`
// export const articleDetailURL = articleID => `${endpoint}/articles/${articleID}`

export const profileMeetingRequestURL = username => `${endpoint}/users/lcrequest/${username}`
export const profileArticleListURL = username => `${endpoint}/articles/list/${username}/`
export const profileArticleDetailURL = (articleID, username) => `${endpoint}/articles/${articleID}/detail/${username}/`
export const profileProjectListURL = username => `${endpoint}/projects/list/${username}/`
export const profileProjectDetailURL = (projectID, username) => `${endpoint}/projects/${projectID}/detail/${username}/`
export const profileSessionListURL = username => `${endpoint}/sessions/list/${username}/`
export const profileSessionDetailURL = (articleID, username) => `${endpoint}/sessions/detail/${articleID}/${username}/`
export const profileSessionRoomURL = (sessionID, username) => `${endpoint}/sessions/room/${sessionID}/${username}/`
export const profileInquiryListURL = username => `${endpoint}/inquiries/list/${username}/`
export const profileInquiryDetailURL = (articleID, username) => `${endpoint}/inquiries/${articleID}/detail/${username}/`
export const profileAccountInfoURL = (userId) => `${endpoint}/users/profile/account/info/${userId}`
export const profileURL = (articleID, username) => `${endpoint}/articles/${articleID}/detail/${username}/`
export const profileUserInfoURL = username => `${endpoint}/users/profile/info/${username}`
export const profileResumeInfoURL = username => `${endpoint}/users/profile/resume/${username}`
export const profileResumeCreateURL = username => `${endpoint}/users/profile/resume/create/${username}`
export const profilePageURL = username => `${endpoint}/users/profile-page/${username}`
export const profileFollowUser = username => `${endpoint}/users/following/${username}`
export const profileWorkshopListURL = username => `${endpoint}/workshops/list/${username}/`
export const profileRegisteredWorkshopListURL = username => `${endpoint}/workshops/registered/list/${username}/`
export const profileWorkshopDetailURL = (articleID, username) => `${endpoint}/workshops/${articleID}/detail/${username}/`
 
export const profileAccountUserInfoURL = userID => `${endpoint}/users/profile/account/user/info/${userID}`
export const profileAccountUserUpdateInfoURL = userID => `${endpoint}/users/profile/account/info/${userID}`
export const profileAccountUserInfoUpdateURL = username => `${endpoint}/users/profile/account/user/info/update/${username}`
export const profileAccountUserSurveyListURL = username => `${endpoint}/survey/profile/survey/list/${username}`
export const profileAccountUserSurveyDetailURL = (username, surveyID) => `${endpoint}/survey/profile/survey/detail/${username}/${surveyID}`
export const profileAccountUserSurveyUpdateURL = (username, surveyID) => `${endpoint}/survey/profile/survey/detail/${username}/${surveyID}/update`

export const articleRatingURL = data => `${endpoint}/articles/${data.articleID}/rating/`
export const fetchRatingURL = articleID => `${endpoint}/articles/${articleID}`
export const articleLikeUpdateURL = (articleID, userID) => `${endpoint}/articles/${articleID}/likes/${userID}/`
export const articleLikeCreateURL = (articleID) => `${endpoint}/articles/${articleID}/create-likes/`
export const fetchLikeCounterURL = (articleID) => `${endpoint}/articles/${articleID}`

export const projectRatingURL = data => `${endpoint}/projects/${data.projectID}/rating/`
export const fetchProjectRatingURL = projectID => `${endpoint}/projects/${projectID}`
export const projectLikeUpdateURL = (projectID, userID) => `${endpoint}/projects/${projectID}/likes/${userID}/`
export const projectLikeCreateURL = (projectID) => `${endpoint}/projects/${projectID}/create-likes/`
export const fetchProjectLikeCounterURL = (projectID) => `${endpoint}/projects/${projectID}`
export const projectUpvoteUpdateURL = (projectID, userID) => `${endpoint}/projects/${projectID}/upvotes/${userID}/`
export const projectUpvoteCreateURL = (projectID) => `${endpoint}/projects/${projectID}/create-upvotes/`
export const fetchUpvoteCounterURL = (projectID) => `${endpoint}/projects/${projectID}`

export const lcroomReviewURL = `${endpoint}/live-chat/lcrequest/lcroom/review/create/`

export const surveyListURL = `${endpoint}/survey/`
export const surveyDetailURL = id => `${endpoint}/survey/${id}`
export const surveyCreateURL = `${endpoint}/survey/create/`
export const surveyChociesURL = `${endpoint}/survey/choices/`

export const gradedsurveyURL = username => `${endpoint}/surveyApi/graded-survey/?username=${username}`
export const gradedSurveyListURL = `${endpoint}/graded-survey/`
export const gradedSurveyDetailURL = id => `${endpoint}/graded-survey/${id}/`
export const gradedSurveyCreateURL = `${endpoint}/graded-survey/create/`
// export const gradedsurveyCreateURL = `${endpoint}/surveyApi/graded-surveys/create/`
export const gradedSurveyChociesURL = `${endpoint}/graded-survey/choices/`

export const notificationListURL = (username) => `${endpoint}/notifications/list/${username}/`
export const notificationListScrollerURL = (username, limit, offset) => `${endpoint}/notifications/list/scroller/${username}/?limit=${limit}&offset=${offset}`
export const notificationUpdateListURL = username => `${endpoint}/notifications/list/update/${username}/`
export const notificationDetailURL = (notificationID, username)=> `${endpoint}/notifications/${notificationID}/detail/${username}/`
export const notificationUpdateURL = (notificationID, username)=> `${endpoint}/notifications/${notificationID}/detail/update/${username}/`
export const notificationURL = (notificationID, username)=> `${endpoint}/notifications/${notificationID}/detail/delete/${username}/`

export const messageListURL = (username) => `${endpoint}/chat/list/${username}/`
export const messageListScrollerURL = (username, limit, offset) => `${endpoint}/chat/list/scroller/${username}/?limit=${limit}&offset=${offset}`
export const messageUpdateListURL = username => `${endpoint}/chat/list/update/${username}/`
export const messageDetailURL = (messageID, username)=> `${endpoint}/chat/${messageID}/detail/${username}/`
export const messageUpdateURL = (messageID, username)=> `${endpoint}/chat/${messageID}/detail/update/${username}/`
export const messageURL = (messageID, username)=> `${endpoint}/chat/${messageID}/detail/delete/${username}/`

export const inquiryListURL = `${endpoint}/inquiries/list/`
export const inquiryDetailURL = (ID)=> `${endpoint}/inquiries/${ID}`
export const inquiryUpdateURL = (inquiryID)=> `${endpoint}/inquiries/${inquiryID}`
export const inquiryCreateURL = `${endpoint}/inquiries/create/`
export const inquiryURL = (notificationID, username)=> `${endpoint}/notifications/${notificationID}/detail/delete/${username}/`
export const inquirySelectableListURL = `${endpoint}/inquiries/types-and-others/`

export const inquiryRatingURL = data => `${endpoint}/inquiries/${data.inquiryID}/rating/`
export const fetchInquiryRatingURL = inquiryID => `${endpoint}/inquiries/${inquiryID}`
export const inquiryLikeUpdateURL = (inquiryID, userID) => `${endpoint}/inquiries/${inquiryID}/likes/${userID}/`
export const inquiryLikeCreateURL = (inquiryID) => `${endpoint}/inquiries/${inquiryID}/likes/`
export const fetchInquiryLikeCounterURL = (inquiryID) => `${endpoint}/inquiries/${inquiryID}`
// export const inquiryListURL = inquiryID => `${endpoint}/inquiries/${inquiryID}`

export const inquiryCommentsURL = inquiryID => `${endpoint}/inquiries/${inquiryID}/comments/`
export const inquiryCommentURL = (inquiryID, commentID) => `${endpoint}/inquiries/${inquiryID}/comment/${commentID}/`
export const inquiryCreateCommentURL = inquiryID => `${endpoint}/inquiries/${inquiryID}/create-comment/`
export const inquiryUpdateCommentURL = data => `${endpoint}/inquiries/${data.inquiryID}/update-comment/${data.id}/`
export const inquiryUpdateCommentURL2 = (inquiryID, commentID) => `${endpoint}/inquiries/${inquiryID}/update-comment/${commentID}/`

export const filterURL = `${endpoint}/`
export const filterGetURL = `${endpoint}/filter/inquiry/`

export const vcroomGetDetailURL =  (chatID) => `${endpoint}/chat/video-chat/${chatID}`
export const chatDetailURL = (chatID) => `${endpoint}/chat/detail/${chatID}`
export const chatDetailParticipantsURL = (chatID) => `${endpoint}/chat/detail/participants/${chatID}`
export const chatDetailRoomStatusURL = (chatID) => `${endpoint}/chat/detail/status/${chatID}`

export const sessionListURL = `${endpoint}/sessions/list/`
export const sessionCreateURL = `${endpoint}/sessions/session/create/`
export const sessionDetailURL = (sessionID) => `${endpoint}/sessions/detail/${sessionID}`
export const sessionProfileDetailURL = (sessionID, userID) => `${endpoint}/sessions/detail/${sessionID}/${userID}`
export const sessionUpdateURL = (sessionID) => `${endpoint}/sessions/session/${sessionID}/update/`

export const workshopListURL = `${endpoint}/workshops/list/`
export const workshopCreateURL = `${endpoint}/workshops/create/`
export const workshopDetailURL = (workshopID) => `${endpoint}/workshops/detail/${workshopID}`
export const workshopContentURL = (workshopID, userID) => `${endpoint}/workshops/content/${workshopID}/${userID}`
export const workshopRegisterURL = (workshopID) => `${endpoint}/workshops/detail/${workshopID}/register/`
export const workshopProfileDetailURL = (workshopID, userID) => `${endpoint}/workshops/detail/${workshopID}/${userID}`
export const workshopUpdateURL = (workshopID) => `${endpoint}/workshops/workshop/${workshopID}/update/`

export const workshopCommentsURL = workshopID => `${endpoint}/workshops/${workshopID}/comments/`
export const workshopCommentURL = (workshopID, commentID) => `${endpoint}/workshops/${workshopID}/comment/${commentID}/`
export const workshopCreateCommentURL = data => `${endpoint}/workshops/${data.workshopID}/create-comment/`
export const workshopUpdateCommentURL = data => `${endpoint}/workshops/${data.workshopID}/update-comment/${data.id}/`
export const workshopUpdateCommentURL3 = (workshopID, commentID) => `${endpoint}/workshops/${workshopID}/update-comment/${commentID}/`

export const workshopRatingURL = data => `${endpoint}/workshops/${data.workshopID}/rating/`
export const fetchWorkshopRatingURL = workshopID => `${endpoint}/workshops/${workshopID}`
export const workshopLikeUpdateURL = (workshopID, userID) => `${endpoint}/workshops/${workshopID}/likes/${userID}/`
export const workshopLikeCreateURL = (workshopID) => `${endpoint}/workshops/${workshopID}/create-likes/`
export const fetchWorkshopLikeCounterURL = (workshopID) => `${endpoint}/workshops/${workshopID}`

export const collaborationCreateMeetingURL = `${endpoint}/collaboration/request/create/`
export const collaborationListURL = username => `${endpoint}/collaboration/request/collaboration/list/${username}`
export const collaborationDetailURL = roomName => `${endpoint}/collaboration/request/collaboration/detail/${roomName}`
export const collaborationUserListMeetingURL = username => `${endpoint}/collaboration/request/userlist/${username}`
export const collaborationUserMeetingReceivedURL = username => `${endpoint}/collaboration/request/received/userlist/${username}`
export const collaborationBookedURL = username => `${endpoint}/collaboration/request/booked/userlist/${username}`
export const collaborationListDetailURL =  (articleID, userID) => `${endpoint}/collaboration/request/listdetail/${articleID}/${userID}`

export const boardCreateURL = `${endpoint}/boards/create/`
export const boardListURL = username => `${endpoint}/boards/list/${username}/`
export const boardDetailURL = roomName => `${endpoint}/boards/detail/${roomName}`
export const boardUpdateURL = roomName => `${endpoint}/boards/update/${roomName}`

export const trelloListCreateURL = (board) => `${endpoint}/boards/list/create/${board}`
export const trelloListListURL = (board) => `${endpoint}/boards/list/list/${board}/`
export const trelloListUpdateURL = (board) => `${endpoint}/boards/list/update/${board}`

export const trelloCardCreateURL = (list) => `${endpoint}/boards/card/create/${list}`
export const trelloCardListURL = (list, username) => `${endpoint}/boards/card/list/${list}/${username}`
export const trelloCardDetailURL = roomName => `${endpoint}/boards/card/detail/${roomName}`
export const trelloCardUpdateURL = (list) => `${endpoint}/boards/card/update/${list}`

export const trelloCardTagCreateMeetingURL = `${endpoint}/boards/trelloCard/tag/create/`
export const trelloCardTagListURL = username => `${endpoint}/boards/trelloCard/tag/list/${username}`
export const trelloCardTagUpdateURL = roomName => `${endpoint}/boards/trelloCard/tag/update/${roomName}`

export const trelloCardFileCreateMeetingURL = `${endpoint}/boards/trelloCard/file/create/`
export const trelloCardFileListURL = username => `${endpoint}/boards/trelloCard/file/list/${username}`
export const trelloCardFileDetailURL = roomName => `${endpoint}/boards/trelloCard/file/detail/${roomName}`
export const trelloCardFileUpdateURL = roomName => `${endpoint}/boards/trelloCard/file/update/${roomName}`

export const trelloCardChecklistCreateMeetingURL = `${endpoint}/boards/trelloCard/checklist/create/`
export const trelloCardChecklistListURL = username => `${endpoint}/boards/trelloCard/checklist/list/${username}`
export const trelloCardChecklistDetailURL = roomName => `${endpoint}/boards/trelloCard/checklist/detail/${roomName}`
export const trelloCardChecklistUpdateURL = roomName => `${endpoint}/boards/trelloCard/checklist/update/${roomName}`

export const trelloCardChecklistTaskCreateMeetingURL = `${endpoint}/boards/trelloCard/checklist/task/create/`
export const trelloCardChecklistTaskListURL = username => `${endpoint}/boards/trelloCard/checklist/task/list/${username}`
export const trelloCardChecklistTaskDetailURL = roomName => `${endpoint}/boards/trelloCard/checklist/task/detail/${roomName}`
export const trelloCardChecklistTaskUpdateURL = roomName => `${endpoint}/boards/trelloCard/checklist/task/update/${roomName}`

export const collabListURL = `${endpoint}/collaborations/`
export const collabCreateURL = `${endpoint}/collaborations/create/`
export const collabDetailURL = (collabID) => `${endpoint}/collaborations/${collabID}`
export const collabProfileDetailURL = (collabID, userID) => `${endpoint}/collaborations/detail/${collabID}/${userID}`
export const collabUpdateURL = (collabID) => `${endpoint}/collaborations/${collabID}/update/`
export const collabCreateRequestURL = (collabID) => `${endpoint}/collaborations/${collabID}/create-request/`

export const UserListCollaborationRequestURL = username => `${endpoint}/collaborations/request/userlist/${username}`
export const UserCollaborationRequestUpdateURL = username => `${endpoint}/collaborations/request/userlist/update/${username}`

export const fetchDegreesAndCoursesURL = `${endpoint}/users/courses-degrees/`
export const fetchCategoriesAndFeedbacksURL = `${endpoint}/articles/categories-f_t/`
export const fetchDisciplinesURL = `${endpoint}/collaborations/ad-list/`
export const fetchCollabAllChoices = `${endpoint}/collaborations/all-list/`

// export const walletURL = username => `${endpoint}/wallet/userlist/${username}`
export const walletBalanceURL = username => `${endpoint}/wallet/balance/${username}`
export const TransactionListURL = (walletID, username) => `${endpoint}/wallet/transactions/${walletID}/${username}`
// export const walletTransactiontURL = username => `${endpoint}/wallet/transaction/${walletID}/${username`
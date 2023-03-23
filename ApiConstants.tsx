// PRODUCTION
// export const ApiBaseUrl = "http://52.89.108.189:8080/Eshq/api/";

// STAGING
export const ApiBaseUrl = "http://3.109.131.248:8080/Eshq/api/";

export const googlePlaceApiKey = "1235";
export const googlePlaceApiKeyNew = "AIzaSyB_8wPjKrkPn1J0yU-FnIw4UDh7GXgvPC8";

export const spotifyBaseUrl = "https://accounts.spotify.com/";
export const spotifyClientId = "bf8deee66f2d444cb76ce00ddccb5113";
export const spotifyClientSecret = "4a2b660a7c554520bf60beb39cbaacfe";
export const spotifyRedirectUrl = "com.eshq.application://returnAfterLogin";

export const spotifyTopFetch = "https://api.spotify.com/v1/me/top/tracks";

export const instagramClientId = "1008885956526742";
export const instagramClientSecret = "0a6b1f97d4ee35a52837c111ee886775";

export const Api = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const API_VERSION = "v3";
export const API_VERSION_V1 = "v1";

export const LIKE = "LIKE";
export const DISLIKE = "DISLIKE";
export const IMAGE = "IMAGE";
export const AUDIO = "AUDIO";
export const TEXT = "TEXT";

export const ApiConstants = {
  registerNumber: `${API_VERSION}/registerNumber`,
  registerVerification: `${API_VERSION}/registerNumber/verification`,
  termsOfService: `${API_VERSION}/term_of_service`,
  privacyPolicy: `${API_VERSION}/privacy_policy`,
  register: `${API_VERSION}/register/`,
  login: `${API_VERSION}/login/`,

  newBasicProfile: `${API_VERSION}/user/basicDetail`,
  newProfileUpdate: `${API_VERSION}/user/profileUpdate`,
  updateNumber: `${API_VERSION}/updateNumber/`,
  mobileVerification: `${API_VERSION}/updateNumber/verification`,
  editProfile: `${API_VERSION}/user/profile`,
  getProfile: `${API_VERSION}/user/profile`,
  chooseMode: `${API_VERSION}/user/mode`,
  updateMode: `${API_VERSION}/user/update/mode`,
  uploadImage: `${API_VERSION}/uploadImage`,
  deleteMedia: `${API_VERSION}/user/delete/media`,
  filters: `${API_VERSION}/user/filter`,
  logout: `${API_VERSION}/user/logout`,
  deleteAccount: `v1/user/delete/`,
  //Questions and answers
  getQuestions: `${API_VERSION}/questions/`,
  answers: `${API_VERSION}/answers`,
  deleteAnswer: `${API_VERSION}/answers/`,

  boardData: `${API_VERSION}/user/boardData/`,

  likeDislike: `v1/user/like`,
  answerLike: "v1/user/AnswerLike/",
  mediaLike: "v1/user/MediaLike/",
  flagApi: "v1/user/country/",
  matchedUser: `${API_VERSION_V1}/user/matched/`,
  uploadMedia: `${API_VERSION_V1}/uploadMedia`,
  likeChatData: `${API_VERSION_V1}/user/chatLike/`,
  chatInitiate: `${API_VERSION_V1}/user/chatInitiate`,
  userMessages: `${API_VERSION_V1}/user/chat?senderId=`,
  receivedStatusUpdate: `${API_VERSION}/user/messageStatus/`,
  readStatusUpdate: `${API_VERSION}/user/messageStatus/`,
  deviceToken: `${API_VERSION_V1}/update/deviceToken`,
  updateLocation: `${API_VERSION_V1}/update/location`,
  spotifyAuthToken: `api/token`,
};

export const Profile_Status = {
  mobilePending: "MOBILE_PENDING",
  selfiePending: "SELFIE_PENDING",
  promptsPending: "PROMPTS_PENDING",
  profileApprovalPending: "PROFILE_APPROVAL_PENDING",
  enterMood: "DATING_MODE",
  genderPending: "GENDER_PENDING",
  profile: "PROFILE",
  profilePending: "PROFILE_PENDING",
  approved: "APPROVED",
  blocked: "BLOCKED",
  rejected: "REJECTED",
  unknown: "unknown",
  basicDetailPending: "BASIC_DETAIL_PENDING",
  profilePicPending: "PROFILE_PIC_PENDING",
};

export const apiendpoints = {

    // landing-page
    getTopLandingAgent: "/user-api/landingPage/topAgents",
    getTopLandingReview: "/user-api/landingPage/topReviews",

    // User-auth
    userRegister: "/user-api/auth/register",
    userOtpVerification: "/user-api/auth/otpVerification",
    userCreateProfile: "/user-api/auth/complateProfile",
    userSignIn: "/user-api/auth/signIn",
    userForgetPass: "/user-api/auth/forgetPassword",
    userReSendOtp: "/user-api/auth/resendOtp",
    userChangePass: "/user-api/auth/changePassword",

    // Agent-auth
    agentRegister: "/agent-api/auth/register",
    agentOtpVerification: "/agent-api/auth/otpVerification",
    agentCreateProfile: "/agent-api/auth/complateProfile",
    agentSignIn: "/agent-api/auth/signIn",
    agentForgetPass: "/agent-api/auth/forgetPassword",
    agentReSendOtp: "/agent-api/auth/resendOtp",
    agentChangePass: "/agent-api/auth/changePassword",
    agentWorkProfile: "/agent-api/auth/workProfile",

    // user-list
    getTopAgentList: "/user-api/list/topAgents",
    getAllAgentList: "/user-api/list/agentsList",
    getAgentDetail: "/user-api/list/agentDetail/:id",
    getTopReview: "/user-api/list/topReviews",
    getAgentReview: "/user-api/list/agentReview/:id",
    getRelatedAgent: "user-api/list/relatedAgent?country=:country",
    postAgentReview: "/user-api/review",


    // user-account
    userGetProfile: "/user-api/auth/userDetail",
    userEditProfile: "/user-api/auth/editProfile",
    getMyReview: '/user-api/list/reviewList',

    // agent-list
    getAgentTopReview: "/agent-api/list/topReviews",

    // agent-account
    agentGetProfile: "/agent-api/auth/agentDetail",
    agentEditProfile: "/agent-api/auth/editProfile",
    getMyAgentReview: '/agent-api/list/reviewList',

    // contact-us 
    postUserContactus: "/user-api/helpNsupport/add",
    postAgentContactus: "/agent-api/helpNsupport/add",
}
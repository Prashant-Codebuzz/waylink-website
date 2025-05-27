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

    // user-account
    getMyReview: '/user-api/list/reviewList',
    userEditProfile: "/user-api/auth/editProfile",

    // agent-list
    getAgentTopReview: "/agent-api/list/topReviews",

    // agent-account
    getMyAgentReview: '/agent-api/list/reviewList',
    agentEditProfile: "/agent-api/auth/editProfile",

    // contact-us 
    getContactus: "/user-api/helpNsupport/add",
}
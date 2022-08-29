"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 8274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D4": () => (/* binding */ setCurrentPage),
/* harmony export */   "Fn": () => (/* binding */ setActivePartner),
/* harmony export */   "K4": () => (/* binding */ setLoading),
/* harmony export */   "Of": () => (/* binding */ addPartner),
/* harmony export */   "SL": () => (/* binding */ setOpenForm),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aU": () => (/* binding */ sortByActive),
/* harmony export */   "fC": () => (/* binding */ sortByInactive),
/* harmony export */   "kE": () => (/* binding */ setCompanyNamesOptions),
/* harmony export */   "u4": () => (/* binding */ showAllPartners)
/* harmony export */ });
/* unused harmony exports partnersSlice, setPartnersPerPage, filterPartners */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7407);


const initialState = {
    activePartner: {},
    activedSort: false,
    companyNamesOptions: [],
    currentPage: 1,
    error: false,
    isLoading: true,
    namedSort: false,
    openForm: false,
    partners: [],
    sortedPartners: [],
    partnersPerPage: 10
};
const partnersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "partners",
    initialState,
    reducers: {
        setLoading: (state, action)=>{
            state.isLoading = action.payload;
        },
        addPartner: (state, action)=>{
            const { client_id , partner_id , partner_name , partner_emails , active , partner_report_types , partner_report_time  } = action.payload;
            const partner = state.partners.find((item)=>item.partnerId === partner_id);
            const partnerSorted = state.sortedPartners.find((item)=>item.partnerId === partner_id);
            if (partner) {
                partner.active = active;
                partner.clientId = client_id;
                partner.email = partner_emails;
                partner.partnerId = partner_id;
                partner.partnerName = partner_name;
                partner.reportName = partner_report_types, partner.reportTime = partner_report_time;
                partnerSorted.active = active;
                partnerSorted.clientId = client_id;
                partnerSorted.email = partner_emails;
                partnerSorted.partnerId = partner_id;
                partnerSorted.partnerName = partner_name;
                partnerSorted.reportName = partner_report_types, partnerSorted.reportTime = partner_report_time;
            } else {
                const { partner_emails: partner_emails1 , partner_name: partner_name1 , partner_report_time: partner_report_time1 , partner_report_types: partner_report_types1 , partner_active , partner_id: partner_id1 , client_id: client_id1  } = action.payload;
                const finalParter = {
                    clientId: client_id1,
                    active: partner_active,
                    email: partner_emails1,
                    partnerId: partner_id1,
                    partnerName: partner_name1,
                    reportTime: partner_report_time1,
                    reportName: partner_report_types1
                };
                state.partners.push(finalParter);
                state.sortedPartners.unshift(finalParter);
            }
        },
        setActivePartner: (state, action)=>{
            state.activePartner = action.payload ? action.payload : null;
        },
        setOpenForm: (state, action)=>{
            state.openForm = action.payload;
        },
        setPartnersPerPage: (state, action)=>{
            state.partnersPerPage = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload;
        },
        showAllPartners: (state)=>{
            state.sortedPartners = [
                ...state.partners
            ].reverse();
        },
        sortByActive: (state)=>{
            state.sortedPartners = [
                ...state.partners
            ].reverse().filter((partner)=>partner.active === 1);
        },
        sortByInactive: (state)=>{
            state.sortedPartners = [
                ...state.partners
            ].reverse().filter((partner)=>partner.active === 0);
        },
        setCompanyNamesOptions: (state, action)=>{
            state.companyNamesOptions = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_thunks__WEBPACK_IMPORTED_MODULE_1__/* .getPartners.pending */ .F0.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_thunks__WEBPACK_IMPORTED_MODULE_1__/* .getPartners.fulfilled */ .F0.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.partners = action.payload.map((partner)=>{
                return {
                    id: partner.id,
                    clientId: partner.client_id,
                    partnerId: partner.partner_id,
                    partnerName: partner.partner_name,
                    email: partner.partner_emails,
                    active: partner.partner_active,
                    reportTime: partner.partner_report_time,
                    reportName: partner.partner_report_types
                };
            });
            state.sortedPartners = [
                ...state.partners
            ].reverse().filter((partner)=>partner.active === 1);
        }).addCase(_thunks__WEBPACK_IMPORTED_MODULE_1__/* .getPartners.rejected */ .F0.rejected, (state)=>{
            state.isLoading = false;
            state.error = true;
        });
    }
});
const { setLoading , addPartner , setPartnersPerPage , setCurrentPage , setActivePartner , filterPartners , setOpenForm , showAllPartners , sortByActive , sortByInactive , setCompanyNamesOptions  } = partnersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partnersSlice.reducer);


/***/ }),

/***/ 7407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fr": () => (/* binding */ addNewPartner),
  "Jq": () => (/* binding */ editCurrentPartner),
  "Al": () => (/* binding */ getCompanysName),
  "F0": () => (/* binding */ getPartners)
});

// UNUSED EXPORTS: addPartnerEmail, deletePartnerEmail, editPartnerEmail, editReportTypes, getActivePartners, getEmails, getInactivePartners, getOnePartner, getPartnerEmail, getReportTypes

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/shared/helpers/fetch.js
const baseURL = "http://172.24.32.132/Xcelerator/prpserver";
const fetch_fetchPartnerQuery = (endpoint, method = "GET")=>{
    const url = `${baseURL}/${endpoint}`;
    return fetch(url, {
        method
    });
};
const fetchPartner = (endpoint, headers = {
    "Content-type": "application/json"
}, data, method = "GET")=>{
    const url = `${baseURL}/${endpoint}`;
    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(data)
    });
};

// EXTERNAL MODULE: ./src/store/partners/partnersSlice.js
var partnersSlice = __webpack_require__(8274);
;// CONCATENATED MODULE: ./src/store/partners/thunks.js



/* GET PARTNER EMAIL */ const getPartnerEmail = async (partnerId)=>{
    const response = await fetchPartnerQuery(`getpartneremails?partnerID=${partnerId}`);
    const body = await response.json();
    const { data  } = body;
    return data;
};
/* ADD PARTNER EMAIL */ const addPartnerEmail = async (data)=>{
    const response = await fetchPartner("add-partner-email", undefined, data, "POST");
    const body = await response.json();
    return body;
};
/* EDIT PARTNER EMAIL */ const editPartnerEmail = async (data)=>{
    const response = await fetchPartner("update-partner-email", undefined, data, "PUT");
    const body = await response.json();
    return body;
};
/* REMOVE PARTNER EMAIL */ const deletePartnerEmail = async (emailId)=>{
    const response = await fetch_fetchPartnerQuery(`remove-partner-email?emailId=${emailId}`, "PUT");
    const body = await response.json();
    return body;
};
/* GET ALL THE PARTNER EMAILS */ const getEmails = async ()=>{
    const response = await fetchPartnerQuery("getemails");
    const body = await response.json();
    return body;
};
/* GET ALL THE PARTNERS */ const getPartners = (0,toolkit_.createAsyncThunk)("partners/getPartners", async ()=>{
    const response = await fetch_fetchPartnerQuery("partners");
    const { data  } = await response.json();
    return data;
});
/* GET A SPECIFIC PARTNER */ const getOnePartner = async (partnerId)=>{
    const response = await fetch_fetchPartnerQuery(`partner?partner_id=${partnerId}`);
    const body = await response.json();
    return body;
};
/* GET ALL ACTIVE PARTNER */ const getActivePartners = async ()=>{
    const response = await fetchPartnerQuery("active-partners");
    const body = await response.json();
    return body;
};
/* GET ALL INACTIVE PARTNER */ const getInactivePartners = async ()=>{
    const response = await fetchPartnerQuery("inactive-partners");
    const body = await response.json();
    return body;
};
/* GET REPORT TYPES */ const getReportTypes = async ()=>{
    const response = await fetchPartnerQuery("report-types");
    const body = await response.json();
    return body;
};
/* GET COMPANY NAME LIST */ const getCompanysName = (0,toolkit_.createAsyncThunk)("partners/getCompanysName", async (name, { dispatch  })=>{
    dispatch((0,partnersSlice/* setLoading */.K4)(true));
    const url = `https://http://172.24.32.132/Xcelerator/prpserver/api/report/GetCompanyName?Name=${name}`;
    const response = await fetch(url);
    const { result  } = await response.json();
    dispatch((0,partnersSlice/* setLoading */.K4)(false));
    dispatch((0,partnersSlice/* setCompanyNamesOptions */.kE)(result));
});
/* EDIT REPORT TYPES */ const editReportTypes = async (data)=>{
    const response = await fetchPartner("update-partner-report-type", undefined, data, "PUT");
    const body = await response.json();
    return body;
};
/* ADD A PARTNER */ const addNewPartner = (0,toolkit_.createAsyncThunk)("partners/addNewPartner", async (partnerToAdd, { dispatch  })=>{
    const { partner_emails , ...data } = partnerToAdd;
    const response = await fetchPartner("create-partner", undefined, {
        ...data,
        partner_emails: partner_emails[0].partner_email
    }, "POST");
    const body = await response.json();
    if (body.success) {
        await partner_emails.forEach((email, index)=>!!email && index > 0 && addPartnerEmail({
                partner_id: body.data[0].partner_id,
                partner_email: email.partner_email
            }));
        const partner = await getOnePartner(body.data[0].partner_id);
        dispatch((0,partnersSlice/* addPartner */.Of)(partner.data[0]));
        return true;
    } else {
        return false;
    }
});
/* EDIT A PARTNER */ const editCurrentPartner = (0,toolkit_.createAsyncThunk)("partners/editCurrentPartner", async ({ partnerToEdit , deletedEmails  }, { dispatch  })=>{
    const { partner_report_types , partner_emails , ...data } = partnerToEdit;
    const finalReports = partner_report_types.filter((report)=>report.active !== "undefined");
    const response = await fetchPartner("update-partner", undefined, data, "PUT");
    const body = await response.json();
    if (body.success) {
        await partner_emails.forEach((email)=>!!email.partner_email_id ? editPartnerEmail({
                partner_id: email.partner_id,
                partner_email_id: email.partner_email_id,
                email: email.partner_email,
                active: email.active
            }) : addPartnerEmail({
                partner_id: body.data[0].partner_id,
                partner_email: email.partner_email
            }));
        await finalReports.forEach((typeReport)=>editReportTypes({
                partner_id: partnerToEdit.partner_id,
                report_type_id: typeReport.report_type_id,
                active: typeReport.active
            }));
        await deletedEmails.forEach((email)=>deletePartnerEmail(email.partner_email_id));
        dispatch((0,partnersSlice/* addPartner */.Of)(partnerToEdit));
        return true;
    } else {
        return false;
    }
});


/***/ }),

/***/ 9778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sl": () => (/* binding */ showSidebar),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mu": () => (/* binding */ hideSidebar)
/* harmony export */ });
/* unused harmony export sidebarSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isOpen: false
};
const sidebarSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "sidebar",
    initialState,
    reducers: {
        showSidebar: (state)=>{
            state.isOpen = true;
        },
        hideSidebar: (state)=>{
            state.isOpen = false;
        }
    }
});
const { showSidebar , hideSidebar  } = sidebarSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarSlice.reducer);


/***/ }),

/***/ 7245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getStore)
/* harmony export */ });
/* unused harmony export store */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_sidebarSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9778);
/* harmony import */ var _partners_partnersSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8274);



let store = null;
function getStore(incomingPreloadState) {
    store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer: {
            sidebar: _sidebar_sidebarSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
            partners: _partners_partnersSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
        },
        preloadedState: incomingPreloadState
    });
    return store;
};
;


/***/ })

};
;
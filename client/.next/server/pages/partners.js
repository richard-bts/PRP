"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ FilterByStatusButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const options = [
    {
        key: 1,
        name: "Active"
    },
    {
        key: 2,
        name: "Inactive"
    },
    {
        key: 3,
        name: "All"
    }, 
];
const FilterByStatusButton = ()=>{
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options[0]);
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .TL)();
    const handleChange = (option)=>{
        setSelected(option);
        if (option.key !== selected.key) {
            if (option.key === 1) {
                dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__/* .sortByActive */ .aU)());
            } else if (option.key === 2) {
                dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__/* .sortByInactive */ .fC)());
            } else {
                dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__/* .showAllPartners */ .u4)());
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "search_bar filter__button",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
            value: selected,
            onChange: handleChange,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative h-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                        className: "relative w-full h-full py-2 pl-3 text-lg text-left cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block h-full leading-8 table_text-black raleway-m",
                                children: selected.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inset-y-0 flex items-center pointer-events-none right-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                                    className: "w-5 h-5 ml-2 text-black"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                            className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                            children: options.map((option, personIdx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                                    className: ({ active  })=>`relative cursor-default select-none py-2 pl-8 pr-4 h-12 leading-8 ${active ? "bg-slate-100" : "text-gray-900"}`,
                                    value: option,
                                    children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                    children: option.name
                                                }),
                                                selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "absolute inset-y-0 left-0 flex items-center pl-2 text-black",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {
                                                        className: "w-5 h-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null
                                            ]
                                        })
                                }, personIdx))
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7245);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3303);
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2482);
/* harmony import */ var _shared_hooks_useFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4206);
/* harmony import */ var _store_partners_thunks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7407);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2281);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5996);
/* harmony import */ var _components_partners_FilterByStatusButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_partners__WEBPACK_IMPORTED_MODULE_4__, _shared_components__WEBPACK_IMPORTED_MODULE_8__, _components_partners_FilterByStatusButton__WEBPACK_IMPORTED_MODULE_9__]);
([_components_partners__WEBPACK_IMPORTED_MODULE_4__, _shared_components__WEBPACK_IMPORTED_MODULE_8__, _components_partners_FilterByStatusButton__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Partners = ()=>{
    const { currentPage , searchText , setSearchText , partnersLength , currentPartners , handleSearch , handleChangePage , partnersPerPage  } = (0,_shared_hooks_useFilter__WEBPACK_IMPORTED_MODULE_5__/* .useFilter */ .L)();
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const handleCloseForm = ()=>{
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_7__/* .setOpenForm */ .SL)(false));
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_7__/* .setActivePartner */ .Fn)({}));
    };
    const handleEditPartner = (partner)=>{
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_7__/* .setActivePartner */ .Fn)(partner));
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_7__/* .setOpenForm */ .SL)(true));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components__WEBPACK_IMPORTED_MODULE_8__/* .Layout */ .Ar, {
        headTitle: "Partners",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "relative flex flex-col items-center justify-between gap-6 px-5 mt-10 mb-10 xl:mt-24 lg:flex-row md:px-0 md:mb-10 filter_bar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components__WEBPACK_IMPORTED_MODULE_8__/* .PageTitle */ .V1, {
                        title: "Partners List"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col w-full gap-4 md:w-auto md:flex-row md:justify-evenly md:gap-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partners__WEBPACK_IMPORTED_MODULE_4__/* .SearchBar */ .E, {
                                handleSearch: handleSearch,
                                setSearchText: setSearchText,
                                searchText: searchText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partners_FilterByStatusButton__WEBPACK_IMPORTED_MODULE_9__/* .FilterByStatusButton */ .w, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components__WEBPACK_IMPORTED_MODULE_8__/* .ButtonIcon */ .Ei, {
                                btnLabel: "Add New Partner",
                                labelStyles: "hidden xl:inline-block text-lg raleway-b",
                                btnColors: "primary-blue hover:opacity-90 transition duration-300 ease-in-out",
                                btnStyles: "rounded-full xl:rounded-lg xl:static xl:bottom-0 xl:right-0 fixed bottom-4 right-4 w-14 xl:h-auto xl:w-auto",
                                onClick: ()=>dispatch((0,_store__WEBPACK_IMPORTED_MODULE_7__/* .setOpenForm */ .SL)(true)),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.PlusSmIcon, {
                                    className: "text-white w-7 h-7 md:w-6 md:h-6 xl:hidden"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "mb-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components__WEBPACK_IMPORTED_MODULE_8__/* .Table */ .iA, {
                        tableStyles: "w-full table-auto min-w-full max-w-fit",
                        theadItems: _shared_data__WEBPACK_IMPORTED_MODULE_3__/* .tableHeadPartners */ .Fh,
                        theadTrGridStyles: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-evenly 2xl:grid-cols-[183px_270px_100px_487px_88px] items-center",
                        tbodyItems: currentPartners,
                        tbodyTrGridStyles: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-evenly 2xl:grid-cols-[183px_270px_100px_487px_88px]",
                        handleCloseForm: handleCloseForm,
                        handleEditPartner: handleEditPartner
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components__WEBPACK_IMPORTED_MODULE_8__/* .Pagination */ .tl, {
                        partnersPerPage: partnersPerPage,
                        totalPartners: partnersLength,
                        handleChangePage: handleChangePage,
                        currentPage: currentPage
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    const store = (0,_store_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    await store.dispatch((0,_store_partners_thunks__WEBPACK_IMPORTED_MODULE_6__/* .getPartners */ .F0)());
    return {
        props: {
            initialState: store.getState()
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partners);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2281);


const useFilter = ()=>{
    const { sortedPartners , partnersPerPage , currentPage , partners  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .CG)((state)=>state.partners);
    const finalPartners = sortedPartners.map((partner)=>{
        const deleteRepetedReports = partner?.reportName.filter((obj, index, self)=>self.findIndex((t)=>t?.report_name === obj?.report_name) === index);
        return {
            ...partner,
            email: partner.email,
            reportName: deleteRepetedReports.filter((report)=>!!report.active)
        };
    });
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .TL)();
    const { 0: partnerFiltered , 1: setPartnerFiltered  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const partnersLength = partnerFiltered.length || finalPartners.length;
    const myPartners = partnerFiltered && searchText.length ? partnerFiltered : finalPartners;
    // Get current partners.
    const indexOfLastPost = currentPage * partnersPerPage;
    const indexOfFirstPost = indexOfLastPost - partnersPerPage;
    const currentPartners = myPartners.slice(indexOfFirstPost, indexOfLastPost);
    const handleChangePage = (number)=>{
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentPage */ .D4)(number));
    };
    const handleSearch = (value)=>{
        setSearchText(value);
        setPartnerFiltered(()=>{
            return finalPartners.filter((partner)=>{
                return partner.partnerName.toLowerCase().includes(value.toLowerCase()) /*|| partner.email.toLowerCase().includes(value.toLowerCase())*/ ;
            });
        });
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentPage */ .D4)(1));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handleSearch(searchText);
    }, [
        sortedPartners,
        partners
    ]);
    return {
        currentPage,
        searchText,
        partnerFiltered,
        setCurrentPage: _store__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentPage */ .D4,
        setSearchText,
        setPartnerFiltered,
        currentPartners,
        partnersLength,
        handleChangePage,
        handleSearch,
        partnersPerPage
    };
};


/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9198:
/***/ ((module) => {

module.exports = require("react-datetime-picker/dist/entry.nostyle");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,245,996], () => (__webpack_exec__(827)));
module.exports = __webpack_exports__;

})();
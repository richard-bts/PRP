"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 8359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const ButtonComponent = ({ handleClick , buttonText , isPrimary  })=>{
    if (isPrimary) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            className: "inline-flex items-center justify-center h-full px-4 py-2 text-sm font-medium text-white transition duration-300 border border-transparent rounded-md button__component button__component-primary focus:outline-none focus-visible:ring-2",
            onClick: handleClick,
            children: buttonText
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            className: "inline-flex items-center justify-center h-full px-4 py-2 text-sm font-medium transition duration-300 border border-transparent rounded-md button__component button__component-second focus:outline-none focus-visible:ring-2",
            onClick: handleClick,
            children: buttonText
        });
    }
};
ButtonComponent.propTypes = {
    handleClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    buttonText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    isPrimary: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};


/***/ }),

/***/ 7851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8397);
/* harmony import */ var _SwitchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5291);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6591);
/* harmony import */ var _FormConfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6460);
/* harmony import */ var _FormInputEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(126);
/* harmony import */ var _shared_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2527);
/* harmony import */ var _FormInputError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2724);
/* harmony import */ var _ButtonComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8359);
/* harmony import */ var _ReportTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SwitchForm__WEBPACK_IMPORTED_MODULE_4__, _FormInput__WEBPACK_IMPORTED_MODULE_6__, _FormConfirm__WEBPACK_IMPORTED_MODULE_7__]);
([_SwitchForm__WEBPACK_IMPORTED_MODULE_4__, _FormInput__WEBPACK_IMPORTED_MODULE_6__, _FormConfirm__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Form = ({ handleCloseForm  })=>{
    const { name , email , handleTypeReport , handleFormChange , handleSubmitForm , handleAddEmail , handleSaveEmail , isActivePartner , setIsActivePartner , errorForm , isValidData , reportName , setErrorForm , handleRemoveEmail , handleChangeDateTime , reportDate  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .c)(handleCloseForm);
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const submitForm = (e)=>{
        e.preventDefault();
        if (errorForm.email.error || errorForm.partnerName.error) return;
        setIsOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed top-0 left-0 z-40 flex flex-row flex-wrap min-h-screen bg-slate-200/50 md:p-12 w-100vw",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "absolute w-11/12 p-5 m-0 overflow-y-auto bg-white form md:w-3/5 h-max top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 partner-form",
                    onSubmit: (e)=>submitForm(e),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-center uppercase raleway-b",
                            children: "Partners Data"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInput__WEBPACK_IMPORTED_MODULE_6__/* .FormInput */ .y, {
                            value: name,
                            placeholder: "Clients name",
                            handleFormChange: handleFormChange,
                            errorMessage: errorForm.partnerName.errorMessage,
                            error: errorForm.partnerName.error
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col pt-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "pl-4 text-sm text-gray-700 first-letter:uppercase",
                                            children: "Recipient Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_9__/* .ButtonIcon */ .E, {
                                            btnLabel: "Add New Email",
                                            btnStyles: "rounded w-full btn__add-email justify-center px-2",
                                            labelStyles: "btn__add-email-label",
                                            onClick: handleAddEmail,
                                            btnDefaultSpacing: "px-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.PlusSmIcon, {
                                                className: "w-4 btn__add-email-icon"
                                            })
                                        })
                                    ]
                                }),
                                email.length > 0 && email.map(({ partner_email , partner_email_id  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInputEmail__WEBPACK_IMPORTED_MODULE_8__/* .FormInputEmail */ .u, {
                                        index: index,
                                        inputValue: partner_email,
                                        emailId: partner_email_id,
                                        setErrorForm: setErrorForm,
                                        handleSaveEmail: handleSaveEmail,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components_ButtonIcon__WEBPACK_IMPORTED_MODULE_9__/* .ButtonIcon */ .E, {
                                            labelStyles: "hidden",
                                            btnStyles: "rounded-lg h-8 w-8 justify-self-end btn__remove-email justify-center",
                                            btnColors: "bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-600",
                                            buttonSpacing: "p-1",
                                            onClick: ()=>handleRemoveEmail(index),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.XIcon, {
                                                className: "w-4 h-4 text-white"
                                            })
                                        })
                                    }, `${partner_email}+${index}`)),
                                errorForm.email.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInputError__WEBPACK_IMPORTED_MODULE_10__/* .FormInputError */ .a, {
                                    errorMessage: errorForm.email.errorMessage,
                                    error: errorForm.email.error
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between gap-3 pt-4 partner__form-switch",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "pl-4 text-sm text-gray-700",
                                    children: "Active"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwitchForm__WEBPACK_IMPORTED_MODULE_4__/* .SwitchForm */ .D, {
                                    switchEnabled: !!isActivePartner,
                                    setSwitchEnabled: setIsActivePartner
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col pt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "pb-2 pl-4 text-sm text-gray-700",
                                    children: "Partner Report Types"
                                }),
                                reportName.map(({ report_name , active  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwitchForm__WEBPACK_IMPORTED_MODULE_4__/* .SwitchForm */ .D, {
                                        switchEnabled: !!active,
                                        typeReport: report_name,
                                        isTypeReport: true,
                                        handleTypeReport: handleTypeReport
                                    }, `${report_name}-${index}`))
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col pt-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "pb-2 pl-4 text-sm text-gray-700",
                                    children: "Report Execution Time"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportTime__WEBPACK_IMPORTED_MODULE_12__/* .ReportTime */ .l, {
                                    handleChangeDateTime: handleChangeDateTime,
                                    reportDate: reportDate
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid justify-start gap-4 form_buttons-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `${isValidData ? "button__component-primary" : "button__component-primary-default cursor-default"} rounded p-3 text-white transition-colors duration-300 raleway-b text-lg`,
                                    type: "submit",
                                    children: "Save"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonComponent__WEBPACK_IMPORTED_MODULE_11__/* .ButtonComponent */ .r, {
                                    buttonText: "Cancel",
                                    handleClick: handleCloseForm
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormConfirm__WEBPACK_IMPORTED_MODULE_7__/* .FormConfirm */ .d, {
                setIsOpen: setIsOpen,
                isOpen: isOpen,
                handleSubmitForm: handleSubmitForm,
                handleCloseForm: handleCloseForm,
                name: name
            })
        ]
    });
};
Form.propTypes = {
    handleCloseForm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ FormConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _ButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FormConfirm = ({ isOpen , setIsOpen , handleSubmitForm , handleCloseForm , name , errorForm  })=>{
    function closeModal() {
        setIsOpen(false);
    }
    const onSubmitForm = ()=>{
        closeModal();
        handleSubmitForm();
        handleCloseForm(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
            appear: true,
            show: isOpen,
            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                as: "div",
                className: "relative z-50",
                onClose: closeModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fixed inset-0 bg-black bg-opacity-25"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 overflow-y-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-center min-h-full p-4 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
                                    className: "w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
                                            as: "h3",
                                            className: "text-lg font-medium leading-6 text-gray-900",
                                            children: [
                                                name,
                                                "'s data"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Do you want to save the changes of this partner?"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-2 mt-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__/* .ButtonComponent */ .r, {
                                                    handleClick: onSubmitForm,
                                                    buttonText: "Save data",
                                                    isPrimary: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__/* .ButtonComponent */ .r, {
                                                    handleClick: closeModal,
                                                    buttonText: "Cancel"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
FormConfirm.propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    setIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    handleSubmitForm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    handleCloseForm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormInputError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2724);
/* harmony import */ var _store_partners_thunks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7407);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const FormInput = ({ value , placeholder , errorMessage , error , handleFormChange  })=>{
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const { isLoading , companyNamesOptions  } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .CG)((state)=>state.partners);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        companyName: value
    });
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const fetchCompanies = async ()=>{
        await dispatch((0,_store_partners_thunks__WEBPACK_IMPORTED_MODULE_6__/* .getCompanysName */ .Al)(query));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (query < 2) return;
        fetchCompanies();
    }, [
        query
    ]);
    const handleInputChange = (e)=>{
        setSelected(e);
        handleFormChange(e);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full top-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "pb-2 pl-4 text-sm text-gray-700 first-letter:uppercase",
                children: "Clients Name"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Combobox, {
                value: selected,
                onChange: (e)=>handleInputChange(e),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative z-50 mt-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative w-full overflow-hidden text-left cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Combobox.Input, {
                                className: "w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-none outline-none form__partner-input form_input focus:ring-0",
                                displayValue: (company)=>company.companyName,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: placeholder,
                                autoComplete: "off"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            leave: "transition ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            afterLeave: ()=>setQuery(""),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Combobox.Options, {
                                className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-200 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                                children: [
                                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-10 h-10 mx-auto my-3 border-2 border-indigo-500 border-dashed rounded-full animate-spin border-t-transparent"
                                    }),
                                    !isLoading && (!companyNamesOptions.length || query.length < 2) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative px-4 py-2 text-gray-700 cursor-default select-none",
                                        children: "Nothing found"
                                    }) : !isLoading && companyNamesOptions.map((company)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Combobox.Option, {
                                            className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-teal-600 text-white" : "text-gray-900"}`,
                                            value: company,
                                            children: ({ selected , active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                            children: company.companyName
                                                        }),
                                                        selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: `absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, {
                                                                className: "w-5 h-5",
                                                                "aria-hidden": "true"
                                                            })
                                                        }) : null
                                                    ]
                                                })
                                        }, company.clientID))
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInputError__WEBPACK_IMPORTED_MODULE_5__/* .FormInputError */ .a, {
                errorMessage: errorMessage,
                error: error
            })
        ]
    });
};
FormInput.propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    handleFormChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    errorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FormInputEmail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormInputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2724);




const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const FormInputEmail = ({ children , index , inputValue , setErrorForm , handleSaveEmail , emailId  })=>{
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(inputValue || "");
    const { 0: emailError , 1: setEmailError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        error: false,
        errorMessage: ""
    });
    const handleChange = (e)=>{
        const { value  } = e.target;
        setEmail(value);
        if (!e.target.value.match(regexEmail)) {
            setEmailError({
                error: true,
                errorMessage: "Email is not valid"
            });
        } else {
            setEmailError({
                error: false,
                errorMessage: ""
            });
        }
    };
    const handleEmailBlur = (e)=>{
        if (emailError.error) {
            setErrorForm((prev)=>({
                    ...prev,
                    email: {
                        error: true,
                        errorMessage: "All emails must be valid"
                    }
                }));
            return;
        } else {
            setErrorForm((prev)=>({
                    ...prev,
                    email: {
                        error: false,
                        errorMessage: ""
                    }
                }));
        }
        handleSaveEmail(e, index, emailId);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${index > 0 ? "pt-3" : ""} grid items-center email_container`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        className: "p-2 outline-none form_input form__partner-input",
                        placeholder: `Email ${index + 1}`,
                        name: email,
                        value: email,
                        onChange: (e)=>handleChange(e),
                        onBlur: handleEmailBlur,
                        autoComplete: "off"
                    }),
                    children && children
                ]
            }),
            emailError.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInputError__WEBPACK_IMPORTED_MODULE_3__/* .FormInputError */ .a, {
                errorMessage: emailError.errorMessage,
                error: emailError.error
            })
        ]
    });
};
FormInputEmail.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    handleSaveEmail: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    setErrorForm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    index: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    emailId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};


/***/ }),

/***/ 2724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ FormInputError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const FormInputError = ({ errorMessage , error  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `${error ? "opacity-100" : "opacity-0"} font-medium transition-opacity duration-300 mt-2 text-red-600 text-sm`,
        children: errorMessage
    });
};
FormInputError.propTypes = {
    errorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};


/***/ }),

/***/ 6453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ReportTime)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9198);
/* harmony import */ var react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2__);



let ComponentIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        d: "M0 17C0 18.7 1.3 20 3 20H17C18.7 20 20 18.7 20 17V9H0V17ZM17 2H15V1C15 0.4 14.6 0 14 0C13.4 0 13 0.4 13 1V2H7V1C7 0.4 6.6 0 6 0C5.4 0 5 0.4 5 1V2H3C1.3 2 0 3.3 0 5V7H20V5C20 3.3 18.7 2 17 2Z",
        fill: "black"
    })
});
const ReportTime = ({ reportDate , handleChangeDateTime  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datetime_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_2___default()), {
        onChange: handleChangeDateTime,
        value: reportDate,
        className: "text-sm form__partner-input form_input form_report-time",
        calendarIcon: ComponentIcon
    });
};
ReportTime.propTypes = {
    reportDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
    handleChangeDateTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};


/***/ }),

/***/ 9263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_components__WEBPACK_IMPORTED_MODULE_4__]);
_shared_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SearchBar = ({ searchText , handleSearch  })=>{
    const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleFocus = ()=>{
        searchInputRef.current.focus();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full md:w-96",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex items-stretch w-full input-group search_bar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "search",
                        className: "form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal bg-clip-padding transition ease-in-out m-0 focus:outline-none bg-transparent",
                        placeholder: "Search By Name",
                        "aria-label": "Search",
                        "aria-describedby": "button-addon2",
                        value: searchText,
                        onChange: (e)=>handleSearch(e.target.value),
                        ref: searchInputRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components__WEBPACK_IMPORTED_MODULE_4__/* .ButtonIcon */ .Ei, {
                        onClick: handleFocus,
                        btnColors: "bg-transparent",
                        btnStyles: "cursor-default",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
                            className: "w-5 h-5 text-black"
                        })
                    })
                ]
            })
        })
    });
};
SearchBar.propTypes = {
    searchText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    handleSearch: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SwitchForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SwitchForm = ({ switchEnabled , setSwitchEnabled , isTypeReport , typeReport , handleTypeReport  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between partner__form-switch",
        children: [
            isTypeReport && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "pl-4 text-sm text-center form_type-report",
                children: typeReport.replace("_", " ")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
                checked: switchEnabled,
                name: isTypeReport ? typeReport : "isActive",
                onChange: (e)=>isTypeReport ? handleTypeReport(!!e ? 1 : 0, typeReport) : setSwitchEnabled(!!e ? 1 : 0),
                className: `${switchEnabled ? "form__partner-switch-active" : "form__partner-switch-inactive"} relative inline-flex h-5 w-8 items-center rounded-full transition-colors duration-300 ${isTypeReport ? "my-2" : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: "Active Partner"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block transition-transform duration-300 transform bg-white rounded-full active__circle"
                    })
                ]
            })
        ]
    });
};
SwitchForm.propTypes = {
    switchEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    setSwitchEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    isTypeReport: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    typeReport: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    handleTypeReport: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ TableBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9074);




const trColorsDefault = "text-gray-600 bg-white";
const trStylesDefault = "text-sm leading-normal";
const TableBody = ({ tbodyItems , tbodyTrStyles , tbodyTrColors , tbodyTrGridStyles , handleEditPartner  })=>{
    const { currentPage  } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.partners);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
        children: [
            tbodyItems.map(({ id , clientId , partnerId , partnerName , email =[
                {
                    partner_email: ""
                }
            ] , active , reportName =[] , reportTime  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    className: `h-20 items-center lg:items-start pt-3 xl:pt-6 table-partner-item select-none ${tbodyTrStyles || trStylesDefault} ${tbodyTrColors || trColorsDefault} ${tbodyTrGridStyles || ""}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                            onDoubleClick: ()=>handleEditPartner({
                                    id,
                                    clientId,
                                    partnerId,
                                    partnerName,
                                    email,
                                    active,
                                    reportName
                                }),
                            className: "px-6 text-base text-left truncate cursor-pointer raleway-m max-h-16 table_text-black",
                            title: partnerName,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mr-5 table_text-black",
                                    children: currentPage > 1 ? (currentPage - 1) * 10 + (index + 1) : index + 1
                                }),
                                " ",
                                partnerName
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            onDoubleClick: ()=>handleEditPartner({
                                    id,
                                    clientId,
                                    partnerId,
                                    partnerName,
                                    email,
                                    active,
                                    reportName
                                }),
                            className: "hidden max-h-full px-6 text-left cursor-pointer lg:grid",
                            children: email?.map(({ partner_email  }, index)=>index < 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "h-5 mb-1 text-base truncate table_text-black",
                                    children: partner_email ?? ""
                                }, `${partner_email}+${index}`))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            onDoubleClick: ()=>handleEditPartner({
                                    id,
                                    clientId,
                                    partnerId,
                                    partnerName,
                                    email,
                                    active,
                                    reportName
                                }),
                            className: "hidden px-6 text-center cursor-pointer max-h-16 sm:block",
                            children: active ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block w-20 mx-auto text-base leading-8 text-center uppercase status active raleway-sb",
                                children: "Active"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "block mx-auto text-base leading-8 text-center uppercase status inactive raleway-sb",
                                children: "Inactive"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            onDoubleClick: ()=>handleEditPartner({
                                    id,
                                    clientId,
                                    partnerId,
                                    partnerName,
                                    email,
                                    active,
                                    reportName
                                }),
                            className: "relative justify-start hidden grid-flow-col gap-1 px-6 text-center cursor-pointer max-h-16 2xl:grid justify-items-center reports group",
                            children: reportName.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: reportName.map(({ report_name  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `text-base text-white px-1 2xl:px-3 py-1 uppercase rounded-full whitespace-nowrap table__report-type ${report_name?.toLowerCase()}`,
                                        children: report_name
                                    }, `${report_name}+${index}`))
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "No reports"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            className: "grid justify-center grid-flow-col gap-5 px-6 py-3 text-center max-h-16 justify-items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.PencilAltIcon, {
                                className: "w-6 h-6 text-gray-700 transition-colors duration-300 cursor-pointer hover:text-cyan-600",
                                title: "Edit",
                                onClick: ()=>handleEditPartner({
                                        id,
                                        clientId,
                                        partnerId,
                                        partnerName,
                                        email,
                                        active,
                                        reportName,
                                        reportTime
                                    })
                            })
                        })
                    ]
                }, `${partnerName}-${partnerId}`)),
            !tbodyItems.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                className: "h-20 border-b border-gray-200 md:h-20 table-partner-item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: "text-lg font-medium text-center text-gray-400 uppercase",
                    children: "NO PARTNERS TO SHOW"
                })
            })
        ]
    });
};
TableBody.propTypes = {
    tbodyItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
        partnerName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        email: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
        active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
        reportName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
    })).isRequired,
    tbodyTrStyles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    tbodyTrColors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    tbodyTrGridStyles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    handleEditPartner: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};


/***/ }),

/***/ 8397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* reexport */ useForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./src/shared/data/index.js + 4 modules
var data = __webpack_require__(3303);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
;// CONCATENATED MODULE: ./src/shared/helpers/alertPopup.js

const alertPopup = (title = "", icon = "success", position = "center", showConfirmButton = false, timer = 1500)=>{
    external_sweetalert2_default().fire({
        position,
        icon,
        title,
        showConfirmButton,
        timer
    });
};

// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__(2281);
// EXTERNAL MODULE: ./src/store/partners/thunks.js + 1 modules
var thunks = __webpack_require__(7407);
;// CONCATENATED MODULE: ./src/components/partners/hooks/useForm.js






const errorFormInitialState = {
    partnerName: {
        error: false,
        errorMessage: ""
    },
    email: {
        error: false,
        errorMessage: ""
    }
};
const initialTime = external_moment_default()();
const useForm = ()=>{
    const dispatch = (0,store/* useAppDispatch */.TL)();
    const { activePartner  } = (0,store/* useAppSelector */.CG)((state)=>state.partners);
    const { clientId , partnerId , partnerName , email , active , reportName , reportTime  } = activePartner || data/* initialPartnerState */.Ts;
    const { 0: isActivePartner , 1: setIsActivePartner  } = (0,external_react_.useState)(active || 0);
    const { 0: emailEdited , 1: setEmailEdited  } = (0,external_react_.useState)([]);
    const { 0: newEmail , 1: setNewEmail  } = (0,external_react_.useState)([]);
    const { 0: deletedEmails , 1: setDeletedEmails  } = (0,external_react_.useState)([]);
    const { 0: reportDate , 1: setReportDate  } = (0,external_react_.useState)(!!reportTime ? new Date(reportTime) : initialTime.toDate());
    const mergeReportObjects = data/* reportTypesTest.map */.Tr.map((report)=>{
        const reportObject = reportName?.find((item)=>item?.report_name === report?.report_name);
        return {
            ...report,
            active: !!reportObject?.active ? reportObject.active : 0
        };
    });
    const { 0: reportTypes , 1: setReportTypes  } = (0,external_react_.useState)([
        ...mergeReportObjects
    ]);
    const { 0: errorForm , 1: setErrorForm  } = (0,external_react_.useState)(errorFormInitialState);
    const { 0: formData , 1: setFormData  } = (0,external_react_.useState)({
        clientId: clientId || "",
        partnerId: partnerId || Math.floor(Math.random() * 1000000),
        partnerName: partnerName || "",
        email: !email?.length ? [
            {
                partner_id: partnerId,
                partner_email: ""
            }
        ] : [
            ...email
        ]
    });
    const isValidConditions = formData?.partnerName?.length !== 0;
    const { 0: isValidData , 1: setIsValidData  } = (0,external_react_.useState)(isValidConditions);
    const handleTypeReport = (value, typeName)=>{
        setReportTypes((prev)=>prev.map((item)=>{
                if (item.report_name === typeName) {
                    return {
                        ...item,
                        active: value
                    };
                }
                return item;
            }));
    };
    const handleChangeDateTime = (date)=>{
        // if (date <= initialTime) return;
        setReportDate(date);
    };
    const handleAddEmail = ()=>{
        setFormData({
            ...formData,
            email: [
                ...formData.email,
                {
                    partner_id: partnerId,
                    partner_email: ""
                }
            ]
        });
    };
    const handleRemoveEmail = (index)=>{
        setFormData({
            ...formData,
            email: formData.email.filter((_, i)=>i !== index)
        });
        setDeletedEmails((prev)=>{
            const emailId = formData.email[index].partner_email_id;
            if (emailId) {
                const findEmail = formData.email.find((email)=>email.partner_email_id === emailId);
                return [
                    ...prev,
                    findEmail
                ];
            } else {
                return prev;
            }
        });
    };
    const handleSaveEmail = (e, index, emailId)=>{
        const { value  } = e.target;
        const newValue = [
            ...formData.email
        ];
        newValue[index] = {
            ...newValue[index],
            partner_email: value
        };
        setFormData({
            ...formData,
            email: newValue
        });
        if (emailId) {
            const { partner_email , ...rest } = formData.email.find((item)=>item.partner_email_id === emailId);
            setEmailEdited([
                ...emailEdited,
                {
                    ...rest,
                    email: value
                }
            ]);
        } else {
            setNewEmail([
                ...newEmail,
                {
                    partner_id: partnerId,
                    partner_email: value
                }
            ]);
        }
    };
    const handleFormChange = (e)=>{
        const { companyName , clientID  } = e;
        if (!companyName.length) {
            setErrorForm({
                ...errorForm,
                partnerName: {
                    error: true,
                    errorMessage: "Company name is required"
                }
            });
            return;
        }
        const isValidConditions = companyName.length > 2;
        if (isValidConditions) {
            setIsValidData(true);
        } else {
            setIsValidData(false);
        }
        setErrorForm({
            ...errorForm,
            partnerName: {
                error: false,
                errorMessage: ""
            }
        });
        setFormData({
            ...formData,
            partnerName: companyName,
            clientId: clientID
        });
    };
    const handleSubmitForm = async ()=>{
        const { partnerId , partnerName , email , clientId  } = formData;
        if (!partnerName.length || partnerName.length < 3) {
            setErrorForm({
                ...errorForm,
                partnerName: {
                    error: true,
                    errorMessage: "Name must be at least 3 characters"
                }
            });
            return;
        }
        if (errorForm.email.error || errorForm.partnerName.error) {
            return;
        }
        setErrorForm(errorFormInitialState);
        const emailsNoEmpty = email.filter((item)=>item.partner_email.length > 0);
        let partner = {
            client_id: clientId,
            partner_id: partnerId,
            partner_emails: emailsNoEmpty,
            partner_name: partnerName,
            partner_report_types: [
                ...reportTypes
            ],
            partner_report_time: external_moment_default()(reportDate).format(),
            partner_active: isActivePartner
        };
        setFormData(data/* initialPartnerState */.Ts);
        if (activePartner.id) {
            const { partner_active , ...rest } = partner;
            const partnerToEdit = {
                ...rest,
                active: partner_active
            };
            const { payload  } = await dispatch((0,thunks/* editCurrentPartner */.Jq)({
                partnerToEdit,
                deletedEmails
            }));
            if (payload) {
                alertPopup("Partner data successfully saved");
            } else {
                alertPopup("Error saving partner data", "error");
            }
        } else {
            const { partner_id , active: partner_active1 , ...rest1 } = partner;
            const { payload: payload1  } = await dispatch((0,thunks/* addNewPartner */.fr)(rest1));
            if (payload1) {
                alertPopup("Partner data successfully saved");
            } else {
                alertPopup("Error saving partner data", "error");
            }
        }
        setIsActivePartner(0);
        dispatch((0,store/* setActivePartner */.Fn)({}));
    };
    return {
        name: formData.partnerName,
        email: formData.email,
        handleTypeReport,
        handleFormChange,
        handleSubmitForm,
        handleAddEmail,
        handleSaveEmail,
        isActivePartner,
        setIsActivePartner,
        reportName: reportTypes,
        setErrorForm,
        handleRemoveEmail,
        errorForm,
        isValidData,
        handleChangeDateTime,
        reportDate
    };
};

;// CONCATENATED MODULE: ./src/components/partners/hooks/index.js



/***/ }),

/***/ 2482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _SearchBar__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "R": () => (/* reexport safe */ _TableBody__WEBPACK_IMPORTED_MODULE_1__.R)
/* harmony export */ });
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9263);
/* harmony import */ var _TableBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchBar__WEBPACK_IMPORTED_MODULE_0__]);
_SearchBar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ActiveLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const ActiveLink = ({ label , href , stylesClass , navPath  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.pathname === navPath);
    const activeStyles = isActive ? "md:text-white raleway-eb cursor-default" : "nav_link-inactive";
    const handleClick = (event)=>{
        event.preventDefault();
        setIsActive(true);
        router.push(href);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setIsActive(router.pathname === navPath);
    }, [
        router.pathname
    ]);
    if (isActive) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: `${activeStyles} ${stylesClass}`,
            children: label
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            onClick: handleClick,
            className: `${activeStyles} ${stylesClass}`,
            children: label
        });
    }
};
ActiveLink.propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    stylesClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    navPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};


/***/ }),

/***/ 5433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BurgerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const BurgerIcon = ({ handleIsOpen , isOpen , genericHamburgerLine  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `fixed z-30 flex flex-col items-center justify-center w-12 h-12 shadow-md border-2 border-white transition-opacity duration-300 rounded group right-5 top-5 md:hidden hover:opacity-100 ${isOpen ? "" : "sidebar opacity-50"} `,
        onClick: handleIsOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 group-hover:opacity-100" : "group-hover:opacity-100 sidebar"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${genericHamburgerLine} ${isOpen ? "opacity-0" : "group-hover:opacity-100 sidebar"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 group-hover:opacity-100" : "group-hover:opacity-100 sidebar"}`
            })
        ]
    });
};
BurgerIcon.propTypes = {
    handleIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    genericHamburgerLine: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};


/***/ }),

/***/ 2527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ButtonIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const btnDefaultColors = "bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-600";
const labelDefaultColors = "text-white";
const btnDefaultStyles = "rounded-tr rounded-br";
const btnDefaultSpacing = "px-4 py-2.5";
const ButtonIcon = ({ children , onClick , btnColors , btnStyles , btnLabel , labelStyles , labelColors , buttonSpacing , iconOnRight  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `btn btn_icon focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out flex items-center ${btnStyles || btnDefaultStyles} ${btnColors || btnDefaultColors} ${buttonSpacing || btnDefaultSpacing}`,
        type: "button",
        id: "button-addon2",
        onClick: ()=>onClick(),
        children: [
            !iconOnRight && children,
            btnLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `font-medium tracking-wide ${labelColors || labelDefaultColors} ${labelStyles || ""}`,
                children: btnLabel
            }),
            iconOnRight && children
        ]
    });
};
ButtonIcon.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    btnColors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    btnStyles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    btnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    labelStyles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    labelColors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ 9614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ConfirmPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ConfirmPopup = ({ isOpen , setIsOpen , onClick , title , description , colorsPrimaryBoton , buttonTitle , showButton =true  })=>{
    const colorsBtn = colorsPrimaryBoton || "bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-600 text-white";
    function closeModal() {
        setIsOpen(false);
    }
    const handleClick = ()=>{
        closeModal();
        onClick();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
            appear: true,
            show: isOpen,
            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                as: "div",
                className: "relative z-50",
                onClose: closeModal,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fixed inset-0 bg-black bg-opacity-25"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 overflow-y-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center justify-center min-h-full p-4 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
                                    className: "w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
                                            as: "h3",
                                            className: "text-lg font-medium leading-6 text-gray-900",
                                            children: title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: description
                                            })
                                        }),
                                        showButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-2 mt-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: `${colorsBtn} inline-flex justify-center px-4 py-2 text-sm font-medium transition duration-300 border border-transparent rounded-md focus:outline-none focus-visible:ring-2`,
                                                    onClick: handleClick,
                                                    children: buttonTitle
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-600 transition duration-300 bg-white border border-transparent rounded-md hover:border-indigo-500 focus:border-indigo-500 active:border-indigo-500 focus:outline-none focus-visible:ring-2 ",
                                                    onClick: closeModal,
                                                    children: "Cancel"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
ConfirmPopup.propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
    setIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    colorsPrimaryBoton: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    buttonTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    showButton: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5996);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3303);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(router.pathname === _data__WEBPACK_IMPORTED_MODULE_5__/* .navLinks[0].navPath */ .FV[0].navPath);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setIsActive(router.pathname === _data__WEBPACK_IMPORTED_MODULE_5__/* .navLinks[0].navPath */ .FV[0].navPath);
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "sticky top-0 z-10 md:top-auto md:static md:z-auto header-tag primary-blue",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex items-center h-full min-w-full p-5 md:p-0 md:px-4",
            children: [
                isActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "flex items-center gap-3 cursor-default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        alt: "Last Mile Logo",
                        className: "w-16",
                        width: 106,
                        height: 50,
                        src: "/img/last_mile_logo.png",
                        title: "Last-Mile-Logo"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `${_data__WEBPACK_IMPORTED_MODULE_5__/* .navLinks[0].to */ .FV[0].to}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            alt: "Last Mile Logo",
                            className: "w-16",
                            width: 106,
                            height: 50,
                            src: "/img/last_mile_logo.png",
                            title: "Last-Mile-Logo"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Navbar */ .wp, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_3__]);
___WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({ children , headTitle  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .Sidebar */ .YE, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Partner Reporting Package - ${headTitle}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "CDL Last Mile partner reporting package"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: `${"/Xcelerator/CDLPRP"}/apple-touch-icon.png`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: `${"/Xcelerator/CDLPRP"}/favicon-32x32.png`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: `${"/Xcelerator/CDLPRP"}/favicon-16x16.png`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: `${"/Xcelerator/CDLPRP"}/site.webmanifest`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "mask-icon",
                        href: `${"/Xcelerator/CDLPRP"}/safari-pinned-tab.svg`,
                        color: "#5bbad5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#da532c"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h4, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container px-4",
                children: children
            })
        ]
    });
};
Layout.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
    headTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ Links)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__]);
___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Links = ({ navItems , classStyles  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: navItems.map(({ to , label , navPath  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                href: to,
                label: label,
                stylesClass: classStyles,
                navPath: navPath
            }, label))
    });
};
Links.propTypes = {
    navItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    })).isRequired
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5996);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Navbar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "relative hidden mx-auto md:block navbar",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Links */ .yX, {
            navItems: _data__WEBPACK_IMPORTED_MODULE_2__/* .navLinks */ .FV,
            classStyles: "px-4 transition duration-300 hover:text-white font-medium"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const PageTitle = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "text-xl font-bold table_text-black",
        children: title
    });
};
PageTitle.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};


/***/ }),

/***/ 1571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const Pagination = ({ partnersPerPage , totalPartners , handleChangePage , currentPage  })=>{
    const pageNumbers = [];
    const totalPages = Math.ceil(totalPartners / partnersPerPage);
    const prevAvailable = currentPage > 1;
    const nextAvailable = currentPage < totalPages;
    for(let i = 0; i < totalPages; i++){
        pageNumbers.push(i + 1);
    }
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid items-center justify-center mt-5 gap-y-5 md:grid-flow-col md:justify-between justify-items-center pagination",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "current-pagination",
                children: [
                    "Showing ",
                    currentPage * 10 > totalPartners ? totalPartners : currentPage * 10,
                    " of ",
                    totalPartners
                ]
            }),
            !nextAvailable && !prevAvailable ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-2 pagination_buttons",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "grid items-center grid-flow-col gap-1 px-4 py-2 text-base raleway-bl",
                        onClick: ()=>prevAvailable ? handleChangePage(currentPage - 1) : null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Previous"
                        })
                    }),
                    pageNumbers.map((number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `raleway-bl text-base w-6 h-6 leading-5 ${currentPage === number ? "current-page cursor-default bg-black text-white rounded-sm" : currentPage === number - 1 ? "bg-white next-page" : "bg-white"} ${number > currentPage + 2 || number < currentPage - 2 ? "hidden" : ""} pagination-item`,
                            onClick: ()=>handleChangePage(number),
                            children: number
                        }, number)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "grid items-center grid-flow-col gap-1 px-4 py-2 text-base raleway-bl",
                        onClick: ()=>nextAvailable ? handleChangePage(currentPage + 1) : null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Next"
                        })
                    })
                ]
            })
        ]
    });
};
Pagination.propTypes = {
    partnersPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    totalPartners: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    handleChangePage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    currentPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};


/***/ }),

/***/ 5200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5996);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3303);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Sidebar = ()=>{
    const { isOpen  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .CG)((state)=>state.sidebar);
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .TL)();
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
    const handleIsOpen = ()=>{
        isOpen ? dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__/* .hideSidebar */ .mu)()) : dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__/* .showSidebar */ .Sl)());
    };
    const handleCloseSidebar = ({ target  })=>{
        if (!target.classList.contains("sidebar")) {
            dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__/* .hideSidebar */ .mu)());
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `fixed z-30 w-screen h-screen md:hidden transition-colors duration-300 ${isOpen ? "bg-slate-200/50 ml-0" : "-ml-96"}`,
        onClick: handleCloseSidebar,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                className: `sidebar fixed top-0 left-0 z-20 flex flex-col w-60 h-full py-8 bg-white shadow-lg gap-7 transition-all duration-300 md:hidden ${isOpen ? "ml-0" : "-ml-96"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Links */ .yX, {
                    navItems: _data__WEBPACK_IMPORTED_MODULE_2__/* .navLinks */ .FV,
                    classStyles: "block h-10 text-xl leading-10 px-8 transition duration-300 hover:text-black sidebar"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .BurgerIcon */ .ZR, {
                handleIsOpen: handleIsOpen,
                isOpen: isOpen,
                genericHamburgerLine: genericHamburgerLine
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5996);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ConfirmPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9614);
/* harmony import */ var _components_partners_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7851);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2281);
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__, _ConfirmPopup__WEBPACK_IMPORTED_MODULE_4__, _components_partners_Form__WEBPACK_IMPORTED_MODULE_5__, _components_partners__WEBPACK_IMPORTED_MODULE_7__]);
([___WEBPACK_IMPORTED_MODULE_1__, _ConfirmPopup__WEBPACK_IMPORTED_MODULE_4__, _components_partners_Form__WEBPACK_IMPORTED_MODULE_5__, _components_partners__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Table = ({ theadItems , tbodyItems , theadTrGridStyles , theadTrColors , theadTrStyles , tbodyTrGridStyles , tbodyTrColors , tbodyTrStyles , tableStyles , handleCloseForm , handleEditPartner  })=>{
    const { openForm  } = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .CG)((state)=>state.partners);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: partnerToRemove , 1: setPartnerToRemove  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        id: ""
    });
    const handleOpenPopup = ()=>{
        setIsOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: tableStyles,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .TableHead */ .ss, {
                        theadItems: theadItems,
                        theadTrGridStyles: theadTrGridStyles,
                        theadTrColors: theadTrColors,
                        theadTrStyles: theadTrStyles
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partners__WEBPACK_IMPORTED_MODULE_7__/* .TableBody */ .R, {
                        tbodyItems: tbodyItems,
                        tbodyTrGridStyles: tbodyTrGridStyles,
                        tbodyTrColors: tbodyTrColors,
                        tbodyTrStyles: tbodyTrStyles,
                        handleEditPartner: handleEditPartner,
                        setPartnerToRemove: setPartnerToRemove,
                        handleOpenPopup: handleOpenPopup
                    })
                ]
            }),
            openForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partners_Form__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l, {
                handleCloseForm: handleCloseForm
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConfirmPopup__WEBPACK_IMPORTED_MODULE_4__/* .ConfirmPopup */ .P, {
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                onClick: ()=>{},
                title: "Remove partner",
                buttonTitle: "Remove",
                description: `Do you want to remove ${partnerToRemove.name} from the list of partners?`,
                colorsPrimaryBoton: "bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:bg-red-600 active:bg-red-600 text-white"
            })
        ]
    });
};
Table.propTypes = {
    theadItems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
    tbodyItems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
    theadTrGridStyles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    tbodyTrGridStyles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    tableStyles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
    handleCloseForm: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
    theadTrColors: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    theadTrStyles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    tbodyTrColors: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    tbodyTrStyles: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ TableHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const trStylesDefault = "text-sm leading-normal rounded-tr raleway-m rounded-tl md:h-12";
const trColorsDefault = "text-gray-600";
const TableHead = ({ theadItems , theadTrStyles , theadTrColors , theadTrGridStyles  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
            className: `${theadTrStyles || trStylesDefault} ${theadTrColors || trColorsDefault} ${theadTrGridStyles || ""}`,
            children: theadItems.map(({ label , stylesClasses  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                    className: `select-none ${stylesClasses} thead-item text-sm`,
                    children: [
                        index === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "mr-5",
                            children: "#"
                        }),
                        label
                    ]
                }, label))
        })
    });
};
TableHead.propTypes = {
    theadItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        stylesClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    })).isRequired,
    theadTrStyles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    theadTrColors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    theadTrGridStyles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ 5996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ar": () => (/* reexport safe */ _Layouts__WEBPACK_IMPORTED_MODULE_4__.A),
/* harmony export */   "Ei": () => (/* reexport safe */ _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "O$": () => (/* reexport safe */ _ActiveLink__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "V1": () => (/* reexport safe */ _PageTitle__WEBPACK_IMPORTED_MODULE_7__.V),
/* harmony export */   "YE": () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_9__.Y),
/* harmony export */   "ZR": () => (/* reexport safe */ _BurgerIcon__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__.h),
/* harmony export */   "iA": () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_10__.i),
/* harmony export */   "ss": () => (/* reexport safe */ _TableHead__WEBPACK_IMPORTED_MODULE_11__.s),
/* harmony export */   "tl": () => (/* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_8__.t),
/* harmony export */   "wp": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_6__.w),
/* harmony export */   "yX": () => (/* reexport safe */ _Links__WEBPACK_IMPORTED_MODULE_5__.y)
/* harmony export */ });
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2287);
/* harmony import */ var _BurgerIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5433);
/* harmony import */ var _ButtonIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2527);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3526);
/* harmony import */ var _Layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(654);
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3617);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1730);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5016);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1571);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5200);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6894);
/* harmony import */ var _TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_3__, _Layouts__WEBPACK_IMPORTED_MODULE_4__, _Links__WEBPACK_IMPORTED_MODULE_5__, _Navbar__WEBPACK_IMPORTED_MODULE_6__, _Sidebar__WEBPACK_IMPORTED_MODULE_9__, _Table__WEBPACK_IMPORTED_MODULE_10__]);
([_Header__WEBPACK_IMPORTED_MODULE_3__, _Layouts__WEBPACK_IMPORTED_MODULE_4__, _Links__WEBPACK_IMPORTED_MODULE_5__, _Navbar__WEBPACK_IMPORTED_MODULE_6__, _Sidebar__WEBPACK_IMPORTED_MODULE_9__, _Table__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ht": () => (/* reexport */ cardLinks),
  "Ts": () => (/* reexport */ initialPartnerState),
  "FV": () => (/* reexport */ navLinks),
  "Tr": () => (/* reexport */ reportTypesTest),
  "Fh": () => (/* reexport */ tableHeadPartners)
});

// UNUSED EXPORTS: partnersPerPage, staticReports

;// CONCATENATED MODULE: ./src/shared/data/navLinks.js
const navLinks = [
    {
        to: `${"/Xcelerator/CDLPRP"}/`,
        navPath: `/`,
        label: "Home"
    },
    {
        to: `${"/Xcelerator/CDLPRP"}/partners`,
        navPath: `/partners`,
        label: "Partners"
    }
];

;// CONCATENATED MODULE: ./src/shared/data/homeCardsLinks.js
const cardLinks = [
    {
        title: "Scan Report",
        description: "Returns all package scans collected on the previous day.",
        iconName: "scan_icon"
    },
    {
        title: "POD Report",
        description: "Returns delivery data for all orders completed the previous day.",
        iconName: "pod_icon"
    },
    {
        title: "Exception Report",
        description: "Returns data for exceptions logged on orders the previous day.",
        iconName: "exception_icon"
    }
];

;// CONCATENATED MODULE: ./src/shared/data/tableHeadPartners.js
const tableHeadPartners = [
    {
        label: "Name",
        stylesClasses: "px-5 py-2	text-left"
    },
    {
        label: "Email Address",
        stylesClasses: "px-5 py-2	text-left hidden lg:block"
    },
    {
        label: "Status",
        stylesClasses: "px-5 py-2	text-center hidden sm:block"
    },
    {
        label: "Report Types",
        stylesClasses: "px-5 py-2	text-center hidden 2xl:block"
    },
    {
        label: "Action",
        stylesClasses: "px-5 py-2	text-center"
    }
];

;// CONCATENATED MODULE: ./src/shared/data/partners.js
const initialPartnerState = {
    partnerName: "",
    email: "",
    active: 0,
    reportName: [
        {
            report_type_id: 1,
            active: 0,
            report_name: "Exception Report"
        },
        {
            report_type_id: 2,
            active: 0,
            report_name: "Scan Report"
        },
        {
            report_type_id: 3,
            active: 0,
            report_name: "POD Report"
        }
    ]
};
const reportTypesTest = [
    {
        report_type_id: 1,
        active: 0,
        report_name: "Exception Report"
    },
    {
        report_type_id: 2,
        active: 0,
        report_name: "Scan Report"
    },
    {
        report_type_id: 3,
        active: 0,
        report_name: "POD Report"
    }
];
const staticReports = (/* unused pure expression or super */ null && ([
    "SCAN REPORT",
    "EXCEPTION REPORT",
    "POD REPORT",
    "CLEAR REPORT"
]));
const partnersPerPage = (/* unused pure expression or super */ null && ([
    15,
    20,
    30,
    40,
    50
]));

;// CONCATENATED MODULE: ./src/shared/data/index.js






/***/ }),

/***/ 9074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mu": () => (/* reexport */ sidebarSlice/* hideSidebar */.mu),
  "Fn": () => (/* reexport */ partnersSlice/* setActivePartner */.Fn),
  "D4": () => (/* reexport */ partnersSlice/* setCurrentPage */.D4),
  "SL": () => (/* reexport */ partnersSlice/* setOpenForm */.SL),
  "u4": () => (/* reexport */ partnersSlice/* showAllPartners */.u4),
  "Sl": () => (/* reexport */ sidebarSlice/* showSidebar */.Sl),
  "aU": () => (/* reexport */ partnersSlice/* sortByActive */.aU),
  "fC": () => (/* reexport */ partnersSlice/* sortByInactive */.fC),
  "TL": () => (/* reexport */ hooks/* useAppDispatch */.T),
  "CG": () => (/* reexport */ hooks/* useAppSelector */.C)
});

// UNUSED EXPORTS: addPartner, filterPartners, partnersSlice, setCompanyNamesOptions, setLoading, setPartnersPerPage, sidebarSlice, store, testUseAppSelector, testUseAppSelectorFilter

// EXTERNAL MODULE: ./src/store/store.js
var store = __webpack_require__(7245);
// EXTERNAL MODULE: ./src/store/sidebar/sidebarSlice.js
var sidebarSlice = __webpack_require__(9778);
// EXTERNAL MODULE: ./src/store/partners/partnersSlice.js
var partnersSlice = __webpack_require__(8274);
// EXTERNAL MODULE: ./src/store/hooks.js
var hooks = __webpack_require__(9074);
;// CONCATENATED MODULE: ./src/store/test-app-selector.js
const test_app_selector_store = {
    sidebar: false,
    partners: []
};
const store2 = {
    partners: [
        {
            id: 1,
            name: "Partner Demo",
            email: "partnerdemo@email.cdl",
            isActive: false,
            typesReport: [
                "API"
            ]
        }
    ]
};
const testUseAppSelector = (myFunction)=>myFunction(test_app_selector_store);
const testUseAppSelectorFilter = (myFunction)=>myFunction(store2);

;// CONCATENATED MODULE: ./src/store/index.js







/***/ })

};
;
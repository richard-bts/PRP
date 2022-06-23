import { useState } from 'react';
import { SwitchForm } from './SwitchForm';

const initialState = {
  name: '',
  email: '',
  isActive: false,
  typesReport: []
};

export const Form = ({ userData = initialState }) => {

  const [isActivePartner, setIsActivePartner] = useState(false);
  const [reportTypes, setReportTypes] = useState({
    pod: false,
    scan_audit: false,
    exception: false,
    api: false
  });

  const handleTypeReport = (value, typeName) => {
    setReportTypes(prev => ({
      ...prev,
      [typeName]: value
    }));
  };
  
  return (
    <div className="fixed top-0 left-0 z-40 flex flex-row flex-wrap min-h-screen bg-slate-200/50 md:p-12 form-partner">
      <form className="absolute w-11/12 p-5 m-0 bg-white shadow md:w-3/5 lg:w-1/3 md:rounded-lg h-max top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">

        <h2 className="mb-6 text-2xl font-semibold text-center uppercase">Partner data</h2>

        <div className="flex flex-col py-3">
          <label className="pb-2 font-semibold text-gray-700">Name</label>
          <input type="text" className="p-2 bg-gray-100 rounded-lg shadow outline-none focus:bg-gray-200" placeholder="Partner name" />
        </div>

        <div className="flex flex-col py-3">
          <label className="pb-2 font-semibold text-gray-700">Email</label>
          <input type="text" className="p-2 bg-gray-100 rounded-lg shadow outline-none focus:bg-gray-200" placeholder="example@mail.xyz" />
        </div>

        <div className="flex flex-col gap-3 py-3">
          <label className="font-semibold text-gray-700">Is the partner active?</label>
          <SwitchForm
            switchEnabled={isActivePartner}
            setSwitchEnabled={setIsActivePartner}
          />
        </div>

        <div className="flex flex-col py-3">
          <label className="pb-2 font-semibold text-gray-700">Partner Types Report</label>
          <SwitchForm
            switchEnabled={ reportTypes.pod }
            typeReport="pod"
            isTypeReport
            handleTypeReport={ handleTypeReport }
          />
          <SwitchForm
            switchEnabled={ reportTypes.scan_audit }
            typeReport="scan_audit"
            isTypeReport
            handleTypeReport={ handleTypeReport }
          />
          <SwitchForm
            switchEnabled={ reportTypes.exception }
            typeReport="exception"
            isTypeReport
            handleTypeReport={ handleTypeReport }
          />
          <SwitchForm
            switchEnabled={ reportTypes.api }
            typeReport="api"
            isTypeReport
            handleTypeReport={ handleTypeReport }
          />
        </div>

        <div className="mt-2">
          <button className="w-full p-3 font-medium text-white transition-colors duration-300 bg-indigo-500 rounded hover:bg-indigo-600">Save partner</button>
        </div>
      </form>
    </div>
  )
}

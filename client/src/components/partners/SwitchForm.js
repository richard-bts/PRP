import PropTypes from 'prop-types';
import { Switch } from '@headlessui/react';

export const SwitchForm = ({ switchEnabled, setSwitchEnabled, isTypeReport, typeReport, handleTypeReport }) => {
  return (
    <div>
      <Switch
        checked={switchEnabled}
        name={isTypeReport ? typeReport : 'isActive'}
        onChange={e => isTypeReport ? handleTypeReport(e, typeReport) : setSwitchEnabled(!!e ? 1 : 0) }
        className={`${switchEnabled ? 'bg-indigo-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${ isTypeReport ? 'my-2' : '' }`}
      >
        <span className="sr-only">Active Partner</span>
        <span
          className={`${switchEnabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`}
        />
      </Switch>
      { isTypeReport ? 
        <span className="ml-3 text-lg font-semibold text-center uppercase">{ typeReport.replace('_', ' ') }</span>
        :
        <span className="ml-3 text-lg font-semibold text-center uppercase">{ switchEnabled ? 'YES' : 'NO' }</span>
      }
    </div>
  );
};

SwitchForm.propTypes = {
  switchEnabled: PropTypes.bool.isRequired,
  setSwitchEnabled: PropTypes.func,
  isTypeReport: PropTypes.bool,
  typeReport: PropTypes.string,
  handleTypeReport: PropTypes.func
};

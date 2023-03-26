import React from 'react';
import Backdrop from '../shared/Backdrop';
import { IoMdClose } from 'react-icons/io';
import SkillSet from '../shared/SkillSet';
import { skillset } from '@/lib/config';
import classNames from 'classnames';

type ModalArsenalProps = {
  className?: string;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const SkillSetModal = React.forwardRef<HTMLDivElement, ModalArsenalProps>(
  (props, ref) => {
    return (
      <Backdrop
        className={classNames(
          props.className,
          props.isOpen ? 'visible opacity-100' : 'invisible opacity-0',
          'transition'
        )}
      >
        <div
          className={classNames(
            'flex flex-col bg-white h-[500px] mx-2 w-[450px] rounded-md py-4 pl-4 overflow-hidden transition',
            props.isOpen
              ? 'visible opacity-100 scale-y-100'
              : 'invisible opacity-0 scale-y-75'
          )}
          ref={ref}
        >
          <div className="text-dark flex justify-between items-center pr-4">
            <h4 className="text-base md:text-lg font-semibold">
              Full Skill Set List
            </h4>
            <button
              className={classNames(
                'text-dark p-1 rounded hover:bg-gray-200 transition focus:outline-none focus:outline-primary focus:outline-offset-1',
                'active:outline-primary active:ring-1 active:text-[#7a828a] active:bg-gray-300'
              )}
              onClick={() => props.setIsOpen(!props.isOpen)}
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          </div>
          <div className="my-5 h-full overflow-auto">
            <SkillSet title="Frontend Centric" skillSets={skillset.frontend} />
            <SkillSet title="Backend Centric" skillSets={skillset.backend} />
            <SkillSet title="Ui framework" skillSets={skillset.ui} />
            <SkillSet
              title="Database and Streams"
              skillSets={skillset.database}
            />
            <SkillSet title="Productivity Boost" skillSets={skillset.boost} />
          </div>
          <footer className="flex items-center justify-end py-1 pr-4">
            <p className="text-xs font-light">
              *Some micro frameworks not included
            </p>
          </footer>
        </div>
      </Backdrop>
    );
  }
);

SkillSetModal.displayName = 'SkillSetModal';

export default SkillSetModal;

// react
import PropTypes from "prop-types";

// react icons
import {
  FaClockRotateLeft,
  FaClipboardList,
  FaClipboardCheck,
} from "react-icons/fa6";

// components
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import CreateBtn from "./../../../shared/CreateBtn/CreateBtn";

// hooks
import useTasks from "./../../../../hooks/useTasks";

const TaskCount = ({ tasksData = null, modifyClasses = "" }) => {
  const { openCreateForm } = useTasks();
  const todoTasksCount = tasksData && tasksData[0]?.tasks?.length;
  const ongoingTasksCount = tasksData && tasksData[1]?.tasks?.length;
  const completedTaksCount = tasksData && tasksData[2]?.tasks?.length;

  // styles
  const mainBoxStyles = "w-[10rem] aspect-square p-4 rounded-2xl bg-white";
  const iconBoxStyles = "p-2 w-max rounded-lg mb-elementGapSm";
  const iconStyles = "text-xl";
  const textBoxStyles = "font-semibold";
  const statusTextStyles = "font-medium text-gray-400";
  const numberTextStyles = "text-3xl font-extrabold inline-block mr-1";
  const afterNumberTextStyles = "inline-block";

  if (tasksData) {
    return (
      <div className={`${modifyClasses}`}>
        <SectionHeading text="Statistics" />
        {/* inner container */}

        <div className="flex flex-col gap-elementGapMd lg:flex-row items-start lg:justify-between">
          <div className="overflow-x-auto rounded-2xl p-elementGapSm bg-lightGray flex flex-col sm:flex-row gap-elementGapSm w-max">
            {/* to-do */}
            <div className={mainBoxStyles}>
              {/* icon */}
              <div className={`bg-red-100 ${iconBoxStyles}`}>
                <FaClipboardList className={`text-red-400 ${iconStyles}`} />
              </div>

              <div className={textBoxStyles}>
                <p className={statusTextStyles}>Remaining</p>
                <p className={numberTextStyles}>{todoTasksCount}</p>
                <p className={afterNumberTextStyles}>Task</p>
              </div>
            </div>

            {/* on going */}
            <div className={mainBoxStyles}>
              {/* icon */}
              <div className={`bg-yellow-100 ${iconBoxStyles}`}>
                <FaClockRotateLeft
                  className={`text-yellow-400 ${iconStyles}`}
                />
              </div>

              <div className={textBoxStyles}>
                <p className={statusTextStyles}>Ongoing</p>
                <p className={numberTextStyles}>{ongoingTasksCount}</p>
                <p className={afterNumberTextStyles}>Task</p>
              </div>
            </div>

            {/* done */}
            <div className={mainBoxStyles}>
              {/* icon */}
              <div className={`bg-green-100 ${iconBoxStyles}`}>
                <FaClipboardCheck className={`text-green-400 ${iconStyles}`} />
              </div>

              <div className={textBoxStyles}>
                <p className={statusTextStyles}>Completed</p>
                <p className={numberTextStyles}>{completedTaksCount}</p>
                <p className={afterNumberTextStyles}>Task</p>
              </div>
            </div>
          </div>

          <CreateBtn text="Add New task" onClickFunction={openCreateForm} />
        </div>
      </div>
    );
  }
};

TaskCount.propTypes = {
  tasksData: PropTypes.array,
  modifyClasses: PropTypes.string,
};

export default TaskCount;

import React, { FC, ReactNode, MouseEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { Collapse as RSCollapse } from 'reactstrap';
import classnames from 'classnames';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '../FontAwesomeIcon';

const useStyles = createUseStyles({
  collapseWrapper: {
    display: 'flex',
    alignItems: 'stretch',
    '& .toggle-collapse': {
      fontSize: '2.3rem',
      cursor: 'pointer',
      marginLeft: '8px',
      display: 'flex',
      alignItems: 'center',
      '& .fa-caret-right': {
        marginRight: '9px',
      },
    },
    '&.disabled .toggle-collapse': {
      cursor: 'default',
    },
  },
  collapseElement: {
    flex: 1,
    '& h4': { marginTop: '7px', padding: '13px 10px 10px 10px' },
    '& .header-actions': {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      paddingRight: '10px',
    },
  },
});

interface CollapseProps {
  // Determines if the Collapse component is open
  isOpen: boolean;
  // Toggles the isOpen boolean between true and false
  toggleCollapse: (event: MouseEvent<HTMLElement>) => void;
  // The title to display in the collapse header
  title: ReactNode;
  // Anything to be rendered within the collapse
  children: ReactNode;
  // Anything to render outside collapse body but within the container
  alwaysVisibleChildren?: ReactNode;
  // If true will gray out and disable */
  disableToggle?: boolean;
  className?: string;
  headerActions?: ReactNode;
  toggleElement?: ReactNode;
}

const Collapse: FC<CollapseProps> = (props) => {
  const styles = useStyles();
  const collapseClasses = classnames(
    `collapse-element ${props.className || ''} ${styles.collapseElement}`,
  );
  const wrapperClasses = classnames(`collapse-wrapper ${styles.collapseWrapper}`, {
    disabled: props.disableToggle,
  });

  return (
    <div className={collapseClasses}>
      <div className={wrapperClasses}>
        <div className='d-flex'>
          <h4>{props.title}</h4>
          <span className='header-actions'>{props.headerActions}</span>
        </div>
        <span
          className='toggle-collapse'
          onClick={(event) => {
            if (!props.disableToggle && !event.defaultPrevented) {
              props.toggleCollapse(event);
            }
          }}
        >
          {props.toggleElement || (
            <FontAwesomeIcon icon={props.isOpen ? faCaretDown : faCaretRight} />
          )}
        </span>
      </div>
      <RSCollapse isOpen={props.isOpen}>
        <div>{props.children}</div>
      </RSCollapse>
      {props.alwaysVisibleChildren ? <div>{props.alwaysVisibleChildren}</div> : ''}
    </div>
  );
};

export default Collapse;

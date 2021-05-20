import React, { useState } from 'react';
import classNames from 'classname';
import './index.less';
type preValue = 'rc-checkbox';

interface Props {
  prefixCls?: string;
  className?: string;
  type?: string;
  prefixCls?: string;
  id?: string;
  defaultChecked?: number | boolean;
  checked?: number | boolean;
  disabled?: boolean;
  value?: any;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = (props) => {
  const {
    prefixCls,
    className,
    type,
    id,
    defaultChecked,
    disabled,
    value,
    onFocus,
    onBlur,
    style,
    onChange,
    ...others
  } = props;
  console.log(props);
  console.log(prefixCls);
  // prefixCls = 'rc-checkbox';
  const focus = () => {
    this.input.focus();
  };
  const [checked, setChecked] = useState(false);
  const blur = () => {
    this.input.blur();
  };
  const saveInput = (node) => {
    var input = node;
  };
  const handleChange = (e) => {
    if (disabled) {
      return;
    }
    if (!('checked' in props)) {
      setChecked(e.target.checked);
    }
    if (onChange) {
      // setChecked(props.checked);
      // onChange(
      //   setChecked(e.target.checked)
      //   stopPropagation() {
      //     e.stopPropagation();
      //   },
      //   preventDefault() {
      //     e.preventDefault();
      //   },
      // )
      // onChange = () => {
      //   setChecked(e.target.checked);
      // };
    }
  };

  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled,
  });
  const globalProps = Object.keys(others).reduce((prev, key) => {
    if (
      key.substr(0, 5) === 'aria-' ||
      key.substr(0, 5) === 'data-' ||
      key === 'role'
    ) {
      prev[key] = others[key];
    }
    return prev;
  }, {});
  return (
    <span className={classString} style={style}>
      <input
        disabled={disabled}
        className={`${prefixCls}-input`}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        {...globalProps}
        checked={checked}
        value={value}
        onChange={handleChange}
      />
      <span className={`${prefixCls}-inner`}>333</span>
    </span>
  );
};
Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
};
export default Checkbox;

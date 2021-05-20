import * as React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
//
// import MemoChildren from './MemoChildren'
// import type { IDialogChildProps } from '..'
const sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'nonde',
};

export type ContentProps = {
  motionName: string;
  ariaId: string;
  onVisibleChanged: (visible: boolean) => void;
  onMouseDown: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
};

export type ContentRef = {
  focus: () => void;
  changeActive: (next: boolean) => void;
};

const Content = React.forwardRef<ContentRef, ContentProps>((props, ref) => {
  const {
    closable,
    prefixCls,
    width,
    height,
    footer,
    title,
    closeIcon,
    style,
    className,
    visible,
    forceRender,
    bodyStyle,
    bodyProps,
    children,
    destroyOnClose,
    modalRender,
    motionName,
    ariaId,
    onClose,
    onVisibleChanged,
    onMouseDown,
    onMouseUp,
    mousePosition,
  } = props;

  const sentinelStartRef = useRef<HTMLDivElement>();
  const sentinelEndRef = useRef<HTMLDivElement>();
  const dialogRef = useRef<HTMLDivElement>();

  // =========================== Ref ============================
  // useImperativeHandle(ref, createHandle, [deps]);
});

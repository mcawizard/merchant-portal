import React, { memo, CSSProperties, ReactElement, useMemo } from 'react';
import { WithTooltip, WithTooltipProps } from '../WithTooltip';
import { R } from '@core/utils/r';

export enum TableAction {
  delete = 'delete',
  edit = 'edit',
  copy = 'copy',
  view = 'view',
  assign = 'assign',
  permission = 'permission',
  comment = 'comment',
  play = 'play',
  link = 'link',
  share = 'share',
  lock = 'lock',
  unlock = 'unlock',
  date = 'date',
  move = 'move',
  add = 'add',
  embed = 'embed',
}

const ALL_TYPES = [
  TableAction.delete,
  TableAction.edit,
  TableAction.copy,
  TableAction.view,
  TableAction.assign,
  TableAction.permission,
  TableAction.comment,
  TableAction.play,
  TableAction.link,
  TableAction.share,
  TableAction.lock,
  TableAction.unlock,
  TableAction.date,
  TableAction.move,
  TableAction.add,
  TableAction.embed,
];

export type Tooltips = { [key in TableAction]?: string };

export interface TableActionsProps {
  onDelete?(): void;
  onEdit?(): void;
  onCopy?(): void;
  onView?(): void;
  onAdd?(): void;
  onAssign?(): void;
  onPermission?(): void;
  onComment?(): void;
  onPlay?(): void;
  onLink?(): void;
  onLock?(): void;
  onUnlock?(): void;
  onDate?(): void;
  onMove?(): void;
  onShare?(): void;
  onEmbed?(): void;
  style?: CSSProperties;
  noYPadding?: boolean;
  children?: ReactElement;
  tooltips?: Tooltips;
  tooltipProps?: Partial<WithTooltipProps>;
}

export const TableActions = memo((props: TableActionsProps) => {
  const { noYPadding = false } = props;

  const tooltips: Tooltips = useMemo(() => {
    const defaultTooltips: Tooltips = {};
    ALL_TYPES.forEach(type => {
      defaultTooltips[type] = props.tooltips?.[type] || '';
    });
    return defaultTooltips;
  }, [props.tooltips]);
  return (
    <div style={props.style} className={`actions d-flex ${noYPadding ? '' : 'py-2'}`}>
      <TableIcon
        tooltip={tooltips.delete}
        onClick={props.onDate}
        className="far fa-calendar-check font-size-13 text-primary"
        style={{ marginTop: '0.10rem' }}
      />
      <TableIcon tooltip={tooltips.comment} onClick={props.onComment} className="bx bx-comment font-size-16" />
      <TableIcon tooltip={tooltips.lock} onClick={props.onLock} className="bx bx-lock-alt font-size-16" />
      <TableIcon tooltip={tooltips.unlock} onClick={props.onUnlock} className="bx bx-lock-open-alt font-size-16" />
      <TableIcon tooltip={tooltips.add} onClick={props.onAdd} className="fa fa-plus font-size-16 text-primary" />
      <TableIcon tooltip={tooltips.view} onClick={props.onView} className="mdi mdi-eye font-size-16 text-dark" iconStyle={{ marginTop: -4 }} />
      <TableIcon tooltip={tooltips.permission} onClick={props.onPermission} className="bx bxs-key font-size-16" />
      <TableIcon tooltip={tooltips.assign} onClick={props.onAssign} className="bx bx-user font-size-16" />
      <TableIcon tooltip={tooltips.copy} onClick={props.onCopy} className="bx bx-copy font-size-16 text-dark" />
      <TableIcon tooltip={tooltips.edit} onClick={props.onEdit} className="bx bx-edit font-size-16" />
      <TableIcon tooltip={tooltips.delete} onClick={props.onDelete} className="bx bx-trash font-size-16 text-danger" />
      <TableIcon tooltip={tooltips.play} onClick={props.onPlay} className="bx bx-play font-size-16 text-primary" />
      <TableIcon tooltip={tooltips.link} onClick={props.onLink} className="bx bx-link-external font-size-16 text-primary" />
      <TableIcon tooltip={tooltips.share} onClick={props.onShare} className="bx bx-share font-size-16 text-primary" />
      <TableIcon tooltip={tooltips.move} onClick={props.onMove} className="bx bx-move font-size-16 text-primary" />
      <TableIcon tooltip={tooltips.embed} onClick={props.onEmbed} className="bx bx-code font-size-16 text-primary" />
      {props.children}
    </div>
  );
});

interface TableIconProps {
  onClick?(): void;
  tooltip?: string;
  className: string;
  tooltipProps?: Partial<WithTooltipProps>;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
}

const TableIcon = memo((props: TableIconProps) => {
  const { onClick, tooltip, className, tooltipProps, style, iconStyle } = props;
  if (!props.onClick) return null;
  const content = (
    <a className="d-flex mr-2" onClick={onClick} style={style}>
      <i className={className} style={iconStyle}></i>
    </a>
  );
  if (tooltip && !R.isEmpty(tooltip)) {
    return (
      <WithTooltip tooltip={tooltip} {...tooltipProps}>
        {content}
      </WithTooltip>
    );
  }
  return content;
});

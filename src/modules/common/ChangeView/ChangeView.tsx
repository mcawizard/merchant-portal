import { Tooltip } from 'antd';
import React, { memo, useEffect, useState } from 'react';

export enum PageViewType {
  grid = 'grid',
  list = 'list',
  timeline = 'timeline',
}

export interface ChangeViewProps {
  views?: PageViewType[];
  initialView?: PageViewType;
  onChange?(view: PageViewType): void;
}

export const ChangeView = memo((props: ChangeViewProps) => {
  const { views = [PageViewType.grid, PageViewType.list], initialView = PageViewType.grid, onChange } = props;
  const [currentView, setView] = useState<PageViewType>(initialView);
  useEffect(() => {
    onChange && onChange(currentView);
  }, [onChange, currentView]);

  return (
    <div className="d-flex" key="view1">
      {views.includes(PageViewType.grid) && (
        <span className="d-flex hover-pointer ml-3" id="grid_view" onClick={() => setView(PageViewType.grid)}>
          <Tooltip title="Grid View">
            <i className={`fal fa-th font-size-20 ${currentView === PageViewType.grid ? 'text-primary' : 'text-dark'}`}></i>
          </Tooltip>
        </span>
      )}
      {views.includes(PageViewType.list) && (
        <span className="d-flex hover-pointer ml-3" id="list_view" onClick={() => setView(PageViewType.list)}>
          <Tooltip title="List View">
            <i className={`fal fa-th-list font-size-20 ${currentView === PageViewType.list ? 'text-primary' : 'text-dark'}`}></i>
          </Tooltip>
        </span>
      )}
      {views.includes(PageViewType.timeline) && (
        <span className="d-flex hover-pointer ml-3" id="timeline_view" onClick={() => setView(PageViewType.timeline)}>
          <Tooltip title="Timeline View">
            <i className={`fal fa-clock font-size-20 ${currentView === PageViewType.timeline ? 'text-primary' : 'text-dark'}`}></i>
          </Tooltip>
        </span>
      )}
    </div>
  );
});

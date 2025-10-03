import React, { memo } from 'react';
import './index.scss';
export interface ReadMoreProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  height?: number;
}

export const ReadMore = memo((props: ReadMoreProps) => {
  const { lines = 3, height = 0, ...rest } = props;
  const ref = React.createRef<HTMLDivElement>();
  const [showMore, setShowMore] = React.useState(false);
  const [showLink, setShowLink] = React.useState(false);

  React.useLayoutEffect(() => {
    if (ref.current) {
      if (ref.current.clientHeight < ref.current.scrollHeight) {
        setShowLink(true);
      }
    }
  }, [ref]);

  const onClickMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div {...rest}>
      <div ref={ref} className={showMore ? '' : `readmore-container lines-${lines}`} style={{ height: height > 0 && showMore ? undefined : height }}>
        {props.children}
      </div>
      {showLink && (
        <span className="link more" onClick={onClickMore}>
          {showMore ? 'show less' : 'show more'}
        </span>
      )}
    </div>
  );
});

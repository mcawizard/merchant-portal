import { JobProgress } from './JobProgress';
import { notification } from 'antd';

function openJobProgress(title: string, jobId: string) {
  notification.open({
    closable: true,
    duration: 0,
    placement: 'bottomRight',
    message: title,
    key: jobId,
    style: {
      width: 500,
    },
    description: <JobProgress jobId={jobId} />,
  });
}

export { openJobProgress };

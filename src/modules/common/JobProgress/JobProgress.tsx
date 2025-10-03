import { useBloc } from '@core/utils/bloc';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { Button, notification, Progress, Space, Spin } from 'antd';
import React, { memo, useCallback } from 'react';
import { JobProgressBloc } from './JobProgressBloc';
import { tap } from 'rxjs/operators';
import { useLazyEffect } from '@core/utils/react';
import { ExportJobSuccess } from '@business/entities/job';
import { R } from '@core/utils/r';

export interface JobProgressProps {
  jobId: string;
}

export const JobProgress = memo((props: JobProgressProps) => {
  const { jobId } = props;
  const user = useObservable(Session.user$);
  const bloc = useBloc(JobProgressBloc, jobId);
  const job = useObservable(bloc.job$);

  const onCancel = useCallback(() => {
    bloc
      .cancelJob(jobId)
      .pipe(tap(() => notification.destroy(jobId)))
      .subscribe();
  }, [jobId, bloc]);

  const onEmail = useCallback(() => {
    bloc
      .emailJob(jobId)
      .pipe(tap(() => notification.destroy(jobId)))
      .subscribe();
  }, [jobId, bloc]);

  useLazyEffect(() => {
    if (job && job.isCompleted) {
      if (R.get(job, 'success.download') == true) {
        const output = job.success as ExportJobSuccess;
        bloc
          .download(job.jobId, output.filename)
          .pipe(tap(() => notification.destroy(jobId)))
          .subscribe();
      } else {
        notification.destroy(jobId);
      }
    }
  }, [job]);

  if (!job)
    return (
      <div className="mt-4">
        <Spin className="mr-2" />
        Waiting for the job to start...
      </div>
    );

  return (
    <div>
      <div className="text-center">
        <div>
          {job.title}, {job.remainingTime} remaining...
        </div>
      </div>
      <Progress percent={job.progress} size="default" showInfo={false} />
      <div className="mt-4 d-flex justify-content-end">
        <Button type="link" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onEmail} type="primary" icon={<i className="fa-duotone fa-solid fa-envelope"></i>}>
          Email {user?.email}
        </Button>
      </div>
    </div>
  );
});

import React, { memo } from 'react';
import { useObservable } from '@core/utils/hooks/rxjs';
import { useBillingPage } from '../BillingPageContext';
import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  link: css`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    color: #d9d9d9;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    border: none;
    text-align: left;
    text-decoration: underline;
    
    &:hover {
      color: #ffffff;
      transform: translateY(-1px);
      text-decoration: underline;
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      text-decoration: none;
    }
  `,
  icon: css`
    font-size: 12px;
    opacity: 0.8;
  `
};

export const BillingLinks = memo(() => {
  const { bloc } = useBillingPage();
  const links = useObservable(bloc.links$, null);

  const handleLinkClick = (url: string | undefined) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div css={styles.container}>
      <button
        css={styles.link}
        onClick={() => handleLinkClick(links?.termsAndConditions)}
        disabled={!links?.termsAndConditions}
      >
        <span>Terms and Conditions</span>
        <i className="fas fa-external-link-alt" css={styles.icon} />
      </button>
      
      <button
        css={styles.link}
        onClick={() => handleLinkClick(links?.privacyPolicy)}
        disabled={!links?.privacyPolicy}
      >
        <span>Privacy Policy</span>
        <i className="fas fa-external-link-alt" css={styles.icon} />
      </button>
      
      <button
        css={styles.link}
        onClick={() => handleLinkClick(links?.cancellationPolicy)}
        disabled={!links?.cancellationPolicy}
      >
        <span>Cancellation Policy</span>
        <i className="fas fa-external-link-alt" css={styles.icon} />
      </button>
    </div>
  );
});

import { VeryCompactCompanyResponse } from '../company';
import { DealLenderResponse } from '../deal-lender-offer';

export interface SubmissionResponse {
  id: string;
  contractMID: string;
  createdAt: string;
  company: VeryCompactCompanyResponse;
  dealStatus: string;
  accountingStatus: AccountingStatusType;
  dealLenderOffer: DealLenderResponse;
  fundedDate: number;
  deal_total_rtr: number;
  balance: DealBalanceResponse;
}

export interface DealBalanceResponse {
  id: string;
  collectedPayments: number;
  totalPayments: number;
  outstandingBalance: number;
  paidInPercent: number;
}

export enum AccountingStatusType {
  wireOff = 'Write-off',
  active = 'Active',
  collection = 'Collection',
  legal = 'Legal',
  cencelled = 'Cancelled',
  complete = 'Complete',
  completWithDiscount = 'Complete with discount',
  completeViaLegalSettlement = 'Complete via Legal Settlement',
}

export type CompactSubmissionResponse = Pick<SubmissionResponse, 'id' | 'contractMID' | 'createdAt' | 'company' | 'dealLenderOffer' | 'dealStatus'>;

export type FundedSubmissionResponse = Pick<
  SubmissionResponse,
  'id' | 'contractMID' | 'fundedDate' | 'company' | 'deal_total_rtr' | 'balance' | 'accountingStatus'
>;

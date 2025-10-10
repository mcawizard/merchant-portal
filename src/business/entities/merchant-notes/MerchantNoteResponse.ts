export interface MerchantNoteResponse {
  id: string;
  merchant_id: string;
  user_id: string;
  name: string;
  merchant_user_note: string;
  note_type: string;
  merchant_note_processor_role: string;
  pinned: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateMerchantNoteRequest {
  merchant_id: string;
  merchant_user_note: string;
  note_type?: string;
  pinned?: boolean;
}

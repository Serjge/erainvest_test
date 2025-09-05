export type ShareholderType = {
  holder: string;
  share_percent: string;
};

export type CompanySharesType = {
  [companyTicker: string]: ShareholderType[];
};

export interface ApiResponse {
  success: boolean;
  data: CompanySharesType;
}

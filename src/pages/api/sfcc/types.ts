// Contact US Data
export interface ContactUsData {
    SuppliedName?: string;
    Identify_Record_Type__c?: string;
    SuppliedEmail?: string;
    SuppliedPhone?: string;
    Subject?: string;
    Description?: string;
    Origin?: string;
    Priority?: string;
    Type?: string;
    External_Site_ID__c?: string;
    SFCC_URL__c?: string;
    Brand__c?: string;
    Account?: Account;
}

interface Account {
    Customer_Number__c?: string;
}

// Warranty Data
export interface WarrantyData {
    FirstName__c?: string;
    LastName__c?: string;
    SuppliedEmail?: string;
    SuppliedPhone?: string;
    Address_1__c?: string;
    Address_2__c?: string | null;
    City__c?: string;
    State__c?: string;
    PostalCode__c?: string;
    Location__c?: string;
    StyleNumber__c?: string;
    Size__c?: string;
    Date_Of_Purchase__c?: string;
    Miles__c?: string;
    Activity__c?: string;
    Subject?: string;
    Origin?: string;
    Priority?: string;
    Type?: string;
    Identify_Record_Type__c?: string;
    Description?: string;
    SFCC_URL__c?: string;
    Brand__c?: string;
    External_Site_ID__c?: string;
}

// Token Data
export interface TokenData {
    access_token?: string;
    instance_url?: string;
    id?: string;
    token_type?: string;
    issued_at?: string;
    signature?: string;
    error?: string;
    error_description?: string;
}

interface Attributes {
    type: string;
}

interface Record {
    attributes: Attributes;
    Name: string;
    Body: string;
    parentId?: string;
}

// Attachment Data
export interface AttachmentData {
    records: Record[];
}

// Case Data 
export interface CaseData {
    id?: string;
    success?: boolean;
    errors?: string[];
}
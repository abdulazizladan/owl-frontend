// src/app/features/fee-management/models/fee.model.ts
// Define interfaces for the data models
export interface FeeType {
    id: string;
    name: string; // e.g., "Tuition Fee", "Hostel Fee", "PTA Levy"
    amount: number;
    currency: string; // e.g., "NGN"
    category: 'academic' | 'administrative' | 'extra';
    appliesTo: 'all' | 'new_students' | 'returning_students' | 'specific_class';
    applicableClasses?: string[]; // e.g., ['JSS1', 'SSS2']
    isInstallmentAllowed: boolean;
    termsApplicable: number[]; // e.g., [1, 2, 3] for terms
    sessionId: string; // The academic session this fee type applies to
  }
  
  export interface Payment {
    id: string;
    studentId: string;
    feeTypeId?: string; // Optional if payment covers multiple fee types
    amountPaid: number;
    paymentDate: Date;
    paymentMethod: 'cash' | 'bank_transfer' | 'pos' | 'online';
    transactionRef?: string; // Reference for bank transfer/online payments
    receiptNo: string;
    recordedByUserId: string; // User who recorded the payment
    createdAt: Date;
  }
  
  export interface StudentFee {
    id: string;
    studentId: string;
    feeTypeId: string; // Reference to FeeType
    term: number; // e.g., 1, 2, 3
    session: string; // e.g., "2024/2025"
    amountDue: number;
    amountPaid: number;
    balance: number;
    status: 'Paid' | 'Partially Paid' | 'Overdue' | 'Waived';
    invoiceId?: string; // Link to the invoice
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Invoice {
    id: string;
    studentId: string;
    term: number;
    session: string;
    issueDate: Date;
    dueDate: Date;
    totalAmountDue: number;
    totalAmountPaid: number;
    balance: number;//totalAmountDue - totalAmountPaid
    breakdown: { feeTypeId: string; amount: number; }[]; // Array of fee components
    status: 'Generated' | 'Partially Paid' | 'Paid' | 'Overdue';
    generatedByUserId: string;
    createdAt: Date;
  }
  
  export interface Waiver {
    id: string;
    studentId: string;
    feeTypeId?: string; // Optional if waiver applies to overall fees
    amountWaived: number;
    reason: string;
    approvedByUserId: string;
    approvalDate: Date;
    status: 'Approved' | 'Pending' | 'Rejected';
    createdAt: Date;
  }
  
  export interface Refund {
    id: string;
    studentId: string;
    amountRefunded: number;
    reason: string;
    refundDate: Date;
    processedByUserId: string;
    transactionRef?: string;
    createdAt: Date;
  }
  
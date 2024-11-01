import { format } from 'date-fns';
import { SubmissionData } from '../types';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyHG8UZXgH6w5oNykj8bBseMupPWi90zWh5wNRyjZrhfOqhSNuj6bfCJjkFXV9-Lt4C/exec';

export async function submitToSheet(data: SubmissionData): Promise<boolean> {
  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return true;
  } catch (error) {
    console.error('Error submitting to sheet:', error);
    return false;
  }
}
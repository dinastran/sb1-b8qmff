import { SubmissionData } from '../types';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwmxQhlTu0MQtBKVtsjOzN1ru44u35DFuqP91JWokehyEWmmLON6DvH5MFosqSSRBwy/exec';

export async function submitToSheet(data: SubmissionData): Promise<boolean> {
  try {
    // Transform data sebelum dikirim
    const transformedData = {
      ...data,
      shuburJamaah: transformAnswer(data.shuburJamaah),
      quranReading: transformAnswer(data.quranReading)
    };

    const response = await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transformedData),
    });

    // Tunggu beberapa detik untuk memastikan data tersimpan
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return true;
  } catch (error) {
    console.error('Error submitting to sheet:', error);
    return false;
  }
}

// Fungsi untuk mengubah format jawaban
function transformAnswer(value: 'yes' | 'no' | 'not_selected'): string {
  switch (value) {
    case 'yes':
      return 'Ya';
    case 'no':
      return 'Tidak';
    default:
      return '';
  }
}

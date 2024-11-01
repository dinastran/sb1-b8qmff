export interface User {
  name: string;
  sector: 'Banjaran' | 'Cangkuang' | 'Pangalengan';
  status: 'Karyawan' | 'Pelajar';
}

export interface ChecklistData {
  shuburJamaah: 'yes' | 'no' | 'not_selected';
  quranReading: 'yes' | 'no' | 'not_selected';
  submissionDate?: string;
}

export interface SubmissionData extends ChecklistData {
  name: string;
  sector: string;
  status: string;
  week: string;
  submissionDate: string;
}

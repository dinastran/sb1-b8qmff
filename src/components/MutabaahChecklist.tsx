import React, { useState } from 'react';
import { ClipboardCheck, Building2, BookText, Save } from 'lucide-react';
import { format } from 'date-fns';
import { ChecklistItem } from './ChecklistItem';
import { User, ChecklistData, SubmissionData } from '../types';
import { submitToSheet } from '../utils/sheets';

interface Props {
  user: User;
  checklist: ChecklistData;
  onChecklistChange: (data: ChecklistData) => void;
}

export function MutabaahChecklist({ user, checklist, onChecklistChange }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    const submissionDate = format(new Date(), 'yyyy-MM-dd');
    const weekNumber = format(new Date(), "'Week' w, yyyy");
    
    const submissionData: SubmissionData = {
      ...checklist,
      name: user.name,
      sector: user.sector,
      status: user.status,
      week: weekNumber,
      submissionDate,
    };

    const success = await submitToSheet(submissionData);
    if (success) {
      setSubmitted(true);
      onChecklistChange({ ...checklist, submissionDate });
    }
    setSubmitting(false);
  };

  const isFormComplete = checklist.shuburJamaah !== 'not_selected' && checklist.quranReading !== 'not_selected';

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-center mb-6">
          <ClipboardCheck className="h-12 w-12 text-emerald-600" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Mutaba'ah Usbu'iyah
          </h1>
          <p className="text-gray-600 mt-2">Selamat datang, {user.name}</p>
          <div className="text-sm text-gray-500 mt-1">
            {user.sector} - {user.status}
          </div>
        </div>
        
        <div className="space-y-6">
        <ChecklistItem
          icon={Building2}
          label="Shalat Shubuh berjamaah di masjid minimal 4x sepekan"
          value={checklist.shuburJamaah}
          onChange={(value) =>
            onChecklistChange({ ...checklist, shuburJamaah: value })
          }
        />

        <ChecklistItem
          icon={BookText}
          label="Membaca Al-Qur'an minimal 4x sepekan"
          value={checklist.quranReading}
          onChange={(value) =>
            onChecklistChange({ ...checklist, quranReading: value })
          }
        />
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={submitting || submitted || !isFormComplete}
          className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition duration-200 ${
            submitted
              ? 'bg-emerald-100 text-emerald-800 cursor-not-allowed'
              : submitting
              ? 'bg-emerald-300 cursor-wait'
              : !isFormComplete
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
        >
          <Save className="h-5 w-5" />
          <span>
            {submitted
              ? 'Terkirim ✓'
              : submitting
              ? 'Mengirim...'
              : 'Kirim Laporan'}
          </span>
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {submitted
            ? "Alhamdulillah! Laporan telah terkirim 🌟"
            : isFormComplete
            ? "Siap untuk mengirim laporan! 📝"
            : "Ayo semangat mencapai target! 💪"}
        </p>
      </div>
      </div>
    </div>
  );
}

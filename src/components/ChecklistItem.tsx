import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  label: string;
  value: 'yes' | 'no' | 'not_selected';
  onChange: (value: 'yes' | 'no' | 'not_selected') => void;
}

export function ChecklistItem({ icon: Icon, label, value, onChange }: Props) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6 text-emerald-600" />
        <label className="flex-1 text-gray-700">{label}</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as 'yes' | 'no' | 'not_selected')}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="not_selected">Pilih</option>
          <option value="yes">Ya</option>
          <option value="no">Tidak</option>
        </select>
      </div>
    </div>
  );
}

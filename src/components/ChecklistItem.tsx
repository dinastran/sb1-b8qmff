import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ChecklistItem({ icon: Icon, label, checked, onChange }: Props) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6 text-emerald-600" />
        <label className="flex-1 text-gray-700">{label}</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 text-emerald-600 rounded focus:ring-emerald-500"
        />
      </div>
    </div>
  );
}